import { configureStore } from "@reduxjs/toolkit";
import {CardPhotoSlice} from "../features/CardPhotoSlice";
//EDITAR
export const store = configureStore({
  reducer: {
    cardPhoto: CardPhotoSlice.reducer
  },
});
