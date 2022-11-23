import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/styles.css";

function ListIngredients() {
  const [returnedData, setReturnedData] = useState("");
  const [gotData, setGotData] = useState(false);

  // create an event listener
  useEffect(() => {});

  function getIngredients() {
    async function apifunc() {
      try {
        const get = await axios.get("/getAllIngredients");
        setReturnedData(get.data);
        setGotData(true);
      } catch (err) {
        console.log(err);
      }
    }

    apifunc();
  }

  return (
    <div>
      {!gotData ? (
        getIngredients()
      ) : (
        <ul className="ingredients">
          {returnedData.map((ingredient) => {
            return (
              <li className="ingredient-container">
                <img src={ingredient.Img} className="image"></img>
                {ingredient.Person[ingredient.Person.length - 1] === "s" ? (
                  <div className="info-container">
                    <h1 className="name">{ingredient.Person}'</h1>
                    <h1 className="ingredient-name">{ingredient.Name}</h1>
                  </div>
                ) : (
                  <div className="info-container">
                    <h1 className="name">{ingredient.Person}'s</h1>
                    <h1 className="ingredient-name">{ingredient.Name}</h1>
                  </div>
                )}
                <br></br>
              </li>
            );
          })}

          <h1 className="instruction-text">Hover to reveal the ingredients</h1>
        </ul>
      )}
    </div>
  );
}

export default ListIngredients;
