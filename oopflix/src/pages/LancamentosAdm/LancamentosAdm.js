import React, { Component } from "react";
import Axios from "axios";

export default class Lancamentos extends Component{
    constructor(){
        super();
        this.state ={
            lancamentos: [],
            id: "",
            titulo: "",
            sinopse: "",
            idcategoria: "",
            idtipo: "",
            tempoduracao: "",
            datalancamento: "",
            idplataforma: "",
            idclassificacao: "",
        }
    }

    componentDidMount(){
        this.listarLancamentos();

    }

    listarLancamentos = () => {
        Axios.get('http://localhost:5000/api/lancamentos', {headers: {'Authorization': "Bearer "+ localStorage.getItem("usuario-opflix")}})
            .then(response => {
                console.log(response.data);
                this.setState({ lancamentos: response.data })
            })
            
            .catch(erro => console.log(erro))

    }

    // mudarEstadoId =(event)=>{
    //     this.setState({id: event.target.value});
    //     console.log(this.state.id);
    // }


    // listarPorId = () =>{
    //     Axios.get('http://localhost:5000/api/lancamentos/'+ this.state.id)
    //     .then(response => {
    //         this.setState({lancamentos: response.data})
    //         console.log(this.state.lancamentos);
    //     })
    //     .catch(erro => console.log(erro))
    // }

    mudarEstadoTitulo = (event) =>{
        this.setState({titulo: event.target.value})
    };
    mudarEstadoSinopse = (event) =>{
        this.setState({sinopse: event.target.value})
    };
    mudarEstadoIdCategoria = (event) =>{
        this.setState({idcategoria: event.target.value})
    };
    mudarEstadoIdTipo = (event) =>{
        this.setState({idtipo: event.target.value})
    };
    mudarEstadoTempoDuracao = (event) =>{
        this.setState({tempoduracao: event.target.value})
    };
    mudarEstadoDataLacamento = (event) =>{
        this.setState({datalancamento: event.target.value})
    };
    mudarEstadoIdPlataforma = (event) =>{
        this.setState({idplataforma: event.target.value})
    };
    mudarEstadoIdClassificacao = (event) =>{
        this.setState({idclassificacao: event.target.value})
    };

    efetuarCadastro = (event) =>{
        event.preventDefault();
        Axios.post("http://localhost:5000/api/lancamentos",{
            titulo: this.state.titulo,
            sinopse: this.state.sinopse,
            idcategoria: this.state.idcategoria,
            idtipo: this.state.idtipo,
            tempoduracao: this.state.tempoduracao,
            datalancamento: this.state.datalancamento,
            idplataforma: this.state.idplataforma,
            idclassificacao: this.state.idclassificacao

        })
        .then(response => this.listarLancamentos())
        
        .catch(erro=>{
            this.setState({erro: "ops, tente novamente"});
            console.log(erro);
        })
    }


    render(){
        return (
            <section>
                <h1>Gestão de Lançamentos</h1>

                <h3>Lista de lancamentos</h3>

                <table id="tabela-lista">
                    <thead>
                        <tr>
                            
                            <th>título</th>
                            <th>sinopse</th>
                            <th>categoria</th>
                            <th>tipo</th>
                            <th>tempo de duração</th>
                            <th>data de lançamento</th>
                            <th>plataforma</th>
                            <th>classificação</th>
                        </tr>
                    </thead>

                    <tbody id="tabela-lista-corpo">
                        {/* {this.state.lancamentos.idLancamento} */}
                        {this.state.lancamentos.map(element => {
                            
                                
                                return (
                                    <tr key={element.idlancamentos}>
                                        <td>{element.titulo}</td>
                                        <td>{element.sinopse}</td>
                                        <td>{element.idcategoria}</td>
                                        <td>{element.idtipo}</td>
                                        <td>{element.tempoduracao}</td>
                                        <td>{element.datalancamento}</td>
                                        <td>{element.idplataforma}</td>
                                        <td>{element.idclassificacao}</td>
    
                                    </tr>
                                )
                            
                        })}
                    </tbody>
                </table>

                <h3>Cadastrar lançamento</h3>
                
                <form onSubmit={this.efetuarCadastro}>
                        <input
                        type="text"
                        placeholder="insira seu título"
                        onChange={this.mudarEstadoTitulo}
                        value={this.state.titulo}
                        />
                        <input
                        type="text"
                        placeholder="insira sua sinopse"
                        onChange={this.mudarEstadoSinopse}
                        value={this.state.sinopse}
                        />
                        <input
                        type="text"
                        placeholder="insira seu id categoria"
                        onChange={this.mudarEstadoIdCategoria}
                        value={this.state.idcategoria}
                        />
                        <input
                        type="text"
                        placeholder="insira seu id tipo"
                        onChange={this.mudarEstadoIdTipo}
                        value={this.state.idtipo}
                        />
                        <input
                        type="text"
                        placeholder="insira seu tempo de duração"
                        onChange={this.mudarEstadoTempoDuracao}
                        value={this.state.tempoduracao}
                        />
                        <input
                        type="text"
                        placeholder="insira sua data de lançamento"
                        onChange={this.mudarEstadoDataLacamento}
                        value={this.state.datalancamento}
                        />
                        <input
                        type="text"
                        placeholder="insira seu id da plataforma"
                        onChange={this.mudarEstadoIdPlataforma}
                        value={this.state.idplataforma}
                        />
                        <input
                        type="text"
                        placeholder="insira sua classificação"
                        onChange={this.mudarEstadoIdClassificacao}
                        value={this.state.idclassificacao}
                        />

                        <button>
                            cadastrar
                        </button>

                        <p>
                        {this.state.erro}
                        </p>
                        
                        

                </form>
                
            </section>
        )
    }
}
