import React from "react";
import { Button, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppContext } from "./utils/global.context";
import "./nav.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useAppContext();
  console.log(state)



  return (
      <div  className={state.theme ? "body-dark" : "body-light"}>
      <nav>
        <img src="/public/images/logo.jpg" alt="logo" />
        <ul>
             <Link to="/">
              <Button>Home</Button>
            </Link>
            <Link to="/contact">
              <Button>Contacto</Button>
                            </Link>
            <Link to="/favs">
              <Button>Favoritos</Button>
            </Link>
          
        </ul>
          
            <Button onClick={() => dispatch({type: "TOGGLE_THEME"})}>Cambiar Tema</Button>
          
      </nav>
      </div>
    
  );
};

export default Navbar;
