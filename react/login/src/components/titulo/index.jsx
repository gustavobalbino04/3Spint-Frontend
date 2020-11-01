import React, {Component} from 'react';

class Titulo extends Component{
    constructor(){
        super();
    }
     render(){
         return(
             <h1>{this.props.texto}</h1>
         )
     }
}
export default Titulo;