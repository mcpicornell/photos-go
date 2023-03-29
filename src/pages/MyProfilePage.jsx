import Bottom from "../components/Bottom";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

export function MyProfilePage(){
    return (
        <>
       <section>
            <Navbar />
        </section>

        <section>
        <Cards/>
        </section>

        <footer>
        {<Bottom />}
        </footer>
        
        </>
    )
}

export default MyProfilePage;