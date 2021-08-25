import { NavLink } from 'react-router-dom'
import React from 'react'
// import 'materialize-css'
// import { Navbar } from 'react-materialize'
import logo from '../../assets/away-days-logo.png'
import { button } from './Button'

function Nav () {

  const [click, setClick] = React.useState(false)
  const [button, setButton] = React.useState(true)
  const [navbar, setNavbar] = React.useState(false)

  const changeBackground = () => {
    console.log(window.scrollY) 
    if (window.scrollY >= 1) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  

  window.addEventListener('scroll', changeBackground)


  return (
    <nav className={navbar ? 'navbarMove active' : 'navbarMove'}>
      <div className="autohide navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/"><img className="logo" src={logo} alt="logo"/></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><NavLink className="nav-link" to="/clubs">Clubs</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/map">Map</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="register">Register</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="login">Login</NavLink></li>
            </ul>
          </div> 
        </div> 
      </div>
    </nav>
  )
}

export default Nav

// Add a userIsAuth ==> then show Logout onClick button


{/* <Nav
  
alignLinks="right">
<NavLink exact to="/">Home</NavLink>
<NavLink to="/clubs" className="right">Clubs</NavLink>
<NavLink to="/map">Map</NavLink>
<NavLink to="/register">Register</NavLink>
</Nav> */}



// <Navbar className="grey darken-2" alignLinks="right">
// <NavLink exact to="/">Home</NavLink>
// <NavLink to="/clubs" className="right">Clubs</NavLink>
// <NavLink to="/map">Map</NavLink>
// <NavLink to="/register">Register</NavLink>
// </Navbar>