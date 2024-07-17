import Dropdown from 'react-bootstrap/Dropdown';
import './DropdownSesion.css'

function DropdownSesion({usuario,abrirFormSesion,cerrarSesion}) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {usuario}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={abrirFormSesion}>{usuario}</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={cerrarSesion}>Cerrar Sesión</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownSesion;