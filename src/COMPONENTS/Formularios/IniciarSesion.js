import React from "react";
import "./IniciarSesion.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export const IniciarSesion = ({
  cerrarFormSesion,
  nombreSesion,
  objetoUsuario
}) => {
  // Validacion con FORMIK y YUP
  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
    },
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .min(2, "Demasiado Corto")
        .max(24, "Demasiado Largo")
        .required(),
      email: Yup.string().required(),
    }),
    onSubmit: (values) => {
      //enviar objeto usuario al contexto
      objetoUsuario(values)
      
      //cerrar modal
      cerrarFormSesion();
    },
  });

  return (
    <form className="formulario-sesion" onSubmit={formik.handleSubmit}>
      <button className="btn-cerrar-form-sesion" onClick={cerrarFormSesion}>
        X
      </button>
      <h1>Inicia Sesion</h1>
      <label>Usuario</label>
      <input
        type="text"
        name="nombre"
        value={formik.values.nombre}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.nombre && formik.touched.nombre && (
        <div>{formik.errors.nombre}</div>
      )}
      <label>Correo</label>
      <input
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.email && formik.touched.email && (
        <div>{formik.errors.email}</div>
      )}
      <label>Contraseña</label>
      <input type="password" name="contraseña" />
      <button type="submit" className="ingresar">
        Ingresar
      </button>
    </form>
  );
};
