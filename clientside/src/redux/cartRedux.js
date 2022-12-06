import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      let sum = 0;
      state.products.forEach((element) => {
        sum += element.price;
      });
      state.total = sum;
      state.quantity = state.products.length;
    },

    removeProduct: (state, action) => {
      const filter = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      let sum = 0;
      filter.forEach((element) => {
        sum += element.price;
      });
      state.products = filter;
      state.total = sum;
      state.quantity = state.products.length;
    },
    /*cartDeleted: (state) => {
      state.quantity = 0;
      state.product = 0;
      state.total = 0;
    },
    cartSuccess: (state, action) => {
      state.quantity += 1;
      action.payload.map((item)=>state.products.push)
      state.products.push(action.payload);
      let sum = 0;
      state.products.forEach((element) => {
        sum += element.price;
      });
      state.total = sum;
    },*/
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
