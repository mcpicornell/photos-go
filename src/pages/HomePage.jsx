import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Bottom from "../components/Bottom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomPhoto } from "../features/apiCall";
import {
  getAllCardPhoto,
  getCardPhotoError,
  getCardPhotoStatus
} from "../features/CardPhotoSlice";


export const HomePage = (props) =>{
    const dispatch = useDispatch();
    const cardPhotoData = useSelector(getAllCardPhoto);
    const cardPhotoStatus = useSelector(getCardPhotoStatus)
    const cardPhotoError = useSelector(getCardPhotoError);
    // console.log(cardPhotoStatus)

    useEffect(() => {
         if (cardPhotoStatus === "idle") {
          dispatch(getRandomPhoto());

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
        content = "Error";
      }
      console.log(cardPhotoError)

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

export default HomePage;