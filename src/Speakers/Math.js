import Header from "../component/Header/Header";
import SCard from "./sCard";

function Speakers(){
    const speak =["hassan"];
       
return(
    <>
    <Header />
            {speak.map(speaker =>{
               return <SCard currentSpeaker={speaker} />
            })}
    </>
)
}
export default Speakers;