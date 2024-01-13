import cartReducer, { ICartState, addToCart } from 'slices/cartSlice';

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

  test('상품이 장바구니에 추가되어야 함', () => {
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
});
