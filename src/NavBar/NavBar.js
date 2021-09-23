import { NavLink } from "react-router-dom";


function NavBar(){

  const navStyle = {
      color : "red" ,
       margin : "5px"
  }
  return (
      <div className = "nav-container" >
          <NavLink to = '/' style = {navStyle}> Home </NavLink>
          <NavLink to = '/login' style = {navStyle}> Login</NavLink>
          <NavLink to = '/register' style = {navStyle}> Register</NavLink>
          

      </div>
  )
}

export default NavBar;