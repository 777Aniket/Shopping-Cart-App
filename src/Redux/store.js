import { configureStore } from "@reduxjs/toolkit";
//import CartSlice from "./Slices/CartSlice";
import CartSlice from "./Slices/cartSlice"

export const store = configureStore({
  reducer:{
    cart:CartSlice
  }
})