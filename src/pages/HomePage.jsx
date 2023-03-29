import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Bottom from "../components/Bottom";

export function HomePage(){
    return (
        <>
        <section>
            <Navbar />
        </section>

        <section>
        <Cards/>
        </section>

        <footer>
        {/* <Bottom /> */}
        </footer>
        
        </>
        
    )

}

export default HomePage;