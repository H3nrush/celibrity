import Header from "../component/Header/Header";
import SCard from "./sCard";

function Speakers(){
    const speak =["Belli"];
       
return(
    <>
    <Header thisPage="speaker"/>
            {speak.map(speaker =>{
               return <SCard currentSpeaker={speaker} />
            })}
    </>
)
}
export default Speakers;