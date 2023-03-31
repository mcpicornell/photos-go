import { createAsyncThunk } from "@reduxjs/toolkit";

  export const getRandomPhoto = createAsyncThunk('photos/random', async () => {
    try{ 
      const response = await fetch("https://api.unsplash.com/photos/?client_id=Q1U1dgR71d2cU-1Lb65CEPhvmgUOIQ9qP2Bc2Q_DXe8")
      if (!response.ok) {
        console.log('Estos no son los androides que estás buscando')
      }
      else{
        const dataJson = await response.json();
        console.log(dataJson) ;
      }
      
    }
    catch (error){
      console.log(error);
    }

  });

  export const searcherPhoto = createAsyncThunk('search/photos', async () => {
    try{ 
      const response = await fetch("https://api.unsplash.com/photos/?client_id=Q1U1dgR71d2cU-1Lb65CEPhvmgUOIQ9qP2Bc2Q_DXe8")
      if (!response.ok) {
        console.log('Estos no son los androides que estás buscando')
      }
      else{
        const dataJson = await response.json();
        return dataJson;
      }
      
    }
    catch (error){
      console.log(error);
    }

  });

  