import Header from "../../component/Header/Header";


function Drinks (){

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    .then((answer) => {
      return answer.json();
    })
    .then((json) => {
      console.log(json);
    });

    return(<>
    <Header thisPage="Drinks" />
    <p>Bonjour</p>
    </>);
};
export default Drinks;