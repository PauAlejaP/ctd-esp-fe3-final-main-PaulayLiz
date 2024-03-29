import { useAppContext } from "../Components/utils/global.context";
import { useEffect } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    const storedFavoritos = localStorage.getItem("favs");
    if (storedFavoritos) {
      const parsedFavoritos = JSON.parse(storedFavoritos);
      dispatch({ type: "ADD_FAVORITOS", payload: parsedFavoritos });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs, dispatch]);

  const eliminarFavoritos = (id) => {
    dispatch({ type: "REMOVE_FAVORITOS", payload: id });
  };

  return (
    <div>
      <h2>Favoritos</h2>
      <ul>
        {state.favs.map((dentista) => (
          <>
            <li key={dentista.id}>
              {" "}
              <h2>{dentista.name} </h2>
            </li>
            <div>
              <button onClick={() => removeFavorito(dentista.id)}>
                Eliminar
              </button>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Favs;
