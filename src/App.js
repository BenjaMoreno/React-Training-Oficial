import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Inicio } from "./PAGES/inicio/Inicio";
import { RutaUno } from "./PAGES/ruta1/RutaUno";
import { RutaDos } from "./PAGES/ruta2/RutaDos";
import { UseContext_ContextoUno } from "./CONTEXTS/UseContext_ContextoUno";
import Modal from "react-modal";
import { useState } from "react";
import { IniciarSesion } from "./COMPONENTS/Formularios/IniciarSesion";
import DropdownSesion from "./COMPONENTS/Boostrap/DropdownSesion";
import { ContextoUsuario } from "./CONTEXTS/ContextoUsuario";


function App() {
  // ESTADOS
  // toggle formulario inicio de sesion
  const [formInicioSesion, setFormInicioSesion] = useState(false);

  //contexto objeto usuario
  const [objetoUsuarioState, setObjetoUsuarioState] = useState(null);
  //OBJETOS Y VARIABLES
  const contextoTexto = "ESTE ES EL CONTEXTO UNO DE TIPO STRING";

  const contextoObjeto = {
    claveUno: "Valor 1",
    claveDos: "Valor 2",
    claveTres: "Valor 3",
  };
  // FUNCIONES
  const abrirFormSesion = () => {
    if (objetoUsuarioState == null) {
      setFormInicioSesion(true);
    } else {
      //no abrir el formulario
    }
  };
  const cerrarFormSesion = () => {
    setFormInicioSesion(false);
  };

  const cerrarSesion = () => {
    setObjetoUsuarioState(null);
  };
  const objetoUsuario = (objeto) => {
    setObjetoUsuarioState(objeto);
  };
  
  return (
      <ContextoUsuario.Provider value={objetoUsuarioState}>
        <UseContext_ContextoUno.Provider
          value={{ contextoTexto, contextoObjeto }}
        >
          <BrowserRouter>
            <div className="App">
              <header>
                <img id="LOGO-header" src={logo}></img>
                <h1 id="nombre-usuario">
                  {objetoUsuarioState == null ? "" : objetoUsuarioState.nombre}
                </h1>
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
              cerrarFormSesion={cerrarFormSesion}
              objetoUsuario={objetoUsuario}
            />
          </Modal>
        </UseContext_ContextoUno.Provider>
      </ContextoUsuario.Provider>
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
