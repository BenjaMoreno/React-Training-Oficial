import React, { useContext } from "react";
import "./UseContext_Consumidor.css";
import { UseContext_ContextoUno } from "../../CONTEXTS/UseContext_ContextoUno";

export const UseContext_Consumidor = () => {
    const contexto=useContext(UseContext_ContextoUno)
  return (
    <section className="container-contexto-consumidor">
      <article>
        <h1>USE CONTEXT</h1>
        <h2>Imprimimos un contexto de tipo string</h2>
        <p>
          Contexto string:&nbsp;<strong>{contexto.contextoTexto}</strong>
        </p>
        <h2>Imprimimos un contexto de tipo object</h2>
        <p>
          Contexto objeto:&nbsp;<strong>{contexto.contextoObjeto.claveUno},{contexto.contextoObjeto.claveDos},{contexto.contextoObjeto.claveTres}</strong>
        </p>
      </article>
    </section>
  );
};
