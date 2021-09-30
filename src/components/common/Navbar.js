import { NavLink } from 'react-router-dom'
import React from 'react'
import logo from '../../assets/Awaydays-1.png'

function Nav () {

  // const [click, setClick] = React.useState(false)
  // const [button, setButton] = React.useState(true)
  


  return (
    // <nav className={navbar ? 'navbarMove active' : 'navbarMove'}>
    <nav className="nav">
      <div className="autohide navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/"><img className="logo" src={logo} alt="logo"/></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><NavLink className="nav-link" to="/clubs">Clubs</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="register">Register</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="login">Login</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/user">Profile</NavLink></li>
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

// <nav className={`nav ${show && 'nav__white"'}`}>
// <div className="nav-logo">
//   <NavLink className="navbar-brand" to="/"><img className="logo" src={logo} alt="logo"/></NavLink>
// </div>
// <div>
//   <ul className="navbar-nav ms-auto">
//     <li className="nav-item"><NavLink className="nav-link" to="/clubs">Clubs</NavLink></li>
//     <li className="nav-item"><NavLink className="nav-link" to="register">Register</NavLink></li>
//     <li className="nav-item"><NavLink className="nav-link" to="login">Login</NavLink></li>
//   </ul>
// </div>
// </nav>