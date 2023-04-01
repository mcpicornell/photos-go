import { configureStore } from "@reduxjs/toolkit";
import { PhotoSlice } from "../features/PhotoSlice";

//EDITAR
export const store = configureStore({
  reducer: {
    photo: PhotoSlice.reducer
  },
});
