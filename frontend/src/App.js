import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import ListIngredients from "./components/ListIngredients";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/styles.css";

function App() {
  const [returnedData, setReturnedData] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

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

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs></Grid>
        <Grid item xs={7}>
          <Header />
          <ListIngredients />
          <Footer />
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
}

export default App;
