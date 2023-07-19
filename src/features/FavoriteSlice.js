import { createSlice } from "@reduxjs/toolkit";
import { readFavoritesLocalStorage } from "../data/localStorage";
import { updateDescriptionLocalStorage } from "../data/localStorage";

export const SearchSlice = createSlice({
  name: "favorites",
  initialState: {
    error: null,
    status: "idle",
    data: [],
  },
  reducers: {
    setFavoritesPhotos: (state, action) => {
        state.data=action.payload;
        state.searchedPhoto = action.payload;
    },
    removePhotos: (state) => {
      state.status = "idle";
      state.searchedPhoto = "";
      state.data = [];
    },
  },
});

export const getAllPhoto = (state) => state.photo.data;
export const getPhotoError = (state) => state.error;
export const getPhotoStatus = (state) => state.photo.status;
export const getSearchedPhoto = (state) => state.photo.searchedPhoto;

export const { setPhotos, removePhotos } = SearchSlice.actions;
