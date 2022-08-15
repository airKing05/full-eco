import React from 'react';
import { NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 py-3">
          <div className="container-fluid mx-5">
              <NavLink className="navbar-brand fs-2 fw-bold" exact to="/">Full-Eco</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <div class="me-auto"></div>
                  <ul className="navbar-nav fs-4 fw-normal ">
                      <li className="nav-item">
                          <NavLink className="nav-link" exact to="/shop">Shop</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  )
}
