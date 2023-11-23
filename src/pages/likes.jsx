import { useState } from "react";
import Header from "../component/Header/Header";

function Likes (){  
    const [likesCount , setLikesCount] = useState(0);

    const likesClick = () => {
        setLikesCount(likesCount+1);
    }

    return(<main>

        <Header thisPage="Likes" /> 
        <div className="container">
        <button onClick={likesClick}>Like</button>
        <br /> <br />
        <strong>You have likes {likesCount} times!</strong>
        </div>

        </main>)

};

export default Likes;