import { useFormik } from "formik";
import { useState } from "react"; // Importa useState
import { Typography, Grid, TextField, Button } from "@mui/material";
import * as Yup from "yup";

const Form = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { handleSubmit, handleChange, values, setFieldValue, errors } =
    useFormik({
      initialValues: {
        nombre: "",
        email: "",
      },

      validationSchema: Yup.object({
        nombre: Yup.string().required("Debes ingresar un nombre valido"),
        email: Yup.string().required("Debes ingresar un email valido"),
      }),

      onSubmit: (data) => {
        console.log(data);
        setFormSubmitted(true);
      },
    });
  return (
    <div>
      <Typography color="primary" variant="h2" align="center">
        Formulario de Usuario
      </Typography>

      <form className="form-container" onSubmit={handleSubmit}>
        <Grid
          container
          alignItems={"center"}
          justifyContent="space-evenly"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Grid item xs={12} md={7}>
            <TextField
              type="text"
              label="Ingresa tu nombre"
              onChange={(e) => {
                setFieldValue("nombre", e.target.value);
              }}
              variant="outlined"
              fullWidth
              value={values.nombre}
              helperText={errors.nombre}
              error={errors.nombre}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField
              type="email"
              label="Ingresa tu e-mail"
              variant="outlined"
              fullWidth
              name="email"
              onChange={handleChange}
              value={values.email}
              error={errors.email}
              helperText={errors.email}
            />
          </Grid>
        </Grid>
        {Object.keys(errors).length >= 5 && (
          <Typography variant="body1" color="error" align="center">
            Por favor verifique su información nuevamente
          </Typography>
        )}
        {formSubmitted && !Object.keys(errors).length && (
          <Typography variant="body1" color="primary" align="center">
            Gracias {values.nombre}, te contactaremos cuanto antes vía mail
          </Typography>
        )}
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Form;
