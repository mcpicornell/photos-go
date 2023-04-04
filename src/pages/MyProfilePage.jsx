import Bottom from "../components/Bottom";
import Navbar from "../components/Navbar";
import imgSearcher from '../img/magnifying-glass-solid.svg'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { CardFav } from "../components/CardFav";
import { readFavoritesLocalStorage } from "../data/localStorage";
import { getDataFavoritesPhotos, getErrorFavoritesPhotos , getFavoritePhotoStatus, getIsFavoritePhoto } from "../features/FavoritesSlice";
import {setFavoritesPhotos, removeFavoritesPhotos} from "../features/FavoritesSlice";

export function MyProfilePage(){
    const dispatch = useDispatch();
    const favoriteListLocalStorage = readFavoritesLocalStorage();

    let dataFavoritePhoto = useSelector(getDataFavoritesPhotos);
    const statusFavoritePhoto = useSelector(getFavoritePhotoStatus);
    const errorFavoritePhoto = useSelector(getErrorFavoritesPhotos);
    const isFavoritePhoto = useSelector(getIsFavoritePhoto);

    let date = new Date();
  
  useEffect(() => {
    if (statusFavoritePhoto === "idle") {
     dispatch(setFavoritesPhotos(favoriteListLocalStorage));
    }
 }, [statusFavoritePhoto], dispatch);
 
 let content;
 if (statusFavoritePhoto === "loading") {
   content = "Loading";
 } else if (isFavoritePhoto === true) {

   
   if (dataFavoritePhoto !== undefined) {
   
    //  if (!(Array.isArray(dataFavoritePhoto))){

    //   dataFavoritePhoto = dataFavoritePhoto.data;
    //  }
     content = [];
     const dateString = JSON.stringify(date);
     dataFavoritePhoto.forEach((favorite) => { 
       const savedPhoto = 
       {
        id: favorite.id,
        description: favorite.description,
        width: favorite.width,
        height: favorite.height,
        likes: favorite.likes,
        //  urls: {
        //   full: favorite.urls['full'],
        //   thumb: favorite.urls['thumb']
        // },
        urlsFull: favorite.urlsFull,
        urlsThumb: favorite.urlsThumb,
        tags: favorite.tags,
        // date: dateString
       }
         content.push(
           <>
             <CardFav photo={savedPhoto}/>
           </>
         );
         
       });
     
   }
 } else {
   console.log(errorFavoritePhoto);
 }
 

return (
   <>
   <section>
       <Navbar />
   </section>

   <section className='cardsContainer'>       
       {content}        
   </section>

   <footer>
   {<Bottom />}
   </footer>
   </>
   
)

}

export default MyProfilePage;