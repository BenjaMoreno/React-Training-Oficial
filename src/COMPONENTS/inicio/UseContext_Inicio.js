import React, { useContext } from "react";
import "./UseContext_Inicio.css";
import { UseContext_ContextoUno } from "../../CONTEXTS/UseContext_ContextoUno";
import { ContextoUsuario } from "../../CONTEXTS/ContextoUsuario";

export const UseContext_Inicio = () => {
  const contextoUno = useContext(UseContext_ContextoUno);
  const contextoUsuario = useContext(ContextoUsuario);
  return (
    <div className="container_UseContext_Inicio">
      <section className="seccion-contexto-inicio">
        <h1>USE CONTEXT</h1>
        <h2>Consumimos el contexto de tipo string</h2>
        <p>
          Este es el contexto:&nbsp;<strong>{contextoUno.contextoTexto}</strong>
        </p>
        <h2>Consumimos el contexto de tipo objeto</h2>
        <p>
          Este es el contexto:&nbsp;
          <strong>
            {contextoUno.contextoObjeto.claveUno},
            {contextoUno.contextoObjeto.claveDos},
            {contextoUno.contextoObjeto.claveTres}
          </strong>
        </p>
        <h2>Consumimos el contexto del usuario actual</h2>
        <p>
          El usuario actual es:&nbsp;
          <strong>
            {contextoUsuario== null
              ? "No se ha ingresado un usuario,inicia sesion para proyectar tu nombre"
              : contextoUsuario.nombre}
          </strong><br/>
          El email del usuario es:&nbsp;
          <strong>
            {contextoUsuario== null
              ? "El usuario no se ha registrado,no podemos mostrar su email"
              : contextoUsuario.email}
          </strong>
        </p>
      </section>
    </div>
  );
};
