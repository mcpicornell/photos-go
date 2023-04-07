import {createSlice} from '@reduxjs/toolkit';
import { readFavoritesLocalStorage } from '../data/localStorage';


export const FavoritesSlice = createSlice({
    name: "favorite",
    initialState: {
      error: null,
      status: 'idle',
      isFavorite: false,
      data: [],
      localStorage: readFavoritesLocalStorage(),
      searchDescription: ''

    },
    reducers: {
      setFavoritesPhotos: (state, action) => {
        state.data = action.payload;
        state.isFavorite = true;

      },
      setlocalStorage: (state, action) => {
        state.localStorage = action.payload;
      },

      removeFavoritesPhotos: (state) => {
        state.data = [];
        state.isFavorite = false;
      },
      setModal: (state, action) => {
        console.log(readFavoritesLocalStorage())

        const favoriteList = readFavoritesLocalStorage();
        const modalList= favoriteList.filter(obj => 
          obj.id === action.payload.id
          )
        state.data = modalList[0];
      },
      setSearchDescription: (state, action) => {
        state.searchDescription = action.payload;
      },
      deleteSearchDescription: (state) => {
      state.searchDescription = '';
    }
    },
  });
  export const getIsFavoritePhoto = (state) => state.favorite.isFavorite;
  export const getErrorFavoritesPhotos = (state) => state.error;
  export const getDataFavoritesPhotos = (state) => state.favorite.data;
  export const getLSinSlicer = (state) => state.favorite.localStorage;
  export const getModaldata = (state) => state.favorite.data;
  export const getFavoritePhotoStatus = (state) => state.favorite.status;
  export const getSearchDescription = (state) => state.favorite.searchDescription;

  export const {setSearchDescription , deleteSearchDescription , setModal, setFavoritesPhotos, setlocalStorage, removeFavoritesPhotos} = FavoritesSlice.actions;
