import Bottom from "../components/Bottom";
import Navbar from "../components/Navbar";
import imgSearcher from '../img/magnifying-glass-solid.svg'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styled from "styled-components";
import { CardFav } from "../components/CardFav";
import { readFavoritesLocalStorage } from "../data/localStorage";
import { getDataFavoritesPhotos,getLSinSlicer , getErrorFavoritesPhotos , getFavoritePhotoStatus, getIsFavoritePhoto, getSearchDescription } from "../features/FavoritesSlice";
import {setFavoritesPhotos, removeFavoritesPhotos, setLocalStorage, setModal, setSearchDescription, deleteSearchDescription} from "../features/FavoritesSlice";
import { useState } from "react";
import {Modal} from '../components/Modal'
import { getModaldata } from "../features/FavoritesSlice";

export function InfoPage(){

    const modalData = useSelector(getModaldata);

    return(
        <>
        <header>
        <Navbar/> 
        </header>

        <section>
        <Modal info={modalData}/> 
        </section>
    
        </>
    )
}