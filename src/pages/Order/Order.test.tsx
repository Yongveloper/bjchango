import { screen, waitFor } from '@testing-library/react';
import Order from './Order';
import { renderWithProviders } from '__test__/renderWithProviders';
import fetchMock from 'jest-fetch-mock';

describe('<Order />', () => {
  const mockData = [
    {
      id: 1,
      name: 'product1',
      event: 'event1',
      materialType: 'type1',
      price: 100,
    },
  ];

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('Header가 정상적으로 렌더링 되어야 함', () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockData));
    renderWithProviders(<Order />);
    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();
  });

  test('로딩 상태일 때 로딩 상태가 표시 되어야 함', async () => {
    fetchMock.mockResponseOnce(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve(JSON.stringify(mockData)), 2000)
        )
    );

    renderWithProviders(<Order />);

    expect(await screen.findByText(/목록을/)).toBeInTheDocument();
    expect(await screen.findByText(/불러오고 있습니다./)).toBeInTheDocument();
  });

  test('에러 발생 시 에러 상태가 표시 되어야 함', async () => {
    fetchMock.mockReject(() => Promise.reject('Error'));
    renderWithProviders(<Order />);

    expect(await screen.findByText(/목록을/)).toBeInTheDocument();
    expect(await screen.findByText(/불러오지 못했습니다./)).toBeInTheDocument();
  });

  test('정상적으로 데이터를 받아오면 제품을 표시해야 함', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockData));
    renderWithProviders(<Order />);

    const productCardElement = await waitFor(() =>
      screen.getByText('product1')
    );

    expect(productCardElement).toBeInTheDocument();
  });
});
