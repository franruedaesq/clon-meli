import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import logoml from "./logo-ml.png";
import compraAhora from "./compra-ahora.png";
import { Link } from "react-router-dom";
import Dexie from "dexie";

export default function NavBar({ searchProduct }) {
  let countryId = localStorage.getItem("countryID");
  const [windowWidth, setWindowWidth] = useState({
    windowWidth: window.innerWidth,
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize());
  }, []);

  const handleResize = (e) => {
    setWindowWidth({ windowWidth: window.innerWidth });
  };
  let navIcon = (
    <div className="navBarContainer__iconContainer">
      <Link to={`/favourites/`}>
        <div className="navBarContainer__icon">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
          </svg>
        </div>
      </Link>
      <Link>
        <div className="navBarContainer__icon">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
          </svg>
        </div>
      </Link>
    </div>
  );
  return (
    <div className="navBarContainer">
      <Link to={`/home/${countryId}`}>
        <img className="navBarContainer__logo" src={logoml} alt="" />
      </Link>
      <div className="navBarContainer__searchContainer">
        <input
          placeholder="Buscar productos"
          className="navBarContainer__input"
          onChange={(e) => searchProduct(e)}
        />
        <button className="navBarContainer__searchButton">
          <svg
            fill="#c7c7c7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
          </svg>
        </button>
      </div>

      {windowWidth.windowWidth >= 768 ? navIcon : ""}
    </div>
  );
}
