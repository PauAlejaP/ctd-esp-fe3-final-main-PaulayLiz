import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();
let initialState = { theme: false, CustomCard: [], favs: [] };

const dentistaReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITOS":
      return { ...state, favs: [...state.favs, action.payload] };
    case "REMOVE_FAVORITOS":
      let newFavoritesList = state.favs.filter(
        (dentista) => dentista.id !== action.payload
      );
      return { ...state, favs: newFavoritesList };
    case "REMOVE_ALL":
      return { ...state, favs: [newFavoritesList[0]] };
    case "TOGGLE":
      return { ...state, theme: !state.theme };
    default:
      return state;
  }
};

export const DentistaContext = ({ children }) => {
  const [state, dispatch] = useReducer(dentistaReducer, initialState);

  let datos = { state, dispatch };

  return <AppContext.Provider value={datos}>{children}</AppContext.Provider>;
};


export const useAppContext = () => useContext(AppContext);

   
