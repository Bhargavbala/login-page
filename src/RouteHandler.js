import {  Route, Switch } from "react-router";







import LandingPage from "./Landing page/LandingPage"
import Login from "./Login/Login";
import NavBar from "./NavBar/NavBar";
import NoMatch from "./NoMatch/NoMatch";
import Register from "./Register/Register";

const RouteHandle = () =>{
    return( <div className = "route-container">
    <div className = "Nav-bar">
        <NavBar/>
    </div>
    <Switch>
    <Route path='/' exact component = {LandingPage}/>
    <Route path = '/register' component = {Register}/>
    <Route path = '/login' component = {Login}/>
    <Route component = {NoMatch}/>
    </Switch>
    </div>
          )
}



export default RouteHandle;