import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sesion from './Sesion.js'
import Completo from './chatcompleto.js';
  
export default function  App (){
    return (
      <BrowserRouter>
        <Routes>
            <Route index element={<Sesion />} />
            <Route path="chat" element={<Completo />} >
          </Route>
        </Routes>
      </BrowserRouter>
    );
}
