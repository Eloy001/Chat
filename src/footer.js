import React from 'react';
import './pagina.css';


class Footer extends React.Component{
  render() {
    return (
        <footer id='footer'>
    
            <p> &copy; {(new Date().getFullYear())} Eloy Malaver. <a href="#">Política de Privacidad</a>  <a href="#">Términos</a></p>
        </footer>
    ) 
  }
}
export default Footer;
