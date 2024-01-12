import { renderHook, waitFor } from '@testing-library/react';
import { productsApi, useGetProductsQuery } from './productsApi';
import fetchMock from 'jest-fetch-mock';
import { ApiProvider } from '@reduxjs/toolkit/query/react';

function Wrapper({ children }: { children: React.ReactNode }) {
  return <ApiProvider api={productsApi}>{children}</ApiProvider>;
}

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('productsApi 테스트', () => {
  test('제품 정보를 정확히 불러와야 함', async () => {
    const data = [
      { id: '1', name: 'Product 1', event: 1, materialType: 1, price: 100 },
    ];
    fetchMock.mockResponseOnce(JSON.stringify(data));

    const { result } = renderHook(() => useGetProductsQuery(), {
      wrapper: Wrapper,
    });

    await waitFor(() => {
      expect(result.current.data).toEqual(data);
    });
  });
});
