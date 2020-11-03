import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Eventos from './pages/Eventos';
import { BrowserRouter as Router, Route,Switch, link} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NaoEncontrada } from './pages/naoencontrada';
import Dashboard from './pages/dashboard';



const routing = ( 
  <Router>
    <div> 

      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/cadastro' component={Cadastro}/>
        <Route path='/admin/Dashboard' component={Dashboard}/>
        <Route component = {NaoEncontrada}/>
        <Route path='/eventos' component={Eventos}/>
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
