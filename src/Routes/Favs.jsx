
import { useAppContext } from "../Components/utils/global.context";
import { Card, CardMedia, Typography,CardContent, Button, CardActionArea } from "@mui/material";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Favs = () => {
  const { state, dispatch } = useAppContext();
  return (
<>
    <h1>Favoritos </h1>

   
    <div>
        

      {state.favs.map((favorite) => (
        <div key={favorite.id}>
         
          <Card  sx={{ maxWidth: 345, margin: "20px auto" }}>
            <CardActionArea className="facDocs" >
              <CardMedia
                component="img"
                height="140"
                image="/public/images/doctor.jpg"           
                   alt="Doctor"
              />
              <CardContent className="facDocs">
                <Typography  gutterBottom variant="h5" component="div">
                  {favorite.name}
                </Typography>
               
              </CardContent>
            </CardActionArea>
            <Button
            variant="outlined"
            onClick={() => dispatch({ type: "REMOVE_FAVORITOS", payload: favorite.id })}
          >
            Eliminar de favoritos
          </Button>
          </Card>
         
      
          
        </div>
      ))}
      
    </div>
    
    {state.favs.length > 0 && (
        <Button
          className="favButton"
          variant="outlined"
          onClick={() => dispatch({ type: "REMOVE_ALL" })}
        >
          Limpiar todos los favoritos
        </Button>
    )}
    </>
  );
};

export default Favs;