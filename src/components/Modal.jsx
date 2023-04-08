import { useDispatch, useSelector } from "react-redux";
import { getModaldata } from "../features/FavoritesSlice";
import imgCrossSolid from '../img/xmark-solid.svg'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setPhotos } from "../features/SearchSlice";
import {readFavoritesLocalStorage, updateDescriptionLocalStorage} from '../data/localStorage'
import { useState } from "react";
import { setFavoritesPhotos, setModal, setlocalStorage } from "../features/FavoritesSlice";
import {changeDescription} from '../features/FavoritesSlice'

export const Modal = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    

    const nav = useNavigate()

    const closeModal = () => {
            
            nav('/myProfile');
        }
        
        const updateDescription = (event) => {
            event.preventDefault();
            const descriptionValue = document.getElementById('editDescription').value;
            dispatch(setFavoritesPhotos(props.info))
            dispatch(changeDescription({id: props.info.id , description: descriptionValue}));
            dispatch(setModal(props.info))
            nav('/myProfile/info');
          };

    return (
        <>
        <ModalContainer>
        <div id='modalCardFav' >
            <h3>Photo info</h3>
            
            <div id='crossImgContainer' >
                <img src={imgCrossSolid} onClick={closeModal}/>
            </div>

            <form className="containerElements" onSubmit={updateDescription}>
                <label>Description: </label>
                <span>
                    {props.info.description}
                </span>
                <input id='editDescription' placeholder="Write here your new description here..." />
                <button>Update Description</button>
            </form>

            <div className="containerElements">
                <label>Width: </label>
                <span>
                    {props.info.width}
                </span>
            </div>

            <div className="containerElements">
                <label>Height: </label>
                <span>
                    {props.info.height}
                </span>
            </div>

            <div className="containerElements">
                <label>Likes: </label>
                <span>
                    {props.info.likes}
                </span>
            </div>
           
            <div className="containerElements">
                <label >Date added: </label>
                <span>
                    {props.info.date}
                </span>

            </div>
            
        </div>
        </ModalContainer>
        </>
    )

}

const ModalContainer = styled.section`
    #modalCardFav{
        text-align: center;
        justify-content: center;
        margin-top: 150px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 42px;
        line-height: 38px;
        border: solid 1px black;
        width: 600px;
        height: 400px;
        margin-left: 100px;

    }

    #crossImgContainer{
        
        position: relative;
    }

    img{
        position: absolute;
        height: 30px;
        width: 30px;
        left: 500px;
        bottom: 80px;
    }


    .containerElements{
        display:flex;
        flex-direction: row;
        justify-content: center;
    }
    
    label{
        display: flex;
        flex-direction: column;
        text-align: left;
        
    }

    span{
        
        display: flex;
        flex-direction: column;
    }

 

`

export default Modal;