import { createAsyncThunk } from "@reduxjs/toolkit";
// import { inputSearcherValue } from '../pages/SearcherPage';
// Per-page and Total
// The X-Per-Page and X-Total headers give the number of elements returned on each page and the total number of elements respectively.

// Link
// URL’s for the first, last, next, and previous pages are supplied, if applicable. They are comma-separated and differentiated with a rel attribute.

// For example, after requesting page 3 of the photo list:

// Link: <https://api.unsplash.com/photos?page=1>; rel="first",
// <https://api.unsplash.com/photos?page=2>; rel="prev",
// <https://api.unsplash.com/photos?page=346>; rel="last",
// <https://api.unsplash.com/photos?page=4>; rel="next"

let page = 1;
// let inputValue = document.getElementById('inputNavValue').value;

  export const getRandomPhoto = createAsyncThunk('cardPhoto/getRandomPhoto', async () => {
    try{ 
      const response = await fetch(`https://api.unsplash.com/photos/random/?count=9&client_id=Q1U1dgR71d2cU-1Lb65CEPhvmgUOIQ9qP2Bc2Q_DXe8`)
      if (!response.ok) {
        console.log('Estos no son los androides que estás buscando, muy random todo')
      }
      else{
        const dataJson = await response.json();
        return dataJson ;
        
      }
      
    }
    catch (error){
      console.log(error);
    }

  });

  

  export const searcherPhoto = createAsyncThunk('search/photos', async (searchedPhoto) => {
    try{ 
      const response = await fetch(`https://api.unsplash.com/search/photos/?page=${page}&per_page=9&query=${searchedPhoto}&client_id=Q1U1dgR71d2cU-1Lb65CEPhvmgUOIQ9qP2Bc2Q_DXe8`)
      console.log(searchedPhoto);

      if (!response.ok) {
        console.log('Estos no son los androides que estás buscando... pero en el searcher')
      }
      else{
        const dataJson = await response.json();
        console.log(dataJson);
        return dataJson;
      }
      
    }
    catch (error){
      console.log(error);
    }

  });


    