import React,{useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Accesorie from "./components/pages/Accessories/Accesorie";
import Header from "./components/pages/Header/Header";
import Home from "./components/pages/Home/Home";
import Laptop from "./components/pages/Laptops/Laptop";
import Login from "./components/pages/Login/Login";
import Payment from "./components/pages/Payment/Payment";
import Phone from "./components/pages/Phones/Phone";
import Signup from "./components/pages/Signup/Signup";

function App() {
 
 
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route path="/phone" component={Phone} />
          <Route path="/laptop" component={Laptop} />
          <Route path="/accessorie" component={Accesorie} />
          <Route path="/payment" component={Payment} />
         </Switch>
      </Router>
    </div>
  );
}

export default App;
