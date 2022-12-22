import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ListIngredients from "./components/ListIngredients";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/styles.css";
import ShowSandwich from "./components/ShowSandwich";

function App() {
  const [returnedData, setReturnedData] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const [sandwichClicked, setSandwichClicked] = useState(false);
  let navigate = useNavigate();

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 1020) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    if (window.innerWidth < 1500) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  });

  function handleClick() {
    setSandwichClicked(true);
  }

  function handleCloseSandwich() {
    setSandwichClicked(false);
  }

  if (isMobile) {
    return (
      <div className="App">
        <Header handleLogoClick={handleCloseSandwich} />
        {sandwichClicked ? (
          <ListIngredients handleCloseSandwich={handleCloseSandwich} />
        ) : (
          <ShowSandwich handleClick={handleClick} />
        )}
      </div>
    );
  } else {
    return (
      <div className="App">
        <Grid container spacing={2}>
          <Grid item xs></Grid>
          <Grid item xs={3}>
            <Header handleLogoClick={handleCloseSandwich} />
            {sandwichClicked ? (
              <ListIngredients handleCloseSandwich={handleCloseSandwich} />
            ) : (
              <ShowSandwich handleClick={handleClick} />
            )}

            <Footer />
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
