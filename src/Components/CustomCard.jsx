import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  Button,
} from "@mui/material";
import "../Components/utils/CustomCard.css";
import { Link } from "react-router-dom";
import Detail from "../Routes/Detail";
import { useAppContext } from "./utils/global.context";
import { getDentista } from "../api/Dentista";

const CustomCard = ({ name, username, id }) => {
  const { state, dispatch } = useAppContext();

  const addFav = () => {
    const favCard = { id, name, username };
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(favCard);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log(alert("esta agregado"), favCard);
    //const isDuplicate = state.favs.some((favorites) => favorites.id === id);
    //if (!isDuplicate) {
    //const favCard = { id, name, username };
    //dispatch({ type: "ADD_FAVORITOS", payload: favCard });
    //} else {
    //alert("Ya agregaste este Dentista a Favoritos");
    // }
  };
  const getAvatarUrl = (userId) => {
    return `https://i.pravatar.cc/150?img=${userId}`;
  };
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let dentistData = await getDentista();
      setDocs(dentistData);
    };
    getData();
  }, []);

  return (
    <>
      <div className="card">
        {docs.map((elemento) => {
          return (
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
                <Button onClick={addFav}>Agregar a mis favoritos</Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default CustomCard;
