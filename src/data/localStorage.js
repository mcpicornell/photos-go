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
      favoritesLocalStorageObject.data.push(favoritesObj);
      const favoritesLocalStorageUpdatedEncoded = JSON.stringify(
      favoritesLocalStorageObject);
      localStorage.setItem("favorites", favoritesLocalStorageUpdatedEncoded);
    }  

    }
    
    else{
      let objectStoraLocalStorage = {
        data: []
      };
      console.log(favoritesObj)
      objectStoraLocalStorage.data.push(favoritesObj);
      let favoritesLocalStorageUpdatedEncoded = JSON.stringify(
        objectStoraLocalStorage
      );
      
       localStorage.setItem("favorites", favoritesLocalStorageUpdatedEncoded);

    }
  };

  
  export const deleteFavoritesLocalStorage = (favoritesObj) => {
    const favoritesLocalStorage = localStorage.getItem('favorites')
    if(favoritesLocalStorage !== null){
        const favoritesLocalStorageParse = JSON.parse(favoritesLocalStorage);
    
        // let favoritesFiltered = favoritesLocalStorageParse.filter(index => index.id !== favoritesObj.id
        // )
        let favoritesFilt = [];

        for(let i=0; i<favoritesLocalStorageParse.data.length; i++){
          if(favoritesLocalStorageParse.data[i.id] 
            !== favoritesObj.id){
            favoritesFilt.push(favoritesLocalStorageParse.data[i.id]);
          }
        }

        console.log(favoritesFilt);

            const favoritesFiltradasData = {
                data: favoritesFilt
            } 

        // console.log(favoritesFiltradasData)
        // console.log(localStorage.getItem('favorites'))
        
        // console.log(favoritesFiltradasData);
       
        localStorage.setItem('favorites', JSON.stringify(favoritesFiltradasData));
        
        
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