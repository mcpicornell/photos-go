import { searcherPhoto } from "./apiCall";
import {createSlice} from '@reduxjs/toolkit';

export const CardPhotoSearcherSlice = createSlice({
    name: "search",
    initialState: {
      error: null,
      status: "idle",
      data: []
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(searcherPhoto.fulfilled, (state, action) => {
          state.status = "fulfilled";
          console.log(5616514);
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
  
  export const getAllCardPhoto = (state) => state.cardPhoto.data;
  export const getCardPhotoError = (state) => state.error;
  export const getCardPhotoStatus = (state) => state.cardPhoto.status;