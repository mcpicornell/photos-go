import styled from "styled-components";
import { useDispatch } from "react-redux";
import cloudArrowDownSolid from "../img/cloud-arrow-down-solid.svg";
import trashSolid from "../img/trash-solid.svg";
import { saveAs } from "file-saver";
import { setModal, setlocalStorage } from "../features/FavoritesSlice";

import {
  deleteFavoritesLocalStorage,
  readFavoritesLocalStorage,
} from "../data/localStorage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function CardFav(props) {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const deleteLocalStorage = () => {
    deleteFavoritesLocalStorage(props.photo);
    props.setFilteredFavoritesArr(readFavoritesLocalStorage());
  };

  const showModal = () => {
    dispatch(setModal(props.photo));
    nav("/myProfile/info");
  };

  const downloadImg = () => {
    saveAs(props.photo.urlsFull, props.photo.id);
  };

  useEffect(() => {
    
  },[props.photo, props.setFilteredFavoritesArr])

  return (
    <>
      <CardContainer>
        <div className="card">
          <img
            className="imgLS"
            src={props.photo.urlsFull}
            onClick={showModal}
            alt=""
          />

          <div className="cardButtonsContainer">
            <div id="downloadIcon" className="buttonsContainer">
              <img
                className="buttonsImg"
                src={cloudArrowDownSolid}
                onClick={downloadImg}
              alt="buttonArrow"/>
            </div>

            <div id="removeButtonContainer" className="buttonsContainer">
              <img
                className="buttonsImg"
                src={trashSolid}
                onClick={deleteLocalStorage}
              alt="buttonTrash"/>
            </div>
          </div>
        </div>
      </CardContainer>
    </>
  );
}

export default CardFav;

const CardContainer = styled.div`
  .card {
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
    margin-top: 55px;
  }

  .imgLS {
    height: 250px;
    width: 300px;
    border: 0.5px solid black;
    cursor: pointer;
  }

  img {
    border-radius: 0.5rem;
  }

  .cardButtonsContainer {
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

  #removeButtonContainer {
    left: 150px;
  }

  #removeButtonContainer img {
    width: 22px;
  }

  .buttonsImg {
    height: 50px;
    width: 30px;
  }

  .buttonsImg:hover {
    cursor: pointer;
  }

  #downloadIcon img {
    width: 37px;
  }
`;
