import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./credentials/login";
import Register from "./credentials/register";
import Error from "./error";
import Home from "./home";
import Appbar from "./appbar";
const App = () => {
  return (
    <BrowserRouter>
      <Appbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
