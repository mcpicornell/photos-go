import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRandomPhoto = createAsyncThunk("/photos/random", () => {
    const request = fetch("https://api.unsplash.com/photos/?client_id=Q1U1dgR71d2cU-1Lb65CEPhvmgUOIQ9qP2Bc2Q_DXe8")
      .then((rawApiResponse) => {
        return rawApiResponse.json().then((jsonResponse) => {
          return jsonResponse;
        });
      })
      .catch((error) => {
        throw error;
      });
    return request;
  });


  export const searcherPhoto = createAsyncThunk("/search/photos", () => {
    const request = fetch("https://api.unsplash.com/photos/?client_id=Q1U1dgR71d2cU-1Lb65CEPhvmgUOIQ9qP2Bc2Q_DXe8")
      .then((rawApiResponse) => {
        return rawApiResponse.json().then((jsonResponse) => {
          return jsonResponse;
        });
      })
      .catch((error) => {
        throw error;
      });
    return request;
  });