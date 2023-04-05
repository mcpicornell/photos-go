import Bottom from "../components/Bottom";
import Navbar from "../components/Navbar";
import imgSearcher from '../img/magnifying-glass-solid.svg'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { CardFav } from "../components/CardFav";
import { readFavoritesLocalStorage } from "../data/localStorage";
import { getDataFavoritesPhotos, getErrorFavoritesPhotos , getFavoritePhotoStatus, getIsFavoritePhoto } from "../features/FavoritesSlice";
import {setFavoritesPhotos, removeFavoritesPhotos} from "../features/FavoritesSlice";
import { useState } from "react";

export function MyProfilePage(){
    const dispatch = useDispatch();
    const favoriteListLocalStorage = readFavoritesLocalStorage();

    let dataFavoritePhoto = useSelector(getDataFavoritesPhotos);
    const statusFavoritePhoto = useSelector(getFavoritePhotoStatus);
    const errorFavoritePhoto = useSelector(getErrorFavoritesPhotos);
    const isFavoritePhoto = useSelector(getIsFavoritePhoto);

    let date = new Date();

// const [favoriteList, setFavoriteList] = useState(favoriteListLocalStorage);
//   useEffect(() =>{
//     setFavoriteList(favoriteListLocalStorage);
//   }, [favoriteListLocalStorage])


  if(favoriteListLocalStorage !== undefined){
  let content;

     content = [];
     const dateString = JSON.stringify(date);
     favoriteListLocalStorage.forEach((favorite) => { 
       const savedPhoto = 
       {
        id: favorite.id,
        description: favorite.description,
        width: favorite.width,
        height: favorite.height,
        likes: favorite.likes,
        urlsFull: favorite.urlsFull,
        urlsThumb: favorite.urlsThumb,
        tags: favorite.tags,
        date: dateString
       }
         content.push(
           <>
             <CardFav photo={savedPhoto}/>
           </>
         );
         
       });
     
   console.log(errorFavoritePhoto);


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
}

export default MyProfilePage;