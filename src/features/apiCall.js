import { createAsyncThunk } from "@reduxjs/toolkit";

let page = 1;

export const getPhoto = createAsyncThunk(
  "photo/getPhoto",
  async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random/?count=9&client_id=Q1U1dgR71d2cU-1Lb65CEPhvmgUOIQ9qP2Bc2Q_DXe8`
        );
        const dataJson = await response.json();
        return dataJson;
      } catch (error) {
        console.log(error);
        throw error;
      }
  }
);

export const getPhotoBySearch = createAsyncThunk(
  "photo/getPhoto",
  async (searchedPhoto) => {
    if (searchedPhoto === "") {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random/?count=9&client_id=Q1U1dgR71d2cU-1Lb65CEPhvmgUOIQ9qP2Bc2Q_DXe8`
        );
        const dataJson = await response.json();
        return dataJson;
      } catch (error) {
        console.log(error);
        throw error;
      }
    } else {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos/?page=${page}&per_page=9&query=${searchedPhoto}&client_id=Q1U1dgR71d2cU-1Lb65CEPhvmgUOIQ9qP2Bc2Q_DXe8`
        );

        if (!response.ok) {
          console.log(
            "Estos no son los androides que estás buscando... pero en el searcher"
          );
        } else {
          const dataJson = await response.json();
          return dataJson;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
);