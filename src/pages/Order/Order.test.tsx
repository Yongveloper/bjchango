import { screen } from '@testing-library/react';
import Order from './Order';
import { renderWithProviders } from '__test__/renderWithProviders';
import fetchMock from 'jest-fetch-mock';

describe('Order 컴포넌트 테스트', () => {
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

  it('Header가 정상적으로 렌더링 되어야 함', () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockData));
    renderWithProviders(<Order />);
    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();
  });

  it('로딩 상태일 때 로딩 상태가 표시 되어야 함', async () => {
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

  it('에러 발생 시 에러 상태가 표시 되어야 함', async () => {
    fetchMock.mockReject(() => Promise.reject('Error'));
    renderWithProviders(<Order />);

    expect(await screen.findByText(/목록을/)).toBeInTheDocument();
    expect(await screen.findByText(/불러오지 못했습니다./)).toBeInTheDocument();
  });
});
