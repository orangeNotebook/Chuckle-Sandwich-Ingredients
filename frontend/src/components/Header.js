import React, { useEffect, useState } from "react";

function Header() {
  const [returnedData, setReturnedData] = useState("");

  // create an event listener
  useEffect(() => {});

  return (
    <div>
      <img
        style={{ width: "250px", marginTop: "20px" }}
        src={process.env.PUBLIC_URL + "logo.png"}
        alt="Logo"
      />
    </div>
  );
}

export default Header;
