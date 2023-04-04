import imgMinusSolid from '../img/minus-solid.svg'
import imgPlusSolid from '../img/plus-solid.svg'
import imgCrossSolid from '../img/xmark-solid.svg'
import styled from 'styled-components'
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getDataFavoritesPhotos, getErrorFavoritesPhotos, 
     getIsFavoritePhoto, getFavoritePhotoStatus} from "../features/FavoritesSlice";

import {setFavoritesPhotos, removeFavoritesPhotos} from "../features/FavoritesSlice";

import {deleteFavoritesLocalStorage, checkIfExistsFavorites, 
    readfavoritesLocalStorage, createFavoritesInLocalStorage
} from '../data/localStorage'



export function CardFav(props){
    const favoritesData = useSelector(getDataFavoritesPhotos)  
    // const favoriteListLocalStorage = readFavoritesLocalStorage();

    let dataFavoritePhoto = useSelector(getDataFavoritesPhotos);
    // const statusFavoritePhoto = useSelector();getFavoritePhotoStatus
    const errorFavoritePhoto = useSelector(getErrorFavoritesPhotos);
    const isFavoritePhoto = useSelector(getIsFavoritePhoto);


    const dispatch = useDispatch();

    useEffect(() => {
//         if (statusFavoritePhoto === "idle") {
//             dispatch(setFavoritesPhotos(props));
//            }
//         }, [statusFavoritePhoto], dispatch);

        
//  if (statusFavoritePhoto === "loading") {
//     content = "Loading";
//   } else if (isFavoritePhoto === true) {
    
//   }
//     if (dataFavoritePhoto !== undefined) {

    

    const addToLocalStorage = () => {
        dispatch(setFavoritesPhotos(props.data));
        createFavoritesInLocalStorage(dataFavoritePhoto);

    }

    const deleteLocalStorage = () => {
        deleteFavoritesLocalStorage(props.data);
        console.log(props.data)
    }

    const showModal = () => {
        document.getElementById('modalCardFav').showModal();
    }

    const closeModal = () => {
        document.getElementById('modalCardFav').close();
    }


    let photo = props.photo;


    return (
        <>
        <CardContainer >
        
        <div className="card">
            <img className='imgAPI' src={photo.urlsFull} onClick={showModal} alt=""/>


            <div className='cardButtonsContainer'>

                <div id='addButtonContainer' className='buttonsContainer'>
                    <img className='buttonsImg' src={imgPlusSolid} onClick={addToLocalStorage} />
                </div>
                                
                <div id='removeButtonContainer' className='buttonsContainer'>
                    <img className='buttonsImg' src={imgMinusSolid} onClick={deleteLocalStorage}/>
                </div>
            </div>
        </div>
        </CardContainer>

        <dialog id='modalCardFav' >
            <h3>Photo info</h3>
            
            <div>
                <img src={imgCrossSolid} onClick={closeModal}/>
            </div>
            

            <label>Description: </label>
            <span>
                {photo.description}
            </span>

            <label>Width: </label>
            <span>
                {props.photo.width}
            </span>

            <label>Height: </label>
            <span>
                {props.photo.height}
            </span>


            <label>Likes: </label>
            <span>
                {props.photo.likes}
            </span>

            <label>Date added: </label>
            <span>
                {props.photo.date}
            </span>
        </dialog>
        </>
        
    
    )
    })}

export default CardFav;


const CardContainer = styled.div`
    .card{
        background-color: white;
        display: flex;
        position: relative;
        
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        border: 0.5px solid black;
        height: 300px;
        width: 300px;
        background-color: #fff;
        border-radius: 0.5rem;
        box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 0.5rem;
      

    }

    .imgAPI{
        height: 250px;
        width: 300px;
        border: 0.5px solid black;
    }

    .cardButtonsContainer{
        display: flex;
        position: relative;
        height: 50px;
        width: 100px;
        padding-left: 100px;
        padding-right: 100x;
        margin-bottom: -35px;
        position: relative;     
    }

    .buttonsContainer {
        position: absolute;
        height: 100px;
        width: 100px;
        left: 10px;
        bottom: -35px;

    }

    #removeButtonContainer{
        left: 150px;
    }
    .buttonsImg{
        height: 50px;
        width: 15px;

    }
`