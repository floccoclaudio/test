import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
/* import { db} from './firebase' this or other? */

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route path="/cart">
        <Cart />
      </Route>
    </Router>
  );
};

export default App;
