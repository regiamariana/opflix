import React,{ Component } from "react";
import "../Login/login.css"
import {ParseJwt} from "../../services/auth";
import Axios from "axios";

export default class Login extends Component{
    constructor(){
        super();
        this.state={
            email: "",
            senha: "",
            erro: ""

        }
    }

    mudarEstadoEmail = (event) =>{
        this.setState({email: event.target.value})
    }

    mudarEstadoSenha = (event) =>{
        this.setState({senha: event.target.value})
    }

    efetuarLogin = (event) =>{
        event.preventDefault();

        Axios.post("http://localhost:5000/api/Login",{
            email: this.state.email,
            senha: this.state.senha
        })
        .then(data => {
            if(data.status === 200){
                localStorage.setItem("usuario-opflix", data.data.token);
                // parsetjwt
                // que voce pegue as informacoes de dentro do token -


                if (ParseJwt().permissao === 'ADM') {
                    this.props.history.push('/adm')
                }else{
                    this.props.history.push('/principal')
                }

                console.log(ParseJwt());
                
            }else{
                console.log("erro")
            }
        })
        .catch(erro =>{
            this.setState({erro: "usuario ou senha inválido"});
            console.log(erro);
        })

    }

    render(){
        return(
            
            <section id="mare">
                <main>

            <div id="zebra">
                <div id="branquinho">
                    <div id="text">

                        <h1 id="title">[Fazer Login]</h1>
                    </div>
                </div>
            </div>


            <div id="zebra2">
                <div id="branquinho2">

                    <form onSubmit={this.efetuarLogin}>
                        <div id="cinzinha1">
                                <input 
                                type="text"
                                placeholder="insira seu email"
                                id="input1"
                                onChange={this.mudarEstadoEmail}
                                value={this.state.email}
                                />
                        </div>
                           <div id="cinzinha2">
                                <input 
                                id="input2"
                                type="password"
                                placeholder="insira sua senha"
                                onChange={this.mudarEstadoSenha}
                                value={this.state.senha}
                                />
                           </div>
                            
                           
                           <button id="botones">
                            Login
                            </button>

                           
                            
            
                             <p>
                                {this.state.erro}
                            </p> 
                        </form>
                </div>
            </div>
                </main>

            
            </section>
        );


    }
}