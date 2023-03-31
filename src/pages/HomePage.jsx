import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Bottom from "../components/Bottom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomPhoto } from "../features/apiCall";



export const HomePage = (props) =>{
    const dispatch = useDispatch();
    const photosState = useSelector(state => state.photos);

    

    useEffect(() => {
        if (photosState.status === "idle") {
          dispatch(getRandomPhoto());
        }
      }, [photosState.status], dispatch);

      let content;
      if (photosState.status === "loading") {
        content = "Loading";
      } else if (photosState.status === "fulfilled") {
        
        if (photosState.data !== undefined) {
          content = [];
          photosState.data[0].forEach((photo) => { 
            content.push(
              <>
                <Card props={photo}/>
              </>
            );
          });
        }
      } else {
        content = "Error";
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

export default HomePage;