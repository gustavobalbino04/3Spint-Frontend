import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import jwt_decore from "jwt-decode";
import {url} from '../../utils/constants';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape'
import {Form, Button, Container} from 'react-bootstrap';
import './index.css'




const Login = () => {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = (event) => {
        event.preventDefacult();
        console.log(`${email} - ${senha}`)

        //conectando com o banco atraves do locahoost 
        fetch(url + '',{
            method : "POST",
            body : JSON.stringify({
                email : email,
                senha : senha
            }),
            headers : {
                'content-type' : 'application/json'
            }
        }
        )
        .then(response => {
            if(response.ok){
                return response.json();
            }
            alert('Dados invalidos')
        })
        .then(data =>{


            localStorage.setItem('token-nyous', data.token)

            let usuario = jwt_decore(data.token)

            if(usuario.role === 'Admin'){
                history.push('/admin/dashboard');
            }else{
                history.push('/eventos')
            }

            history.push("/eventos");
        })
        .catch(err => console.error(err))

    }
    return (
        <div>
         
        <div>
            <Menu />
            <Container className='form-height'>
                <Form className='form-signin' onSubmit={event => logar(event)} >
                    <div className='text-center'>
                     <img  alt='NYOUS' style={{ width : '64px'}} />
                    </div>
                    <br/>
                    <small>Informe os dados Abaixo</small>
                    <hr/>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="Informe o email" value={email} onChange={event => setEmail(event.target.value)} required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha"  value={senha} onChange={event => setSenha(event.target.value)}required/>
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
export default Login;
