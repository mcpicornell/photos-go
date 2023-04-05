import { getPhoto } from "./apiCall";
import {createSlice} from '@reduxjs/toolkit';

export const SearchSlice = createSlice({
    name: "photo",
    initialState: {
      error: null,
      status: "idle",
      searchedPhoto: "",
      data: []
    },
    reducers: {
      setPhotos: (state, action) => {
        state.searchedPhoto = action.payload;
        console.log(state.searchedPhoto)
      },
      removePhotos: (state) => {
        state.status = 'idle';
        state.searchedPhoto = "";
        state.data = [];
      }
    },
    extraReducers: (builder) => {
      builder.addCase(getPhoto.fulfilled, (state, action) => {
          state.status = "fulfilled";
          state.data = (action.payload);
        })
      .addCase(getPhoto.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload;
        })
      .addCase(getPhoto.pending, (state, action) => {
          state.status = "loading";
        });
    },
  });
  
  export const getAllPhoto = (state) => state.photo.data;
  export const getPhotoError = (state) => state.error;
  export const getPhotoStatus = (state) => state.photo.status;
  export const getSearchedPhoto = (state) => state.photo.searchedPhoto;



  export const {setPhotos, removePhotos} = SearchSlice.actions;
