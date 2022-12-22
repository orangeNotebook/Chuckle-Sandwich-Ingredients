import React, { useEffect, useState } from "react";
import "../styles/styles.css";

function Header(props) {
  const [returnedData, setReturnedData] = useState("");

  // create an event listener
  useEffect(() => {});

  return (
    <div>
      <a onClick={props.handleLogoClick}>
        <img
          className="header"
          style={{ width: "250px", marginTop: "20px" }}
          src={process.env.PUBLIC_URL + "logo.png"}
          alt="Logo"
        />
      </a>
    </div>
  );
}

export default Header;
