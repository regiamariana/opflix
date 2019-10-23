import React, { Component } from "react";

import Axios from "axios";

export default class Filmes extends Component {
    constructor() {
        super();
        this.state = {
            lancamentos: [],
            id: ""
        }
    }


    //funciona como window.onload
    //serve para carregar algo assim q a tela roda
    componentDidMount() {
        this.listarLancamentos();

    }

    listarLancamentos = () => {
        Axios.get('http://localhost:5000/api/lancamentos', {headers: {Authorization: "Bearer "+ localStorage.getItem("usuario-opflix")}})
            .then(response => {
                console.log(response.data);
                this.setState({ lancamentos: response.data })
            })
            .catch(erro => console.log(erro))

    }

    mudarEstadoId =(event)=>{
        this.setState({id: event.target.value});
        console.log(this.state.id);
    }


    listarPorId = () =>{
        Axios.get('http://localhost:5000/api/lancamentos/'+ this.state.id)
        .then(response => {
            this.setState({lancamentos: response.data})
            console.log(this.state.lancamentos);
        })
        .catch(erro => console.log(erro))
    }

    render() {
        return (
            <section id="principalf">

               <div id="zebrah1">
            <div id="quadrovermelho1">
                <div id="textt">

                    <h1 id="h1adm">[Cinema]</h1>
                </div>
            </div>
            </div>


                {/* <input 
                type="text"
                onChange={this.mudarEstadoId}

                />
                <button
                onClick={this.listarPorId}
                >
                procurar
                </button> */}

                <table id="tabela-lista">
                    <thead>
                        <tr>

                        <th id="titulo">título</th>
                            <th id="sinopse">sinopse</th>
                            <th>categoria</th>
                            <th>tipo</th>
                            <th id="tp">tempo de duração</th>
                            <th id="dt">data de lançamento</th>
                            <th>plataforma</th>
                            <th>classificação</th>
                        </tr>
                    </thead>

                    <tbody id="tabela-lista-corpo">
                        {/* {this.state.lancamentos.idLancamento} */}
                        {this.state.lancamentos.map(element => {
                            if (element.idplataforma === 3) {
                                
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
                            }
                        })}
                    </tbody>
                </table>

                
            </section>
        )
    }
}
