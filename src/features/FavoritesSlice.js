import {createSlice} from '@reduxjs/toolkit';

export const FavoritesSlice = createSlice({
    name: "favorite",
    initialState: {
      error: null,
      isFavorite: false,
      data: {}
    },
    reducers: {
      setFavoritesPhotos: (state, action) => {
        state.data = action.payload;
        state.isFavorite = true;
      },
      removeFavoritesPhotos: (state) => {
        state.data = [];
        state.isFavorite = false;

      }
    },
  });
  
  export const getDataFavoritesPhotos = (state) => state.favorite.data;
  export const getErrorFavoritesPhotos = (state) => state.error;
  export const getIsFavoritePhoto = (state) => state.favorite.isFavorite;



  export const {setFavoritesPhotos, removeFavoritesPhotos} = FavoritesSlice.actions;
