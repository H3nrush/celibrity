import { useState } from "react";
import Header from "../../component/Header/Header";

function Massenger(){

    const [massege , setmessage] = useState("");

    const writeMassegeChange = (event) => {
        setmessage(event.target.value);
    };

    return(<>
    <Header thisPage="Massenger" />
    <form className="container">
        <label>
            <input onChange={writeMassegeChange} type="text" name="massege" />
        </label>
        <p>what you said : "{massege}"</p>
    </form>
    </>)
}
export default Massenger;