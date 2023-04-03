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
        data: [],
      };
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
        

        favoritesLocalStorageParse.data.forEach(obj => {
            console.log(obj.id)
        })
        let favoritesFiltered = favoritesLocalStorageParse.data.filter(index => index.id !== favoritesObj.id
        )

            const favoritesFiltradasData = {
                data: favoritesFiltered
            } 

        console.log(favoritesFiltradasData)
        console.log(localStorage.getItem('favorites'))
        
        console.log(favoritesFiltradasData);
       
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