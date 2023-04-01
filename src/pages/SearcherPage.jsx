import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Bottom from "../components/Bottom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searcherPhoto } from "../features/apiCall";
import {
  getAllCardPhoto,
  getCardPhotoError,
  getCardPhotoStatus,
  getSearchPhoto
} from "../features/CardPhotoSearcherSlice";



export const SearcherPage = (props) =>{
    const dispatch = useDispatch();
    let cardPhotoData = useSelector(getAllCardPhoto);
    const cardPhotoStatus = useSelector(getCardPhotoStatus)
    const cardPhotoError = useSelector(getCardPhotoError);
    const cardPhotoObj = useSelector(getSearchPhoto);

    console.log(cardPhotoObj);
    

    useEffect(() => {
         if (cardPhotoStatus === "idle") {
          dispatch(searcherPhoto({cardPhotoObj}));

         }
      }, [cardPhotoObj, dispatch, cardPhotoStatus]);

      let content;
      if (cardPhotoStatus === "loading") {
        console.log(cardPhotoStatus);
      } else if (cardPhotoStatus === "fulfilled") {
        
        if (cardPhotoData !== undefined) {
          content = [];

          if (!(Array.isArray(cardPhotoData))){

            cardPhotoData = cardPhotoData.results;
          }
          
            cardPhotoData.forEach((photo) => { 
              content.push(
                <>
                  <Card photo={photo}/>
                </>
              );
            });

      
          
        }
      } else {

        console.log(cardPhotoError);
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

export default SearcherPage;