import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Bottom from "../components/Bottom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomPhoto } from "../features/apiCall";



export const HomePage = (props) =>{
    console.log(getRandomPhoto())
    const dispatch = useDispatch();
    const statePhotos = useSelector(state => state.photos);

    

    useEffect(() => {
        if (statePhotos.state === "idle") {
          dispatch(getRandomPhoto());
        }
        
      }, [statePhotos.state], dispatch);

      let content;
      if (statePhotos.state === "loading") {
        content = "Loading";
      } else if (statePhotos.state === "fulfilled") {
        
        if (statePhotos.data !== undefined) {
          content = [];
          statePhotos.data[0].forEach((photo) => { 
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