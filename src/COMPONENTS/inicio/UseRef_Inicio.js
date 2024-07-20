import React, { useRef } from "react";
import "./UseRef_Inicio.css";

export const UseRef_Inicio = () => {
    //REFERENCIAS
    let Titulo=useRef();
    let Subtitulo=useRef();
    let Contenedor_cajas=useRef();
    let Contenedor_botones=useRef();
    let Todo=useRef();
    //FUNCIONES
    const cambiarTitulo=()=>{
        Titulo.current.style.backgroundColor='red'
    }
    const cambiarSubtitulo=()=>{
        Subtitulo.current.style.backgroundColor='purple'
    }
    const cambiarContCajas=()=>{
        Contenedor_cajas.current.style.backgroundColor='lightblue'
    }
    const cambiarContBotones=()=>{
        Contenedor_botones.current.style.backgroundColor='green'
    }
    const cambiarCaja1=()=>{
        Contenedor_cajas.current.children[0].style.backgroundColor='green'
    }
    const cambiarCaja2=()=>{
        Contenedor_cajas.current.children[1].style.backgroundColor='blue'
    }
    const cambiarCaja3=()=>{
        Contenedor_cajas.current.children[2].style.backgroundColor='brown'
    }
    const cambiarCaja4=()=>{
        Contenedor_cajas.current.children[3].style.backgroundColor='orange'
    }
    const quitarTodo=()=>{
        Titulo.current.style.backgroundColor='#121329';
        Subtitulo.current.style.backgroundColor='#121329';
        Contenedor_cajas.current.style.backgroundColor='#121329'
        Contenedor_botones.current.style.backgroundColor='#121329'
        Contenedor_cajas.current.children[0].style.backgroundColor='#121329'
        Contenedor_cajas.current.children[1].style.backgroundColor='#121329'
        Contenedor_cajas.current.children[2].style.backgroundColor='#121329'
        Contenedor_cajas.current.children[3].style.backgroundColor='#121329'


    }
  return (
    <div className="container_UseRef_Inicio">
      <article className="articulo-ref" ref={Todo}>
        <h1 ref={Titulo}>USE REF</h1>
        <h2 ref={Subtitulo}>Modifica los elementos con useRef</h2>
        <div className="container-cajas" ref={Contenedor_cajas}>
            <div className="caja">Caja 1</div>
            <div className="caja">Caja 2</div>
            <div className="caja">Caja 3</div>
            <div className="caja">Caja 4</div>
        </div>
        <h2>¡APRETA LOS BOTONES!</h2>
        <div className="controlador" ref={Contenedor_botones}>
            <div className="container-btns"><button className="btn-ref" onClick={cambiarTitulo}>Color Titulo</button></div>
            <div className="container-btns"><button className="btn-ref" onClick={cambiarSubtitulo}>Color Subtitulo</button></div>
            <div className="container-btns"><button className="btn-ref" onClick={cambiarContCajas}>Contenedor de cajas</button></div>
            <div className="container-btns"><button className="btn-ref" onClick={cambiarContBotones}>Contenedor botones </button></div>
            <div className="container-btns"><button className="btn-ref" onClick={cambiarCaja1}>Color caja 1</button></div>
            <div className="container-btns"><button className="btn-ref" onClick={cambiarCaja2}>Color caja 2</button></div>
            <div className="container-btns"><button className="btn-ref" onClick={cambiarCaja3}>Color caja 3</button></div>
            <div className="container-btns"><button className="btn-ref" onClick={cambiarCaja4}>Color caja 4</button></div>
        </div>
        <button onClick={quitarTodo}>Resetear</button>
      </article>
    </div>
  );
};
