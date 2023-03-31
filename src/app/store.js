import { configureStore } from "@reduxjs/toolkit";
import {CardPhotoRandomSlice} from "../features/CardPhotoRandomSlice";
import {CardPhotoSearcherSlice} from "../features/CardPhotoSearcherSlice";

//EDITAR
export const store = configureStore({
  reducer: {
    cardPhoto: CardPhotoRandomSlice.reducer,
    search: CardPhotoSearcherSlice.reducer
  },
});
