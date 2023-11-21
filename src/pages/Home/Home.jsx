import Header from "../../component/Header/Header";
import { shittyStars } from "../../vari/vari";
import './home.scss';

function Home(){
    const shittty = shittyStars.map((stars) => {
        return (
            <>
            <h1>{stars.name}</h1> 
            <img src={stars.img} alt="" height="200px"/>
            </>
        )
    })
    return(
        <>
        <Header />
        <div className="container">
        <p>{shittty}</p>
        </div>
        

        </>
       
    )
}
export default Home;
