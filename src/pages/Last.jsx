import Header from "../component/Header/Header";
import { shittyStars } from "../vari/vari";

function Last(){
    const shittty = shittyStars.map((stars) => {
        return (
            <>
            {stars.isPickedByTeam ? (
                <>
                <h1>{stars.name}</h1> 
                <img src={stars.img} alt="" height="200px"/>
                </>
            ):(
                <>
                </>)
                }
            </>

        )
    })
    return(<>
    <Header thisPage="celiOne" />
    <div>
        {shittty}
    </div>
    
    </>)
}
export default Last;