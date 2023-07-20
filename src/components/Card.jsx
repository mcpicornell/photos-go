import cloudArrowDownSolid from "../img/cloud-arrow-down-solid.svg";
import { saveAs } from "file-saver";
import floppyDiskSolid from "../img/floppy-disk-solid.svg";
import styled from "styled-components";
import { createFavoritesInLocalStorage } from "../data/localStorage";

export function Card(props) {
  const downloadImg = () => {
    saveAs(props.photo.urlsFull, props.photo.id);
  };

  const addToLocalStorage = () => {
    const dateFunction = new Date();
    const dateString = dateFunction.toString();
    props.photo.date = dateString;
    createFavoritesInLocalStorage(props.photo);
  };

  return (
    <>
      <CardContainer>
        <div className="card">
          <img className="imgAPI" src={props.photo.urlsRegular} alt="" />

          <div className="cardButtonsContainer">
            <div id="addButtonContainer" className="buttonsContainer">
              <img
                className="buttonsImg"
                src={floppyDiskSolid}
                onClick={addToLocalStorage}
              alt="floppyDiskSolid"/>
            </div>

            <div
              id="downloadButtonContainer"
              className="buttonsContainer"
              onClick={downloadImg}
            >
              <img className="buttonsImg" src={cloudArrowDownSolid} alt="cloudArrowDownSolid"/>
            </div>
          </div>
        </div>
      </CardContainer>
    </>
  );
}

export default Card;

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
  }

  .imgAPI {
    height: 250px;
    width: 300px;
    border: 0.5px solid black;
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

  #downloadButtonContainer {
    left: 150px;
  }

  #downloadButtonContainer img {
    width: 30px;
  }

  .buttonsImg {
    height: 50px;
    width: 15px;
  }

  .buttonsImg:hover {
    cursor: pointer;
  }

  #addButtonContainer img {
    width: 25px;
  }
`;
