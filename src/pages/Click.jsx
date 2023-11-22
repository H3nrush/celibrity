import Header from "../component/Header/Header";
import { useState } from "react";

function Click(){
    const [displayText , setDisplayText] = useState(true);
    const btnClick = () => {
        setDisplayText(!displayText)
    };
    return(<>
            <Header thisPage="btnClick" />
           <main>
            {displayText && <p>Hello to you</p>}
            <button onClick={btnClick}>Click Here Please</button>
           </main>
    </>)
}
export default Click;
