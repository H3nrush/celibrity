import Header from "../component/Header/Header";


function Drinks (){

  //i wanna recieve a data if the drinks for ex: for bar so first i will add the pachage url
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    //then in here iwill say while you recieve answer from url add the lists of value into a json file 
    .then((answer) => {
      return answer.json();
    })
    //then here i will say to log me every drinks from the list . here json is for every drink 
    .then((json) => {
      // now i test whith console.log
      console.log(json);
    });

    return(<>
    <Header thisPage="Drinks" />
    <p>Bonjour</p>
    </>);
};
export default Drinks;