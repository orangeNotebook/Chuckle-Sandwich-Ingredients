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
        <>
          {returnedData.map((ingredient) => {
            return (
              <div>
                <h2>Ingredient {ingredient.ID}</h2>
                <img src={ingredient.Img} className="image"></img>
                <p>{ingredient.Name}</p>
                <p>{ingredient.Person}</p>
                <br></br>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default ListIngredients;
