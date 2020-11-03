import React, { Component } from 'react';

class Jumbotron extends Component {
    render(){
        return(
            <div className="jumbotron">
                <h1 className="display-4">{this.props.titulo}</h1>,
                <p className="lead">{this.props.descricao}</p>,
                <hr className="my-4"/>
                <a className="btn btn-primary btn-lg" href="#" role="button">Saiba mais </a>
           </div>
        )
    }
}
export default Jumbotron;
        