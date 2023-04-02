import Bottom from "../components/Bottom";
import Navbar from "../components/Navbar";
import imgSearcher from '../img/magnifying-glass-solid.svg'
 
export function MyProfilePage(){
    return (
        <>
       <section>
            <Navbar />
        </section>

        <section>
        <form>
            <h2>My Photos</h2>
            
            <input placeholder='Search your photo' id='inputNavValue' className='navSearcher'></input>
                            
            <button type='submit'>
                <img className='searcherImg' src={imgSearcher} />
            </button>
            </form>
                            
                        
        </section>

        <footer>
            <Bottom />
        </footer>
        
        </>
    )
}

export default MyProfilePage;