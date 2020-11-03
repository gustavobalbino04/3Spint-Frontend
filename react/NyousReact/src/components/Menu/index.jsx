import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

function Menu (){

  const renderMenu = () => {
    const token = localStorage.getItem('token-nyous');
    if(token == null){
      return(
        <div>

        <li className="nav-item">
              <a className="nav-link" href="/Cadastro">Cadastro</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Login">Login</a>
              
            </li>
        </div>

      )else if()
    }
    console.log(token);
  }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Nyous</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Cadastro">Cadastro</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Login">Login</a>
              
            </li>
          </ul>
          {renderMenu()}
        </div>
      </nav>
    )
}
export default Menu;