import React, { useState } from "react";
import Traductor from "../Traductor";
import "./Traducir.css";

export const Traducir = () => {
   //ESTADOS
   const [original,setOriginal]=useState('palabra');
   const [traducida,setTraducida]=useState('palabra')

    
    const traducirTexto=(e)=>{
        e.preventDefault();
        let target=e.target;
        let palabra=target.palabra.value;
        setOriginal(palabra);
        const traducirPalabra=async ()=>{
            let texto=await Traductor(palabra,'es');
            setTraducida(texto)
        };
        traducirPalabra();
    }
  return (
    <div className="container-traducir">
      <article className="articulo-traducir">
        <h1>TRADUCIR TEXTOS <span>(INGLES -- ESPAÑOL)</span></h1>
        <div className="flexbox">
        <div className="caja-trad">
            <form onSubmit={traducirTexto}>
                <h3>Escribe una palabra en ingles:</h3>
                <input type="text" name="palabra" placeholder="palabra..." />
                <input type="submit" value={'Traducir'} />
            </form>
        </div>
        <div className="caja-trad">
            <h2>Palabra original</h2>
            <strong>{original}</strong>
            <h2>Palabra Traducida</h2>
            <strong>{traducida}</strong>
        </div>
        </div>
      </article>
    </div>
  );
};
