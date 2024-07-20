import Dropdown from 'react-bootstrap/Dropdown';
import './DropdownSesion.css'
import { useContext } from 'react';
import {  ContextoUsuario } from '../../CONTEXTS/ContextoUsuario';

function DropdownSesion({abrirFormSesion,cerrarSesion}) {
  const contexto_ObjetoUsuario=useContext(ContextoUsuario)
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {contexto_ObjetoUsuario == null ? 'Inicia Sesión' : contexto_ObjetoUsuario.email}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={abrirFormSesion}>{contexto_ObjetoUsuario == null ? 'Iniciar Sesión': contexto_ObjetoUsuario.nombre}</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={cerrarSesion}>Cerrar Sesión</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownSesion;