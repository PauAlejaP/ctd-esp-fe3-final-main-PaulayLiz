
import { useAppContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, dispatch } = useAppContext();
  console.log(state);

  return (
    <div>
      {state.favs.map((favorite) => {
        return (
          <div key={favorite.id}>
            <h1>{favorite.name}</h1>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_BY_ID", payload: favorite.id })
              }
            >
              Quitar de favoritos
            </button>
          </div>
        );
      })}
      <h1>Favorites</h1>
      <button onClick={() => dispatch({ type: "REMOVE_ALL" })}>
        Limpiar todos los favoritos
      </button>
    </div>
  );
};

export default Favs;
