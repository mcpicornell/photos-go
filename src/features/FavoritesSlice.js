import {createSlice} from '@reduxjs/toolkit';
import { readFavoritesLocalStorage } from '../data/localStorage';
import { updateDescriptionLocalStorage } from '../data/localStorage';

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
    },
      changeDescription: (state, action) => { 
      for (let i=0; i < state.localStorage.length; i++) {
        if (action.payload.id === state.localStorage[i].id) {
          state.localStorage[i].description = action.payload.description;
          break;
        }
      }
      updateDescriptionLocalStorage(state.localStorage); //Update del cambio de descripción a las fotos favoritas de forma local (sin hacer POST en la API)
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

  export const {changeDescription, setSearchDescription , deleteSearchDescription , setModal, setFavoritesPhotos, setlocalStorage, removeFavoritesPhotos} = FavoritesSlice.actions;
