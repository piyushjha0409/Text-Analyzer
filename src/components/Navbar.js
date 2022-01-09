import React from 'react'
import propTypes from 'prop-types';
export const Navbar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">{props.aboutText}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"} mx-5`}>
            <input type="checkbox" className="form-check-input" onClick={props.toggleMode}  id="flexSwitchCheckDefault"/>
             <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
             </div>
          </div>
        </div>
      </nav>
    )
}
Navbar.propTypes = {
  title: propTypes.string.isRequired,
  aboutText : propTypes.string.isRequired
}
// setting the default props
Navbar.propTypes = {
  title : 'Blockchain'
}