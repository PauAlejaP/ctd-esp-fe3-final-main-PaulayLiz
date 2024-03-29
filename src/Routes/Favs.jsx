import React from "react";
import { useAppContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, dispatch } = useAppContext();

  const removeFavorite = (id) => {
    dispatch({ type: "REMOVE_FAVORITOS", payload: id });
  };

  const clearAllFavorites = () => {
    dispatch({ type: "REMOVE_ALL" });
    localStorage.removeItem("favorites");
  };

  return (
    <div>
      <h1>Favoritos</h1>
      {state.favs.length > 0 ? (
        state.favs.map((favorite) => (
          <div key={favorite.id}>
            <h2>{favorite.name}</h2>
            <p>{favorite.username}</p>
            <button onClick={() => removeFavorite(favorite.id)}>
              Elimina de favoritos
            </button>
          </div>
        ))
      ) : (
        <p>No hay favoritos</p>
      )}
      <button onClick={clearAllFavorites}>Elimina todos</button>
    </div>
  );
};

export default Favs;
