import React, { useContext } from "react";
import "./UseContext_Inicio.css";
import { UseContext_ContextoUno } from "../../CONTEXTS/UseContext_ContextoUno";
import { ContextoNombre } from "../../CONTEXTS/ContextoNombre";

export const UseContext_Inicio = () => {
  const contextoUno = useContext(UseContext_ContextoUno);
  const contextoUsuario = useContext(ContextoNombre);
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
            {contextoUsuario == ""
              ? "No se ha ingresado un usuario"
              : contextoUsuario}
          </strong>
        </p>
      </section>
    </div>
  );
};
