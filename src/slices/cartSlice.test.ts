import cartReducer, {
  ICartState,
  addToCart,
  removeFromCart,
  resetCart,
} from 'slices/cartSlice';

describe('cartSlice 테스트', () => {
  let initialState: ICartState;

  beforeEach(() => {
    initialState = {
      items: {},
      totalQuantity: 0,
      totalPrice: 0,
    };
  });

  test('초기 상태를 가지고 있어야 함', () => {
    expect(cartReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  test('장바구니에 상품이 잘 담겨야 함', () => {
    const product = {
      id: '1',
      name: 'product1',
      event: 0,
      materialType: 1,
      price: 100,
    };
    const expectedState = {
      items: { '1': { ...product, quantity: 1 } },
      totalQuantity: 1,
      totalPrice: 100,
    };

    const result = cartReducer(initialState, addToCart(product));

    expect(result).toEqual(expectedState);
  });

  test('해당 상품이 장바구니에 이미 있으면 수량이 1 증가해야 함', () => {
    const product = {
      id: '1',
      name: 'product1',
      event: 0,
      materialType: 1,
      price: 100,
    };
    const state = {
      items: { '1': { ...product, quantity: 1 } },
      totalQuantity: 1,
      totalPrice: 100,
    };
    const expectedState = {
      items: { '1': { ...product, quantity: 2 } },
      totalQuantity: 2,
      totalPrice: 200,
    };

    const result = cartReducer(state, addToCart(product));

    expect(result).toEqual(expectedState);
  });

  test('장바구니 수량 감소 기능이 정상적으로 작동해야 함', () => {
    const product = {
      id: '1',
      name: 'product1',
      event: 0,
      materialType: 1,
      price: 100,
    };
    const state = {
      items: { '1': { ...product, quantity: 2 } },
      totalQuantity: 2,
      totalPrice: 200,
    };
    const expectedState = {
      items: { '1': { ...product, quantity: 1 } },
      totalQuantity: 1,
      totalPrice: 100,
    };

    expect(cartReducer(state, removeFromCart('1'))).toEqual(expectedState);
  });

  test('장바구니가 정상적으로 초기화 되어야 함', () => {
    const product = {
      id: '1',
      name: 'product1',
      event: 0,
      materialType: 1,
      price: 100,
    };
    const state = {
      items: { '1': { ...product, quantity: 2 } },
      totalQuantity: 2,
      totalPrice: 200,
    };

    expect(cartReducer(state, resetCart())).toEqual(initialState);
  });

  test('장바구니에 담을 수 있는 상품의 최대 수량은 999개까지 가능함', () => {
    const product = {
      id: '1',
      name: 'product1',
      event: 0,
      materialType: 1,
      price: 100,
    };
    const state = {
      items: { '1': { ...product, quantity: 999 } },
      totalQuantity: 999,
      totalPrice: 99900,
    };

    expect(cartReducer(state, addToCart(product))).toEqual(state);
  });

  test('장바구니의 수량은 음수가 될 수 없어야 함', () => {
    const product = {
      id: '1',
      name: 'product1',
      event: 0,
      materialType: 1,
      price: 100,
    };
    const state = {
      items: { '1': { ...product, quantity: 1 } },
      totalQuantity: 1,
      totalPrice: 100,
    };
    const expectedState = {
      items: {},
      totalQuantity: 0,
      totalPrice: 0,
    };

    let newState = cartReducer(state, removeFromCart('1'));
    expect(newState).toEqual(expectedState);

    newState = cartReducer(newState, removeFromCart('1'));
    expect(newState).toEqual(expectedState);
  });
});
