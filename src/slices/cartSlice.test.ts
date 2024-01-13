import cartReducer from 'slices/cartSlice';

describe('cartSlice 테스트', () => {
  let initialState = {};

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
});
