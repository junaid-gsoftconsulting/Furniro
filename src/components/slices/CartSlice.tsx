import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id?: number;
  images: string[];
  name: string;
  price: string;
  quantity: number;
}
interface initialStateProps {
  products: Product[];
}
const initialState: initialStateProps = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddtoCart: (state, action: PayloadAction<Product>) => {
      const productInCart = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (productInCart) {
        productInCart.quantity += action.payload.quantity;
      } else {
        state.products.push({ ...action.payload });
      }
    },
    removeFromCart: (state, action) => {
    
      const index = state.products.indexOf(action.payload);
      state.products.splice(index,1)
    },
  },
});

export const { AddtoCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
