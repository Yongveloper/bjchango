import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'api/productsApi';

interface ICartItem extends IProduct {
  quantity: number;
}

export interface ICartState {
  items: Record<string, ICartItem>;
  totalQuantity: number;
  totalPrice: number;
}

const initialState: ICartState = {
  items: {},
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      if (state.totalQuantity >= 999) return;

      const product = action.payload;
      if (!state.items[product.id]) {
        state.items[product.id] = { ...product, quantity: 1 };
      } else {
        state.items[product.id].quantity++;
      }
      state.totalQuantity++;
      state.totalPrice += product.price;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.items[id]) {
        state.totalQuantity--;
        state.totalPrice -= state.items[id].price;
        state.items[id].quantity--;
        if (state.items[id].quantity === 0) {
          delete state.items[id];
        }
      }
    },
    resetCart: () => initialState,
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
