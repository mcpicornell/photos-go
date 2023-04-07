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

  export const updateDescriptionLocalStorage = (favoriteObj, descriptionValue) => {
    const favoritesLocalStorage = localStorage.getItem("favorites");
    const favoritesLocalStorageObject = JSON.parse(favoritesLocalStorage);

    console.log(favoritesLocalStorageObject)

    for(let i=0; i < favoritesLocalStorageObject.data.length; i++){
      if(favoritesLocalStorageObject.data[i].id === favoriteObj.id){
        favoritesLocalStorageObject.data[i].description = descriptionValue;
        break;
      }
       else{
        console.log('Your description cannot be updated')
       }
      favoritesLocalStorageObject.data.push(favoriteObj);
      const favoritesLocalStorageUpdatedEncoded = JSON.stringify(
      favoritesLocalStorageObject);
      localStorage.setItem("favorites", favoritesLocalStorageUpdatedEncoded);   
  }

  };

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
