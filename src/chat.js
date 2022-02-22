import React from 'react';
import './pagina.css';
 
class   Chat_lol extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          Texto:'',
          Mensaje:[]
        }
        this.onChange = this.onChange.bind(this);
        this.enviarAlaBD = this.enviarAlaBD.bind(this);
        this.MontarChat = this.MontarChat.bind(this);
        this.SubirChat = this.SubirChat.bind(this);
    }
    MontarChat = e =>{
        fetch('http://localhost:80/visual/chat/Getmensajes.php',{})
        .then(respuesta => respuesta.json())
        .then((result)=>{
            this.setState({
                Mensaje: result,
            });
        })
    }
    componentDidMount(){
        this.MontarChat();
    }
    SubirChat = e =>{
        e.preventDefault();
        const data = new FormData();
        var fecha = new Date();

        data.append('usuario', localStorage.getItem("usuario"));
        data.append('mensaje', this.state.Texto);
        data.append("fecha", fecha.getDate().toString()+"/"+(fecha.getMonth()+1)+"/"+(fecha.getFullYear()));
        data.append("hora", fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds());
        
        fetch('http://localhost:80/visual/chat/insertarmensaje.php',{
          method: "Post",
          body: data
        }).then(function(respuesta){
            this.MontarChat();
            return respuesta.text();
        })
        document.location="http://localhost:3000/chat";
    }
    BorrarChat= e =>{
        e.preventDefault();
        const data = new FormData();
        fetch('http://localhost:80/visual/chat/Limpiarchat.php',{
          method: "Post",
          body: data
        }).then(function(response){
            if(response.ok){
             document.location="http://localhost:3000/chat";
            }
        }) 
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
    }
    render(){
        return(
        <div id='forma_chat'>
                <br></br>
                 <div id='caja_chat' className="scroll-container"><br></br>
                    {this.state.Mensaje.map(Mensaje=>(
                    <div key={Mensaje.id}>
                        <h4>{Mensaje.Nombre}:</h4>
                        <h5>{Mensaje.Mensaje}</h5>
                        <div className='horas1'> <p className='hora_envio'>Enviado el: {Mensaje.diaymes} a las: {Mensaje.hora_minutos}</p>  </div>
                        <hr></hr>
                    </div>
                    ))}
                 </div>
                 <div className='enviartexto'>
                  <form onSubmit={this.SubirChat} className="escribir" >
                    <button id='boton_borrar' className='borrar' type="submit" onClick={this.BorrarChat} value="borrar">Limpiar</button>
                    <textarea name='Texto' id='caja_texto' type="text" maxLength="160"  cols="50" rows="4" placeholder='escribe aqui..' value={this.state.Texto} onChange={this.onChange}></textarea>
                    <input id='boton_enviar' type="submit" value="Enviar"/>  
                 </form> 
                </div>
        </div>
    )
  }
  }
  export default Chat_lol;