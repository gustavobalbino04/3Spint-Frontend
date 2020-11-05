import React, { useEffect, useState } from 'react';
import Menu from '../../../components/Menu';
import Rodape from '../../../components/Rodape';
import {url} from '../../../utils/constants';
import {Form, Button, Table, Card, Container} from 'react-bootstrap';

const CrudEventos = () => {
    const [ id, setId] = useState(0);
    const [nome, setNome] = useState('');
    const [link, setLink] = useState('');
    const [urlImagem, setUrlImagem] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoriaId, setCategoriaId] = useState('');
    const [categorias, setCategorias] = useState([]);
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        listarEventos();
        listarCategorias();
    }, []);

    const listarCategorias = () => {
        fetch(url + '/categorias')
            .then(response => response.json())
            .then(data => {
                setCategorias(data.data)
                limparCampos();
            })
            .catch(err => console.error(err));
    }

    const listarEventos = () => {
        fetch(url + '/eventos')
            .then(response => response.json())
            .then(data => {
                setEventos(data.data)
                limparCampos();
            })
            .catch(err => console.error(err));
    }

    const limparCampos = () => {
        setId(0);
        setNome('');
        setLink('');
        setCategoriaId(0);
        setUrlImagem('');
        setDescricao('');
    }

    const uploadFile = (event) => {
        event.preventDefault();

        let formdata = new FormData();

        formdata.append('arquivo', event.target.files[0]);

        fetch(`${url}/upload`,{
            method : 'POST',
            body : formdata
        })
        .then(response => response.json())
        .then(data => {
            setUrlImagem(data.url);
        })
        .catch(err => console.log(err))

    }

    const salvar = (event) => {
        event.preventDefault();

        const evento = {
            nome : nome,
            urlImagem :urlImagem,
            categoriaId : categoriaId,
            link : link,
            descricao : descricao,

        }
        let method = (id === 0 ? 'POST' : 'PUT');
        let urlRequest = (id === 0 ? `${url}/eventos` : `${url}/eventos/${id}`);

        fetch(urlRequest, {
            method : method,
            body : JSON.stringify(evento),
            headers : {
                'content-type' : 'application/json',
                'authorization' : 'Bearer ' + localStorage.getItem('token-nyous')
            }
        })
        .then(response => response.json())
        .then(dados => {
            alert('Evento salva');

            listarEventos();
        })
        .catch(err => console.error(err))
    }

    const editar = (event) => {
        event.preventDefault();

        fetch(`${url}/eventos/${event.target.value}`, {
            method : 'GET'
        })
        .then(response => response.json())
        .then(dado => {
            console.log(dado);
            setId(dado.data.id);
            setNome(dado.data.nome);
            setLink(dado.data.link);
            setUrlImagem(dado.data.urlImagem);
            setDescricao(dado.data.descricao);
            setCategoriaId(dado.data.categoriaId);
        })
    }

    const remover = (event) => {
        event.preventDefault();

        fetch(`${url}/eventos/${event.target.value}`,{
            method : 'DELETE',
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token-nyous')
            }
        })
        .then(response => response.json())
        .then(dados => {
            alert('Categoria removida');

            listarEventos();
        })
    }

    return (
        <div>
            <Menu />
         

                <Card>
                    <Card.Body>
                        <Form onSubmit={event => salvar(event)}>
                            <Form.Group controlId="formBasicNome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" value={nome} onChange={event => setNome(event.target.value)} placeholder="Nome do evento"></Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formBasicLink">
                                <Form.Label>Link</Form.Label>
                                <Form.Control type="text" value={link} onChange={event => setLink(event.target.value)} placeholder="http://"></Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formBasicCategoria">
                                <Form.Label>Categoria</Form.Label>
                                <Form.Control as="select" size="lg" custom defaultValue={categoriaId} onChange={event => setCategoriaId(event.target.value)} >
                                    <option value={0}>Selecione</option>
                                    {
                                        categorias.map((item, index) => {
                                            return(
                                                <option value={item.id}>{item.nome}</option>
                                            )
                                        })
                                    }
                                </Form.Control>
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicUrl">
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control as="textarea" rows={3} value={descricao} onChange={event => setDescricao(event.target.value)}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.File id="fileCategoria" label="Imagem do evento" onChange={event => { uploadFile(event)}} />
                                {urlImagem && <img src={urlImagem} style={{ width : '160px'}} />}
                            </Form.Group>
                            <Button type="submit">Salvar</Button>
                        </Form>
                    </Card.Body>
                </Card>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Imagem</th>
                            <th>Nome</th>
                            <th>Link</th>
                            <th>Descrição</th>
                            <th>Categoria</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            eventos.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td><img src={item.urlImagem} style={{ width : '120px'}}/></td>
                                        <td>{item.nome}</td>
                                        <td><a href={item.link} target="_blank">Ir para o evento</a></td>
                                        <td>{item.descricao}</td>
                                        <td>{item.categoria?.nome}</td>
                                        <td>
                                            <Button variant="warning" value={item.id} onClick={event => editar(event)} >Editar</Button>
                                            <Button variant="danger" value={item.id} onClick={event => remover(event)} style={{ marginLeft : '40px'}}>Remover</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            
            <Rodape />
        </div>
    )
}

export default CrudEventos;