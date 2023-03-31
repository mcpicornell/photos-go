import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Bottom from "../components/Bottom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searcherPhoto } from "../features/apiCall";
import {
  getAllCardPhoto,
  getCardPhotoError,
  getCardPhotoStatus
} from "../features/CardPhotoSearcherSlice";

// export const getInputValue = (event) =>{

// export const inputSearcherValue = (event) => {
//     let inputSearcherValue = document.getElementById('inputValue').value;
//     return inputSearcherValue;
// }

// }

export const SearcherPage = (props) =>{
    const dispatch = useDispatch();
    const cardPhotoData = useSelector(getAllCardPhoto);
    const cardPhotoStatus = useSelector(getCardPhotoStatus)
    const cardPhotoError = useSelector(getCardPhotoError);
    

    useEffect(() => {
         if (cardPhotoStatus === "idle") {
          dispatch(searcherPhoto());

         }
      }, [cardPhotoStatus], dispatch);
      console.log(cardPhotoData)

      let content;
      if (cardPhotoStatus === "loading") {
        content = "Loading";
      } else if (cardPhotoStatus === "fulfilled") {
        
        if (cardPhotoData !== undefined) {
          content = [];
          console.log(cardPhotoData)

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