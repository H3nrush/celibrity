import Header from "../component/Header/Header";
import { shittyStars } from "../vari/vari";
function OneOfAll(){
    const shittty = shittyStars.map((stars) => {
        return (
            <>
            <h1>{stars.name}</h1> 
            <p>{stars.bio}</p>
            </>
        )
    })
    return(<>
    <Header thisPage="celiLast" />
    <div className="container">
        {shittty}
    </div>

    </>)
}
export default OneOfAll;
