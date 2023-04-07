// CRUD

export const createFavoritesInLocalStorage = (favoritesObj) => {
    const favoritesLocalStorage = localStorage.getItem("favorites");
    
    if (favoritesLocalStorage != null) {
      const favoritesLocalStorageObject = JSON.parse(favoritesLocalStorage); // {data: []}
      let objectExist = false;

      for(let i=0; i < favoritesLocalStorageObject.data.length; i++){
        if(favoritesLocalStorageObject.data[i].id === favoritesObj.id){
          objectExist = true;
          break;
        }
            
    }

    if(objectExist === false){
      if(favoritesObj.description === null){
        favoritesObj.description = '';
      }
      favoritesLocalStorageObject.data.push(favoritesObj);
      const favoritesLocalStorageUpdatedEncoded = JSON.stringify(
      favoritesLocalStorageObject);
      localStorage.setItem("favorites", favoritesLocalStorageUpdatedEncoded);
    }  

    }
    
    else{
      let objectLocalStorage = {
        data: []
      };
      console.log(favoritesObj)
      objectLocalStorage.data.push(favoritesObj);
      let favoritesLocalStorageUpdatedEncoded = JSON.stringify(
        objectLocalStorage
      );
      
       localStorage.setItem("favorites", favoritesLocalStorageUpdatedEncoded);

    }
  };

  
  export const deleteFavoritesLocalStorage = (favoritesObj) => {
    const favoritesLocalStorage = localStorage.getItem('favorites')
    if(favoritesLocalStorage !== null){
        const favoritesLocalStorageParse = JSON.parse(favoritesLocalStorage);
        let favoritesFilt = [];

        
        for(let i=0; i<favoritesLocalStorageParse.data.length; i++){
          
          if(favoritesLocalStorageParse.data[i].id 
            !== favoritesObj.id){
            favoritesFilt.push(favoritesLocalStorageParse.data[i]);
          }
        }

        console.log(favoritesFilt);

            const favoritesFilteredData = {
                data: favoritesFilt
            } 
       
        localStorage.setItem('favorites', JSON.stringify(favoritesFilteredData));
    
    }
  };

  export const readFavoritesLocalStorage = () => {
    const favoritesLocalStorage = localStorage.getItem("favorites");
    if (favoritesLocalStorage != null) {
      const favoritesLocalStorageObject = JSON.parse(favoritesLocalStorage); // {data: []}
      return favoritesLocalStorageObject.data;
    }
    return [];
  };

  export const updateDescriptionLocalStorage = (updatedData) => {
    const updatedArrayData = {
      data: updatedData
    };
    const updatedArrayDataToString = JSON.stringify(updatedArrayData);
    localStorage.setItem("favoritePhotos", updatedArrayDataToString);
  };

  // export const updateDescriptionLocalStorage = (favoriteObj, descriptionValue) => {
  //   const favoritesLocalStorage = readFavoritesLocalStorage();

  //   console.log(favoritesLocalStorage[0].id)
  //   console.log(favoriteObj.id)

  //   for(let i=0; i < favoritesLocalStorage.length; i++){
  //     if(favoritesLocalStorage[i].id === 
  //       favoriteObj.id){
  //       favoritesLocalStorage[i].description = descriptionValue;
  //       let objectInLocalStorage = {
  //         data: favoritesLocalStorage
  //       }
  //       localStorage.setItem('favorites', JSON.stringify(objectInLocalStorage));
  //       break;
  //     }
  //      else{
  //       console.log('Your description cannot be updated')
  //      }
  // }

  // };

//     export const updateDescriptionLocalStorage = (favoriteObj, description) => {
//     const favoritesLocalStorage = localStorage.getItem("favorites");
//     const favoritesLocalStorageObject = JSON.parse(favoritesLocalStorage);

//     for(let i=0; i < favoritesLocalStorageObject.data.length; i++){
//       if(favoritesLocalStorageObject.data[i].id === favoriteObj.id){
//         deleteFavoritesLocalStorage(favoriteObj);
//         createFavoritesInLocalStorage(favoriteObj);
//         break;
//       }
//        else{
//         console.log('Your description cannot be updated')
//        }
//   }
// };
