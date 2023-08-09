import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
export default function Menu() {
  return (
    <div className="container">
        <nav classNameName="navbar navbar-Expand-Lg Navbar-Light Bg-Light">
  <div className="container-fluid">
    <a className="navbar-Brand" href="#">Navbar</a>
    <button className="navbar-Toggler" type="button" data-bs-toggle="collapse" data-Bs-Target="#navbarSupportedContent" aria-Controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-Toggler-Icon"></span>
    </button>
    <div className="collapse Navbar-Collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-Item">
          <a className="nav-Link Active" aria-Current="page" href="#">Home</a>
        </li>
        <li className="nav-Item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-Item Dropdown">
          <a className="nav-link Dropdown-Toggle" href="#" id="navbarDropdown" role="button" data-Bs-Toggle="dropdown" aria-Expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-Labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-Link Disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      
    </div>
  )
}
