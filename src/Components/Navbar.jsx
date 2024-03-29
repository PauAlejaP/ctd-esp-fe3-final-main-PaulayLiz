import React from "react";
import "./utils/Navbar.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppContext } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useAppContext();

  return (
    <nav>
      <div
        className={
          state.tema ? "containerNavbar-dark" : "contaninerNavbar-light"
        }
      >
        <img src="/public/images/logo.jpg" alt="logo" />
        <ul>
          <li>
            <Link to="/">
              <Button>Home</Button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <Button>Contacto</Button>
            </Link>
          </li>
          <li>
            <Link to="/favs">
              <Button>Favoritos</Button>
            </Link>
          </li>
        </ul>
        <button onClick={() => dispatch({ type: "TOGGLE" })}>
          Cambiar Tema
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
