import Bottom from "../components/Bottom";
import Navbar from "../components/Navbar";
import imgSearcher from '../img/magnifying-glass-solid.svg'
import { useEffect } from "react";

import { CardFav } from "../components/CardFav";
import { readFavoritesLocalStorage } from "../data/localStorage";
 
export function MyProfilePage(props){

  useEffect(() =>{

    let favoritesList = readFavoritesLocalStorage();

  console.log('Lista de favoritos')
  console.log(favoritesList.data)

    let content = [];
    let date = new Date();


    if (favoritesList != null) {  
      for(let i=0; i < favoritesList.data.length; i++){
        const savedPhoto = 
        {
          id: favoritesList.data[i].id,
          description: favoritesList.data[i].description,
          width: favoritesList.data[i].width,
          height: favoritesList.data[i].height,
          likes: favoritesList.data[i].likes,
          urls: 
          {
            full: favoritesList.data[i].urls.full,
            thumb: favoritesList.data[i].urls.thumb
          },
          tags: favoritesList.data[i].tags,
          date: date

        }

  
        content.push(
    <>
    <CardFav photo={savedPhoto} />
    </>

  );


        }    
    }

    favoritesList.data.forEach((element) => {
      
      console.log(savedPhoto)
    });

  })

  


    return (
      <>
     <section>
          <Navbar />
      </section>

      <form>
          <h2>My Photos</h2>
          
          <input placeholder='Search your photo' id='inputNavValue' className='navSearcher'></input>

          <button type='submit'>
              <img className='searcherImg' src={imgSearcher} />
          </button>
      </form>
      
      <section>

      {content}                          
                      
      </section>

      <footer>
          <Bottom />
      </footer>
      
      </>
    )
  }

export default MyProfilePage;