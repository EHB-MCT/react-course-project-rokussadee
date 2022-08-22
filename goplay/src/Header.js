import React from "react";
import "./Header.scss"
import logo from "./assets/goPLAYLOGO.svg"

function Header() {
  return (
    <div id="nav" className="toolbar" role="banner">
      <a href='https://goplay-angular-eb33a.web.app/'>
      <img to src={logo} alt="GoPlay Logo" height="80px" id="logo"/>
      </a>

      <div className="searchbar">
        <input className="searchInput"type="text" name="" placeholder="Search"/>

        <span className="searchButton material-icons-outlined">search</span>

      </div>
        <div className="spacer"></div>

        <a >
          <span>Programma's</span>
        </a>

        <a  target="_blank" rel="noopener">
          <span>TV-Gids</span>
        </a>

        <a  target="_blank" rel="noopener">
          <span>Mijn Lijst</span>
        </a>

        <a  target="_blank" rel="noopener">
          <span className="material-icons-outlined">person</span>
        </a>

        <a target="_blank" rel="noopener">
          <span className="material-icons">menu</span>
        </a>


    </div>

  )
} export default Header;