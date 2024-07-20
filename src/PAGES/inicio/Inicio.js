import React from 'react';
import './Inicio.css'
import { UseContext_Inicio } from '../../COMPONENTS/inicio/UseContext_Inicio';
import { UseRef_Inicio } from '../../COMPONENTS/inicio/UseRef_Inicio';
import { ConsumirApi } from '../../COMPONENTS/inicio/ConsumirApi';


export const Inicio = () => {

  return (
    <div className='Inicio'>
    <UseContext_Inicio/>
    <UseRef_Inicio/>
    <ConsumirApi/>
    </div>
  )
}