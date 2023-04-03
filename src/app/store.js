import { configureStore } from "@reduxjs/toolkit";
import { SearchSlice } from "../features/SearchSlice";
import { FavoritesSlice } from "../features/FavoritesSlice";

//EDITAR
export const store = configureStore({
  reducer: {
    favorite: FavoritesSlice.reducer,
    photo: SearchSlice.reducer
  },
});
