import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type TProduct = {
    category: string;
    description: string;
    picture: string;
    price: string;
    quantity: string;
    rating: string;
    title: string;
  };

  type TInitialState = {
    products: TProduct[];
  };
const initialState:TInitialState = {
    products:[]
}
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
      addProduct: (state, action:PayloadAction<TProduct>) => {
        state.products.push(action.payload);
      }
    },
  });

  export const {addProduct} =productSlice.actions;
  export default productSlice.reducer