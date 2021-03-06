import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { NotFound } from "../pages/notfound";
import { Register } from "../pages/register";
import RouteVerify from "./RouteVerify";

export function Routes(){
  return(
  <Switch>
    <RouteVerify path="/"  exact component={Login}  />
    <RouteVerify path="/home"  component={Home}  isPrivate />
    <RouteVerify path="/register" component={Register}  />
    <Route component={NotFound} />
  </Switch>
)
}