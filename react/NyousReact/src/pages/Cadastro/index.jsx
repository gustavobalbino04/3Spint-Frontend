import React from 'react';
import Jumbotron from '../../components/jumbotron';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape'
import {Form, Button, Container} from 'react-bootstrap';


const Cadastrar = () => {
    return (
        <div>
         
        <div>
            <Menu />
            <Container className='form-height'>
                <Form className='form-signin'  >
                    <div className='text-center'>
                     <img  alt='NYOUS' style={{ width : '64px'}} />
                    </div>
                    <br/>
                    <small>Informe os dados Abaixo</small>
                    <hr/>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Informe seu nome"  required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="Informe o email"  required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha"  required/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" >
                        Enviar
                    </Button>
                    <br/><br/>
                    <a href='/cadastrar' style={{ marginTop :'30px'}}>Não tenho conta!</a>
                </Form>
            </Container>
            <Rodape />
        </div>
    
           
               
        </div>
    )
}
export default Cadastrar;