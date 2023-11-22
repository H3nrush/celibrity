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
    <div>
        {shittty}
    </div>

    </>)
}
export default OneOfAll;
