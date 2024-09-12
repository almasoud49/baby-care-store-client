import { RootState } from '@/redux/store';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IProduct {
  _id: string;
  quantity: number;
  image: string;
  title: string;
  price: string;  
}

interface ICartState {
  cart: IProduct[];
}

const initialState: ICartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const selectedProduct = state.cart.find(
        (product) => product._id === action.payload._id
      );
      if (!selectedProduct) {
        state.cart.push({ ...action.payload, quantity: 1 });
      } else {
        selectedProduct.quantity += 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const index = state.cart.findIndex(
        (product) => product._id === action.payload
      );
      if (index !== -1) {
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity -= 1;
        } else {
          state.cart.splice(index, 1);
        }
      }
    },
    removeAllDataFromCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, removeAllDataFromCart } = cartSlice.actions;
export default cartSlice.reducer;
export const useCurrentCartData = (state: RootState) => state.cart.cart;