import Bottom from "../components/Bottom";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export function MyProfilePage(){
    return (
        <>
       <section>
            <Navbar />
        </section>

        <section>
            <Card/>
        </section>

        <footer>
            <Bottom />
        </footer>
        
        </>
    )
}

export default MyProfilePage;