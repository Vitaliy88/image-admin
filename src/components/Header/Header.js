import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className='header-wrap'>
    <nav className="nav">
      <NavLink exact={true} to="/" className="nav-link" activeClassName='active'>Images List</NavLink>
      <NavLink exact={true} to="/addImage" className="nav-link" activeClassName='active'>Add Image</NavLink>
    </nav>
    </div>
  )
}

export default Header
