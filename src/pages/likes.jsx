import { useState } from "react";
import Header from "../component/Header/Header";

function Likes (){  
    //here i make two const one for rechange the value and one to type the value in tags 
    
    const [likesCount , setLikesCount] = useState(0);
    //useState will give a value for both and reshare the value between two const
    // so here i explain to the const everytime that i click on the btn give me one value of 1+

    const likesClick = () => {
        setLikesCount(likesCount+1);
    }
    

    return(<main>

        <Header thisPage="Likes" /> 
        <div className="container">
        {/* here i make a button for likes and i add info tag to 
         how many times i clicked on like bottun. and i use onClick
          to make a addEventListener "Click" */}
        <button onClick={likesClick}>Like</button>
        <br /> <br />
        
        <strong>You have likes {likesCount} times!</strong>
        </div>

        </main>)

};

export default Likes;