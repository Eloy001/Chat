import React from 'react';
import './pagina.css';
 
class Menu_lol extends React.Component {
 
	cerrarSesion(){
	  localStorage.setItem("usuario", "");
      document.location="http://localhost:3000";	
    }

  render() {
  	return (
		 
		<nav id='header' className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
 
		<a className="navbar-brand" href="#">Chat Grupal</a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
			 <span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse">

			<form>
			<ul className="navbar-nav mr-auto">
				<li className="nav-item active">
					  <a className="nav-link" href="#">Home </a>
				</li>
				<li className="nav-item">
					  <a className="nav-link" href="#">Nosotros</a>
				</li>
				<li className="nav-item">
					  <a className="nav-link" href="#">Servicios</a>
				</li>
				
				<li className="nav-item">
					  <a className="nav-link" type='submit' onClick={this.cerrarSesion}>Desconectarse</a>
				</li>
			</ul>
		</form>
		</div>
	</nav>
  )
}
}
export default Menu_lol;