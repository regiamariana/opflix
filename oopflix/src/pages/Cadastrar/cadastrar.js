import React,{ Component } from "react";

import Axios from "axios";
import "../Cadastrar/cadastrar.css";
export default class Cadastrar extends Component{
    constructor(){
        super();
        this.state={
            nome: "",
            email: "",
            senha: "",
            telefone: "",
        }
    }

    mudarEstadoNome = (event) =>{
        this.setState({nome: event. target.value})
    }
    mudarEstadoEmail = (event) =>{
        this.setState({email: event. target.value})
    }
    mudarEstadoSenha = (event) =>{
        this.setState({senha: event. target.value})
    }
    mudarEstadoTelefone = (event) =>{
        this.setState({telefone: event. target.value})
    }

    efetuarCadastro = (event) =>{
        event.preventDefault();
        Axios.post("http://localhost:5000/api/usuario",{
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha,
            telefone: this.state.telefone,
            idtipousuario: 2
           
        })
        .then(data => {
            if(data.status === 200){
                this.props.history.push('/')
            }else{
                console.log("erro")
            }
        })
        .catch(erro =>{
            this.setState({erro: "ops, tente novamente"});
            console.log(erro);
        })
    }

    render(){
        return(
            <section id="principalcadastro">
                <div id="zebra">
                <div id="branquinho">
                    <div id="text">

                        <h1 id="title">[Fazer Login]</h1>
                    </div>
                </div>
            </div>

            <div id="zebrac">
                <div id="branquinhoc">
                
                <form onSubmit={this.efetuarCadastro}>
                    <div>

                    <input 
                     id="ac"
                    type="text"
                    placeholder="insira seu nome completo"
                    onChange={this.mudarEstadoNome}
                    value={this.state.nome}
                    />
                    </div>
                    <div >
                    <input 
                    id="bc"
                    type="text"
                    placeholder="insira seu email"
                    onChange={this.mudarEstadoEmail}
                    value={this.state.email}
                    />
                    </div>
                    <div >
                    <input 
                    id="cc"
                    type="password"
                    placeholder="insira sua senha"
                    onChange={this.mudarEstadoSenha}
                    value={this.state.senha}
                    />
                    </div>
                    <div >
                    <input
                    id="dc" 
                    type="text"
                    placeholder="insira seu telefone"
                    onChange={this.mudarEstadoTelefone}
                    value={this.state.telefone}
                    />
                    </div>
                    
                    
                    
                    
                    <button id="botonesc">
                        Cadastrar
                    </button>
                    

                    <p>
                        {this.state.erro}
                    </p>
                </form>
                </div>
            </div>

            </section>
        )
    }
}