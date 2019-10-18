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

            <h1>Tela de login</h1>

            <form onSubmit={this.efetuarLogin}>
                <input 
                type="text"
                placeholder="insira seu email"
                onChange={this.mudarEstadoEmail}
                value={this.state.email}
                />
                <input 
                type="password"
                placeholder="insira sua senha"
                onChange={this.mudarEstadoSenha}
                value={this.state.senha}
                />

                <button>
                    Login
                </button>

                <p>
                    {this.state.erro}
                </p>
            </form>


            </section>


        );


    }
}