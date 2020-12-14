import React from 'react';
import './Navbar.css'

const Navbar = () =>(
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <i style={{color:'#fe5f55',marginRight:'8px', fontSize:'25px'}} className="fab fa-pagelines"></i>
    <a className="navbar-brand" href="/">Improve</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#/pricing">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Getting Started</a>
        </li>
        
      </ul>
      <a className = "effect" style={{marginRight:'15px', textDecoration:'none',color:'black'}} href="/">Log In</a>
      <button style={{color:'#fe5f55', borderColor:'#fe5f55'}} class="btn" type="submit">Sign Up</button>
    </div>
  </div>
</nav>
);

export default Navbar;