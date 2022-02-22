import React from 'react';
import './pagina.css';
import Chat_lol from './chat.js';
import Menu_lol from './menu.js';
import Footer from './footer';

function Completo(){
    return(
        <div>
            <Menu_lol/>
            <Chat_lol/>
            <Footer/>
        </div>
    );
} 
export default Completo;