import { getRandomPhoto} from "./apiCall";
import {createSlice} from '@reduxjs/toolkit';

export const CardPhotoRandomSlice = createSlice({
  name: "cardPhoto",
  initialState: {
    error: null,
    status: "idle",
    data: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRandomPhoto.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = (action.payload);
      })
    .addCase(getRandomPhoto.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
    .addCase(getRandomPhoto.pending, (state, action) => {
        state.status = "loading";
      });
  },
});

export const getAllCardPhoto = (state) => state.cardPhoto.data;
export const getCardPhotoError = (state) => state.error;
export const getCardPhotoStatus = (state) => state.cardPhoto.status;

