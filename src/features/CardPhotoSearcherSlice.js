import { searcherPhoto } from "./apiCall";
import {createSlice} from '@reduxjs/toolkit';

export const CardPhotoSearcherSlice = createSlice({
    name: "search",
    initialState: {
      error: null,
      status: "idle",
      searchedPhoto: "",
      data: []
    },
    reducers: {
      setSearch: (state, action) => {
        state.searchedPhoto = action.payload;
        
      },
      removePhotos: (state) => {
        state.status = 'idle';
        state.searchedPhoto = "";
        state.data = [];
        
      }
    },
    extraReducers: (builder) => {
      builder.addCase(searcherPhoto.fulfilled, (state, action) => {
          state.status = "fulfilled";
          state.data = (action.payload);
        })
      .addCase(searcherPhoto.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload;
        })
      .addCase(searcherPhoto.pending, (state, action) => {
          state.status = "loading";
        });
    },
  });
  
  export const getAllCardPhoto = (state) => state.search.data;
  export const getCardPhotoError = (state) => state.error;
  export const getCardPhotoStatus = (state) => state.search.status;
  export const getSearchPhoto = (state) => state.search.searchedPhoto;


  export const {setSearch, removePhotos} = CardPhotoSearcherSlice.actions;
