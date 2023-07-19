import Bottom from "../components/Bottom";
import Navbar from "../components/Navbar";
import imgSearcher from "../img/magnifying-glass-solid.svg";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { CardFav } from "../components/CardFav";
import {
  getLSinSlicer,
  getErrorFavoritesPhotos,
} from "../features/FavoritesSlice";
import { setSearchDescription } from "../features/FavoritesSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { readFavoritesLocalStorage } from "../data/localStorage";

export function MyProfilePage() {
  const favoriteListLS = useSelector(getLSinSlicer);
  const errorFavoritePhoto = useSelector(getErrorFavoritesPhotos);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const searchFavorite = (event) => {
    event.preventDefault();
    const value = document.getElementById("inputMyProfileValue").value;
    const valueRefactor = value.replace(/\s+/g, "-");
    const valueLowerCase = valueRefactor.toLowerCase();
    dispatch(setSearchDescription(valueLowerCase));
    nav("/myProfile/searcher");
  };

  useEffect(() => {

  }, [favoriteListLS]);

  let content;
  if (favoriteListLS !== undefined) {
    let date = new Date();
    date = date.toString();

    content = [];

    favoriteListLS.forEach((favorite) => {
      const savedPhoto = {
        id: favorite.id,
        description: favorite.description,
        width: favorite.width,
        height: favorite.height,
        likes: favorite.likes,
        urlsFull: favorite.urlsFull,
        urlsThumb: favorite.urlsThumb,
        tags: favorite.tags,
        date: favorite.date,
      };

      if (favoriteListLS.description === null) {
        savedPhoto.description = "helloThere";
      }
      content.push(
        <>
          <CardFav photo={savedPhoto} />
        </>
      );
    });
  }

  console.log(errorFavoritePhoto);

  return (
    <>
      <section>
        <Navbar />
      </section>

      <SearcherContainer>
        <div className="searcherImgContainer">
          <form className="formSearcher" onSubmit={searchFavorite}>
            <span>Search your favorite photo!</span>
            <input
              placeholder="Type your description here..."
              id="inputMyProfileValue"
              className="myProfileSearcher"
              required
            ></input>

            <button type="submit">
              <img className="searcherImg" src={imgSearcher} alt="searcher" />
            </button>
          </form>
        </div>
      </SearcherContainer>

      <section className="cardsContainer">{content}</section>

      <footer>{<Bottom />}</footer>
    </>
  );
}

export default MyProfilePage;

const SearcherContainer = styled.section`
  span {
    left: 150px;
  }

  .searcherImgContainer {
  }

  .formSearcher {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    margin-top: 180px;
    font-family: "Poppins";
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    background-color: rgba(90, 114, 98, 1);
    border-radius: 10px 40px 10px 40px;
    color: rgba(252, 247, 247, 1);
    padding: 5px 15px 5px 15px;
  }

  .myProfileSearcher {
    background: #fef4f4;
    border-style: none;
    box-shadow: 1px 1px 1px 1px rgba(90, 114, 98, 1);
    border: 1px solid rgba(90, 114, 98, 1);
    border-radius: 10px;
    margin-top: 25px;
    justify-content: center;
    width: 300px;
    height: 30px;
    position: relative;
  }

  #inputMyProfileValue {
  }

  .searcherImg {
    position: absolute;
    height: 15px;
    width: 15px;
    left: 130px;
    bottom: 10px;
  }

  a {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 48px;
    color: rgba(252, 247, 247, 1);
    text-decoration: none;
    margin-right: 2rem;
  }
  button {
    position: relative;
    border: none;
    background: none;
  }
`;
