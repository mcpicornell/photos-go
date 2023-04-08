import Bottom from "../components/Bottom";
import Navbar from "../components/Navbar";
import imgSearcher from '../img/magnifying-glass-solid.svg'
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { CardFav } from "../components/CardFav";
import { getLSinSlicer , getErrorFavoritesPhotos} from "../features/FavoritesSlice";
import { setSearchDescription } from "../features/FavoritesSlice";
import { useNavigate } from "react-router-dom";

export function MyProfilePage(){

    const favoriteListLS = useSelector(getLSinSlicer)
    const errorFavoritePhoto = useSelector(getErrorFavoritesPhotos);
    const dispatch = useDispatch();
    const nav = useNavigate()

    const searchFavorite = (event) =>  {
      event.preventDefault();
      const value = document.getElementById('inputMyProfileValue').value;
      const valueRefactor = value.replace(/\s+/g, "-");
      const valueLowerCase = valueRefactor.toLowerCase();
      
      dispatch(setSearchDescription(valueLowerCase));
   
      nav('/myProfile/searcher');
    }

  let content;
  if(favoriteListLS !== undefined){
  let date = new Date();
  date = date.toString();

  // let description = new String();
  // description = description.toString();

     content = [];

     favoriteListLS.forEach((favorite) => { 
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
        date: favorite.date
       }

       if(favoriteListLS.description === null){
        savedPhoto.description = 'helloThere';
       }
       console.log(savedPhoto)
         content.push(
           <>
             <CardFav photo={savedPhoto}/>
           </>
         );
     }
       )};
     
   console.log(errorFavoritePhoto);


return (
   <>
   <section>
       <Navbar />
   </section>

   <SearcherContainer>      
    <div className='searcherImgContainer'>
        <form className="formSearcher" onSubmit={searchFavorite}>
          <span>Search your favorite photo!</span>
           <input placeholder='Type your description here...' id='inputMyProfileValue' className='myProfileSearcher' required></input>
                            
            <button type='submit'><img className='searcherImg' src={imgSearcher} />
            </button>
        </form>
      </div>
    </SearcherContainer>

   <section className='cardsContainer' >       
       {content}        
   </section>

   <footer>
   {<Bottom />}
   </footer>
   </>
   
)

}

export default MyProfilePage;


const SearcherContainer = styled.section`

  span{
    left: 150px;
  }

  .searcherImgContainer{
    
  }

  .formSearcher{
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }

  span{
    margin-top: 150px;
    font-family: 'Poppins';
        font-weight: 500;
        font-size: 30px;
        line-height: 60px;
        color: black;
        text-decoration: underline 2px black;
  }

    .myProfileSearcher{
      background: #FEF4F4;
      border: none;
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 40px;
      margin-top: 25px;
      justify-content: center;
      width: 300px;
      height: 30px;
      position: relative;
    }

    #inputMyProfileValue{
    }

    .searcherImg{
        position: absolute;
        height: 10px;
        width: 10px;
        left: 130px;
        bottom: 10px;
    }

    a{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 48px;
        color: rgba(252, 247, 247, 1);
        text-decoration: none;
        margin-right: 2rem;
    }
    button{
      position: relative;
        border: none;
        background:none;
    }

`