import React, { Component } from 'react';
import Menu from '../../components/menu';
import Jumbotron from '../../components/Jumbotron';


class Cadastro extends Component{

    constructor(){
        super();

        this.state = {
            url : 'https://5f9a074d9d94640016f70531.mockapi.io/api/categorias',
            id : '',
            nomeCategoria : '',
            categorias : []
        }
    }

    componentDidMount(){
        this.Listar();
    }
     Listar(){
         fetch(this.state.url)
             .then(response => response.json())
                 .then(dados => {
                     this.setState({categorias : dados});
                     this.novaCategoria();
                     console.log(this.state.categorias);
                 })
                 .catch(err => console.error(err));
                }
    remover(event){
        event.preventDefault();

        console.log(event.target.value);
                
                fetch(this.state.url + '/' + event.target.value,{
                    method : 'DELETE'
                })
                .then(response => response.json())
                .then(dados => {
                    alert('Filme removido');
                    this.Listar();
                })


    }

    editar(event){
        event.preventDefault();
        fetch(this.state.url + '/' + event.target.value,{
            method : 'GET'
        })
        .then(response => response.json())
        .then(dados => {
            console.log(dados);
            this.setState({id : dados.id});
            this.setState({categoria : dados.categoria});
          })
    }

    salvar(event){
        event.preventDefault();
    
            const cadastro = {
              categoria : this.state.categoria,
            }
            let method = (this.state.id === "" ? 'POST' : 'PUT');
            let urlRequest = (this.state.id === "" ? this.state.url :  this.state.url  + '/' + this.state.id);
    
    
            fetch(urlRequest, {
              method : method,
              body : JSON.stringify(cadastro),
              headers : {
                'content-type' : 'application/json'
              }
            })
            .then(response => response.json())
            .then(dados => {
              alert('categoria salva');
              this.Listar();
            })
            .catch(err => console.error(err));
    }
    setNome(event){
        console.log(event.target.value)
        this.setState({nome : event.target.value});
    }
    novaCategoria(){

        this.setState({id : '',categoria : ''})
    }
    render(){
        return(
            <div>
                <Menu/>
                <Jumbotron titulo='Cadastro' descrição='Adicione sua categoria em nosso site'/>
                <div className="container">
                    <div className="bd-example"  >
                    <form id="formCategoria" onSubmit={this.salvar.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="nome">Categoria</label>
                                <input type="text" className="form-control" value={this.state.categoria}  onChange={this.setNome.bind(this)} id="categoria" aria-describedby="categoria" placeholder="Informe a categoria"/>
                            
                            </div>
            
                        <button type="button" onClick={this.novaCategoria.bind(this)}  className="btn btn-secondary">Cancelar</button>
                        <button type="submit"  className="btn btn-success">Salvar</button>
                    </form>

                    <table className="table" style={{margintop: '40px'}}>
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome da Categoria</th>
                            
                        </tr>
                        </thead>
                        <tbody id="tabela-lista-corpo">
                            {
                                this.state.categorias.map((item, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.categoria}</td>
                                            <td>
                                                <button type='button' value={item.id} onClick={this.remover.bind(this)} className='btn btn-danger'>Remover</button>
                                                <button type='button' value={item.id} onClick={this.editar.bind(this)}className='btn btn-warning'>Editar</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
           </div>
        </div>
        )
    }
}
export default Cadastro;