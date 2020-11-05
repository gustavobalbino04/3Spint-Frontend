import React, { useEffect, useState } from 'react';
import Jumbotron from '../../components/jumbotron';
import Rodape from '../../components/Rodape';
import Menu from '../../components/Menu';
import {Container, Row, Col, Card} from 'react-bootstrap';
import {url} from '../../utils/constants';

const Eventos =()=> {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        listarEventos();
    }, []);

    const listarEventos = () => {
        fetch(url + '/eventos')
            .then(response => response.json())
            .then(data => {
                setEventos(data.data)
            })
            .catch(err => console.error(err));
    }
    return(
        <div>
        <Menu />
           
               

               <Row>
                   {
                       eventos.map((item, index) => {
                           return (
                               <Col xs='4'>
                                   <Card style={{ width: '18rem' }}>
                                   <Card.Img variant="top" src={item.urlImagem} />
                                   <Card.Body>
                                       <Card.Title>{item.nome}</Card.Title>
                                       <Card.Text>{item.descricao}</Card.Text>
                                       <a href={item.link} target='_blank' >Ir para o evento</a>
                                   </Card.Body>
                                   </Card>
                               </Col>
                           )
                       })
                   }
               </Row>
          
       <Rodape />
    </div>
    )
}
export default Eventos;