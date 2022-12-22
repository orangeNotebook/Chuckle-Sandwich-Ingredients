import React from "react";
import "../styles/styles.css";

function ShowSandwich(props) {
  // create an event listener

  return (
    <div>
      <ul className="ingredients">
        <div>
          <a onClick={props.handleClick}>
            <img
              src={process.env.PUBLIC_URL + "sandwich.png"}
              className="sandwichImage"
            ></img>
          </a>
          <h1 className="name">CLICK THE SANDWICH TO SEE THE INGREDIENTS</h1>
        </div>
      </ul>
    </div>
  );
}

export default ShowSandwich;
