import { renderWithProviders } from '__test__/renderWithProviders';
import OrderFooter from './OrderFooter';
import { ICartState } from 'slices/cartSlice';
import { fireEvent } from '@testing-library/dom';
import { act } from '@testing-library/react';

jest.useFakeTimers();

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

  test('주문 수량이 0일 때 주문하기 버튼이 비활성화 되어야 함', () => {
    const initialCart = {
      items: {},
      totalQuantity: 0,
      totalPrice: 0,
    };

    const { getByText } = renderOrderFooter(initialCart);
    const orderButton = getByText('주문하기');
    expect(orderButton).toBeDisabled();
  });

  test('주문 수량이 1개이상일 때 주문하기 버튼이 활성화 되어야 함', () => {
    const initialCart = {
      items: {},
      totalQuantity: 1,
      totalPrice: 10000,
    };

    const { getByText } = renderOrderFooter(initialCart);
    const orderButton = getByText('주문하기');
    expect(orderButton).not.toBeDisabled();
  });

  test('주문하기 버튼이 클릭되면 버튼이 로딩 상태가 되어야 함', () => {
    window.confirm = jest.fn(() => true);

    const initialCart = {
      items: {},
      totalQuantity: 2,
      totalPrice: 5000,
    };

    const { getByText } = renderOrderFooter(initialCart);
    const orderButton = getByText('주문하기');
    fireEvent.click(orderButton);
    const loadingButton = getByText('로딩중...');

    expect(loadingButton).toBeInTheDocument();
  });

  test('주문하기 버튼이 클릭되면 로딩 이후 주문 성공 페이지로 이동해야 함', () => {
    window.confirm = jest.fn(() => true);

    const initialCart = {
      items: {},
      totalQuantity: 2,
      totalPrice: 5000,
    };

    const { getByText } = renderOrderFooter(initialCart);
    const orderButton = getByText('주문하기');
    fireEvent.click(orderButton);

    act(() => {
      jest.advanceTimersByTime(1500);
    });

    expect(window.location.pathname).toBe('/complete');
  });
});
