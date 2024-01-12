import { screen } from '@testing-library/react';
import Order from './Order';
import renderWithProvider from '__test__/renderWithProviders';
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

  afterEach(() => {
    fetchMock.resetMocks();
  });

  it('로고 이미지가 정상적으로 렌더링되는지 검사', () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockData));
    renderWithProvider(<Order />);
    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();
  });

  it('로딩 상태일 때 Loader 컴포넌트가 렌더링되는지 검사', async () => {
    fetchMock.mockResponseOnce(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve(JSON.stringify(mockData)), 2000)
        )
    );

    renderWithProvider(<Order />);

    expect(await screen.findByText(/목록을/)).toBeInTheDocument();
    expect(await screen.findByText(/불러오고 있습니다./)).toBeInTheDocument();
  });

  //   it('에러 발생 시 ErrorText 컴포넌트가 렌더링되는지 검사', () => {
  //     fetchMock.mockReject(() => Promise.reject('Error'));
  //     renderWithProvider(<Order />);

  //     const errorText = screen.getByText('errorText');

  //     expect(errorText).toBeInTheDocument();
  //   });

  //   it('제품 데이터가 있을 때 ProductCard 컴포넌트가 올바르게 렌더링되는지 검사', () => {
  //     fetchMock.mockResponseOnce(JSON.stringify(mockData));
  //     renderWithProvider(<Order />);
  //     const productCardElement = screen.getByText('product1');
  //     expect(productCardElement).toBeInTheDocument();
  //   });
});
