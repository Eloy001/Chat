import React from 'react';
import './pagina.css';
import './iniciarSesion.js'
import Registrarse_lol from './registrarse';
import IniciarSesion_lol from './iniciarSesion';

function Sesion(){
    return(
        <div className='registros'>
            <h3 className='iniciar2'>¡Bienvenido de vuelta!</h3>
            <IniciarSesion_lol/>
        <h3 className='iniciar2'>¿Primera vez?</h3>
            <Registrarse_lol/>
            <br></br>
        </div>
    );
} 
export default Sesion;
