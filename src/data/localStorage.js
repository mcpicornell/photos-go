import { showToast } from "../features/toastify";

export const createFavoritesInLocalStorage = (favoritesObj) => {
  const favoritesLocalStorage = localStorage.getItem("favorites");
  if (
    favoritesObj.description === null ||
    favoritesObj.description === undefined
  ) {
    favoritesObj.description = "";
  }

  if (favoritesLocalStorage != null) {
    const favoritesLocalStorageObject = JSON.parse(favoritesLocalStorage);
    let objectExist = false;

    for (let i = 0; i < favoritesLocalStorageObject.data.length; i++) {
      if (favoritesLocalStorageObject.data[i].id === favoritesObj.id) {
        objectExist = true;
        showToast('This photo has been already added to MyProfile', 'error')
        break;
      }
    }

    if (objectExist === false) {
      favoritesLocalStorageObject.data.push(favoritesObj);
      const favoritesLocalStorageUpdatedEncoded = JSON.stringify(
        favoritesLocalStorageObject
      );
      localStorage.setItem("favorites", favoritesLocalStorageUpdatedEncoded);
      showToast('Added to MyProfile!', 'success')
    }
  } else {
    let objectLocalStorage = {
      data: [],
    };
    console.log(favoritesObj);
    objectLocalStorage.data.push(favoritesObj);
    let favoritesLocalStorageUpdatedEncoded =
      JSON.stringify(objectLocalStorage);

    localStorage.setItem("favorites", favoritesLocalStorageUpdatedEncoded);
  }
};

export const deleteFavoritesLocalStorage = (favoritesObj) => {
  const favoritesLocalStorage = localStorage.getItem("favorites");
  if (favoritesLocalStorage) {
    const favoritesLocalStorageParse = JSON.parse(favoritesLocalStorage);
    let favoritesFilt = [];

    for (let i = 0; i < favoritesLocalStorageParse.data.length; i++) {
      if (favoritesLocalStorageParse.data[i].id !== favoritesObj.id) {
        favoritesFilt.push(favoritesLocalStorageParse.data[i]);
        showToast('Your photo has been successfully deleted!', 'success')
      }
    }

    const favoritesFilteredData = {
      data: favoritesFilt,
    };

    localStorage.setItem("favorites", JSON.stringify(favoritesFilteredData));
  }
};

export const readFavoritesLocalStorage = () => {
  const favoritesLocalStorage = localStorage.getItem("favorites");

  if (favoritesLocalStorage != null) {
    const favoritesLocalStorageObject = JSON.parse(favoritesLocalStorage);
    return favoritesLocalStorageObject.data;
  }
  return [];
};

export const updateDescriptionLocalStorage = (updatedData) => {
  const updatedArrayData = {
    data: updatedData,
  };
  const updatedArrayDataToString = JSON.stringify(updatedArrayData);
  localStorage.setItem("favorites", updatedArrayDataToString);
  showToast('Your description has beed updated!', 'success')
};
