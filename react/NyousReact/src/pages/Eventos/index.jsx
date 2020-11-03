import React from 'react';
import Jumbotron from '../../components/jumbotron';
import Rodape from '../../components/Rodape';
import Menu from '../../components/Menu';

const Eventos =()=> {
    return(
        <div>
            <Menu/>
            <Jumbotron titulo="Eventos"/>
            <Rodape/>
        </div>
    )
}
export default Eventos;