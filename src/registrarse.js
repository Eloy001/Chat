import React from 'react';
import './pagina.css';

class Registrarse_lol extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          usuario:'',
          password:'',
          mensajeUsuario: '',
          mensajePassword: '',
          invalidUsuario: false,
          invalidPassword: false,
        }
        this.onChange = this.onChange.bind(this);
        this.enviarAlaBD = this.enviarAlaBD.bind(this);
    }

    onChange = e =>{
        const {name, value} = e.target;
        this.setState({
          [name]: value,
        });
      }
      enviarAlaBD = e  => {
        e.preventDefault();
        let valido = true;
        
        if(this.state.usuario === ''){
        this.setState({
          invalidUsuario: true,
          mensajeUsuario: 'Indica tu usuario',
        });
        valido = false;
      }
      if(this.state.password === ''){
        this.setState({
          invalidPassword: true,
          mensajePassword: 'Indica tu contraseña',
        });
        valido = false;
      }
      if(valido){
        //Enviarlo a la base de datos o a otro componente
        console.log("Se envian los datos " + JSON.stringify(this.state));
        
        const data = new FormData();
        data.append('usuario',this.state.usuario);
        data.append('password',this.state.password);
        localStorage.setItem("usuario", this.state.usuario);

        fetch('http://localhost:80/visual/chat/registrarse.php',{
          method: 'POST',
          body: data
       })
       .then(function(response){
          if(response.ok) {
              
              return response.text()
          } else {
              throw "Error en la llamada Ajax";
          }
       })
       .then(function(texto){
        if(texto != "Usuario ya registrado"){
          document.location="http://localhost:3000/chat";
        }
          console.log(texto);
       })
       .catch(function(err){
          console.log(err);
       });
        
      }
    }
    render() {
        return (
            <form id='sesion' onSubmit={this.enviarAlaBD}>
                <h3 className='login_e'>Registrarse</h3>
                <hr></hr>
                <div id='sesion_e'>
                    <label>Usuario: </label>
                    <input type="text" name='usuario' maxLength="20" placeholder="Usuario" value={this.state.usuario} onChange={this.onChange}/>
                </div>
                <div id='sesion_e'>
                    <label>Contraseña: </label>
                    <input type="password" name='password' maxLength="20" placeholder="Contraseña" value={this.state.password} onChange={this.onChange} />
                </div> 
                <button id='boton_iniciar' type="submit">Iniciar</button>
            </form>
        );
    }
}
  export default Registrarse_lol;
