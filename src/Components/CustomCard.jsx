import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAppContext } from "./utils/global.context";
import { getDentista } from "../api/Dentista";

const CustomCard = () => {
  const { state, dispatch } = useAppContext();
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dentistData = await getDentista();
      setDocs(dentistData);
    };

    fetchData();
  }, []);

  const addFav = (id, name, username) => {
    const favCard = { id, name, username };
    if (!state.favs.some((fav) => fav.id === id)) {
      dispatch({ type: "ADD_FAVORITOS", payload: favCard });
      alert(`¡${name} ha sido agregado a tus favoritos!`);
    } else {
      console.log(alert("Dentista ya está en favoritos"));
    }
  };

  const getAvatarUrl = (userId) => {
    return `https://i.pravatar.cc/150?img=${userId}`;
  };

  return (
    <div className="card">
      {docs.map((elemento) => (
        <Card key={elemento.id} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="avatar"
            height="200"
            image={getAvatarUrl(elemento.id)}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              align="center"
            >
              {elemento.name}
            </Typography>
            <Typography variant="body3" color="text.secondary" align="left">
              Doctor: {elemento.username}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              component={Link}
              to={`/Detail/${elemento.id}`}
              className="detailsButton"
            >
              Información de contacto
            </Button>
            <Button
              onClick={() =>
                addFav(elemento.id, elemento.name, elemento.username)
              }
            >
              Agregar a mis favoritos
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default CustomCard;
