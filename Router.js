
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import MainMenu from './MainMenu';
import Home from './Home';
import Login from './Login';
import Registro from './Registro';
import DetallePerfil from './DetallePerfil';
import Perfil from './Perfil';

export default () => {
  return (
    <Router>
      <MainMenu />
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component = {()=> <Login title={'Ingrese Usuario/Contraseña'} />}/>
      <Route path="/registro" exact component = {()=> <Registro titulo={'Nuevo Miembro'} />}/>
      <Route path="/detalle-Perfil/:id" exact component={DetallePerfil} />      
      <Route render={() => <Redirect to="/" />} />
    </Router>
  );
}
