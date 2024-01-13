import { renderWithProviders } from '__test__/renderWithProviders';
import OrderFooter from './OrderFooter';
import { ICartState } from 'slices/cartSlice';

const renderOrderFooter = (initialCart: ICartState) => {
  return renderWithProviders(<OrderFooter />, {
    preloadedState: {
      cart: initialCart,
    },
  });
};

describe('<OrderFooter />', () => {
  test('주문 수량이 렌더링 되어야 함', () => {
    const initialCart = {
      items: {},
      totalQuantity: 1,
      totalPrice: 10000,
    };

    const { getByText } = renderOrderFooter(initialCart);
    const orderQuantity = getByText('총 수량 : 1개');

    expect(orderQuantity).toBeInTheDocument();
  });

  test('주문 금액이 렌더링 되어야 함', () => {
    const initialCart = {
      items: {},
      totalQuantity: 1,
      totalPrice: 10000,
    };

    const { getByText } = renderOrderFooter(initialCart);
    const orderPrice = getByText('총 가격 : 10,000원');

    expect(orderPrice).toBeInTheDocument();
  });
});
