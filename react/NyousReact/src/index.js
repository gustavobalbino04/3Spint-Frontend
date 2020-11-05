import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Eventos from './pages/Eventos';
import { BrowserRouter as Router, Redirect, Route,Switch, link} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastro';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NaoEncontrada } from './pages/naoencontrada';
import Dashboard from './pages/admin/dashboard';
import jwt_decode from 'jwt-decode';
import CrudCategorias from './pages/admin/crudcategorias';
import CrudEventos from './pages/admin/crudevento';

const RotaPrivada = ({component : Component, ...rest}) => (
  <Route 
    {...rest}
    render = { props => 
        localStorage.getItem('token-nyous') !== null ? 
          (<Component {...props} />) : 
          (<Redirect to={{ pathname :'/login', state :{from : props.location}}} />)
    }
  />
);

const RotaPrivadaAdmin = ({component : Component, ...rest}) => (
  <Route 
    {...rest}
    render = { props => 
        localStorage.getItem('token-nyous') !== null && jwt_decode(localStorage.getItem('token-nyous')).role === 'Admin' ? 
          (<Component {...props} />) : 
          (<Redirect to={{ pathname :'/login', state :{from : props.location}}} />)
    }
  />
);

const routing = ( 
  <Router>
    <div> 

      <Switch>
        <Route path='/admin/categoria' component={CrudCategorias}/>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/cadastrar' component={Cadastrar}/>
        <Route path='/admin/Dashboard' component={Dashboard}/>
        <Route component = {NaoEncontrada}/>
        <Route path='/eventos' component={Eventos}/>
        <Route path='/admin/eventos' component={CrudEventos}/>
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
