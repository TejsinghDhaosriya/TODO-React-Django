import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Shows from "./Shows";
import Revenue from "./Revenue";
import Home from "./Home";
import Checkout from "./Checkout";
import "../style.scss";

const Movie = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/revenue" component={Revenue} />
      <Route path="/show" component={Shows} />
      <Route path="/checkout" component={Checkout} />
    </Router>
  );
};

export default Movie;
