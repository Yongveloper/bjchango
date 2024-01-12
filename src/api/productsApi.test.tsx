import { renderHook, waitFor } from '@testing-library/react';
import { useGetProductsQuery } from './productsApi';
import fetchMock from 'jest-fetch-mock';
import { store } from 'store';
import { Provider } from 'react-redux';

function Wrapper({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
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
