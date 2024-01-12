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
});
