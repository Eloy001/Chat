import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EssayForm from './formulario.js';
import Menu_lol from './menu.js';
import Footer from './footer.js';
import Chat_lol from './chat.js';
import IniciarSesion_lol from './iniciarSesion';
import Registrarse_lol from './registrarse.js';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // archivo css de bootstrap  
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // archivo javascript de bootstrap 

// ReactDOM.render(
//   <React.StrictMode>
//      <Menu_lol />
//     <Chat_lol/>
//     < Footer /> 
//     <IniciarSesion_lol/>
//     <Registrarse_lol/>
//   </React.StrictMode>,
//   document.getElementById('root'),
  
// );
  ReactDOM.render(
      <App />,
    document.getElementById('root'),
    
  );
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();


