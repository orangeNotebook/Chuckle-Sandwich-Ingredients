import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/styles.css";
import { Button } from "@mui/material";

function ListIngredients(props) {
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
              <div>
                <li className="ingredient-container">
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
                  <img src={ingredient.Img} className="image"></img>
                </li>
                <br></br>
              </div>
            );
          })}

          <Button
            className="name"
            sx={{ fontSize: "30px", color: "#be483e", margin: "60px" }}
            onClick={props.handleCloseSandwich}
          >
            Close sandwich
          </Button>
        </ul>
      )}
    </div>
  );
}

export default ListIngredients;
