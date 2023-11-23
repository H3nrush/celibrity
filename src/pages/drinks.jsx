import { useState } from "react";
import Header from "../component/Header/Header";


function Drinks (){
  // i use the useState to reshare the answer between consts and print the answert in tags
    const [drinksR , setDrinksR] = useState(null);
  //i wanna recieve a data if the drinks for ex: for bar so first i will add the pachage url
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    //then in here iwill say while you recieve answer from url add the lists of value into a json file 
    .then((answer) => {
      return answer.json();
    })
    //then here i will say to log me every drinks from the list . here json is for every drink 
    .then((json) => {
      // now i test whith console.log
      // here i call the useState const to bring the same value of json
    setDrinksR(json);
    });

    return(<>
    <Header thisPage="Drinks" />
    <p>Bonjour</p>
    {/* i said here if drinksR in not empty write me drinks are readey and if not else */}
    {drinksR ? <article>Drinks are reader</article> : <p>Drinks are not ready</p>}
    </>);
};
export default Drinks;