import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { NotFound } from "../pages/notfound";
import { Register } from "../pages/register";


export function Routes(){
  return(
  <Switch>
    <Route path="/"  exact component={Home} />
    <Route path="/login"   component={Login} />
    <Route path="/register"   component={Register} />
    <Route component={NotFound} />
  </Switch>
)
}