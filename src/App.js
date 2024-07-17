import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Inicio } from "./PAGES/inicio/Inicio";
import { RutaUno } from "./PAGES/ruta1/RutaUno";
import { RutaDos } from "./PAGES/ruta2/RutaDos";
import { UseContext_ContextoUno } from "./CONTEXTS/UseContext_ContextoUno";
import Modal from "react-modal";
import { createContext, useState } from "react";
import { IniciarSesion } from "./COMPONENTS/Formularios/IniciarSesion";
import DropdownSesion from "./COMPONENTS/Boostrap/DropdownSesion";
import { ContextoNombre } from "./CONTEXTS/ContextoNombre";

function App() {
  // ESTADOS
  // toggle formulario inicio de sesion
  const [formInicioSesion, setFormInicioSesion] = useState(false);
  //sesion nav
  const [usuario, setUsuario] = useState("Inicia sesión");
  //context nombre
  const [nombreContext, setNombreContext] = useState("");

  const contextoTexto = "ESTE ES EL CONTEXTO UNO DE TIPO STRING";
  const cambiarContextoUsuario=(nombre)=>{
    setNombreContext(nombre)
  }
  const contextoObjeto = {
    claveUno: "Valor 1",
    claveDos: "Valor 2",
    claveTres: "Valor 3",
  };
  const abrirFormSesion = () => {
    if (usuario === "Inicia sesión") {
      setFormInicioSesion(true);
    } else {
      //preguntar si desea cerrar sesion
    }
  };
  const cerrarFormSesion = () => {
    setFormInicioSesion(false);
  };
  const nombreSesion = (nombre) => {
    setUsuario(nombre);
  };
  const cerrarSesion = () => {
    setUsuario("Inicia sesión");
    setNombreContext('')
  };
  return (
    <ContextoNombre.Provider value={nombreContext}>
      <UseContext_ContextoUno.Provider
        value={{ contextoTexto, contextoObjeto }}
      >
        <BrowserRouter>
          <div className="App">
            <header>
              <img id="LOGO-header" src={logo}></img>
              <h1 id="nombre-usuario">{nombreContext}</h1>
              <nav>
                <ul>
                  <li>
                    <NavLink to="/">Inicio</NavLink>
                  </li>
                  <li>
                    <NavLink to="/rutauno">Ruta Uno</NavLink>
                  </li>
                  <li>
                    <NavLink to="/rutados">Ruta Dos</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <DropdownSesion
                        usuario={usuario}
                        abrirFormSesion={abrirFormSesion}
                        cerrarSesion={cerrarSesion}
                      />
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </header>
            <main>
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/rutauno" element={<RutaUno />} />
                <Route path="/rutados" element={<RutaDos />} />
              </Routes>
            </main>
            <footer></footer>
          </div>
        </BrowserRouter>
        <Modal isOpen={formInicioSesion} style={estilosFormularioSesion}>
          <IniciarSesion
            cambiarContextoUsuario={cambiarContextoUsuario}
            cerrarFormSesion={cerrarFormSesion}
            nombreSesion={nombreSesion}
          />
        </Modal>
      </UseContext_ContextoUno.Provider>
    </ContextoNombre.Provider>
  );
}
const estilosFormularioSesion = {
  content: {
    width: "30vw",
    margin: "auto",
    height: "auto",
    backgroundColor: "#121329",
  },
};

export default App;
