
import { getRandomPhoto } from "./apiCall";

//EDITAR
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const CardPhotoSlice = createSlice({
  name: "cardPhoto",
  initialState: {
    error: null,
    status: "idle",
    data: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRandomPhoto.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data.push(action.payload);
      })
      .addCase(getRandomPhoto.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getRandomPhoto.pending, (state, action) => {
        state.status = "loading";
      });
  },
});

export const getAllCardPhoto = (state) => state.cardPhoto.data;
export const getCardPhotoError = (state) => state.cardPhoto.error;
export const getCardPhotoStatus = (state) => state.cardPhoto.status;

export default CardPhotoSlice.reducer;
