import React, { Component } from "react";
import Axios from "axios";
import "../CategoriaAdm/categoria.css"

export default class Categorias extends Component{
    constructor(){
        super();
        this.state = {
            categorias: [],
        }
    }


    componentDidMount(){
        this.listarCategorias();
    }

    listarCategorias = () =>{
        Axios.get("http://192.168.5.123:5000/api/Categoria")
        .then(response => {
            console.log(response.data);
            this.setState({categorias: response.data})
        })
        .catch(erro => console.log(erro))
    }


    render(){
        return(
            <section id="principalcc">

            <div id="zebrah1">
            <div id="quadrovermelhog">
                <div id="textt">

                    <h1 id="h1adm">[Gestão de Categorias]</h1>
                </div>
            </div>
            </div>
            <div id="zebrah">
            <table id="table">
                    <thead>
                        <tr>
                        <th id="aigabi">#</th>
                        <th id="soquemviveu">Categoria</th>
                        {/* <th>lancamentos</th> */}
                        </tr>
                        
                    </thead>

                    <tbody >
                        {this.state.categorias.map(element => {
                            return(
                                <tr key={element.idcategoria}>
                                    <td>{element.idcategoria}</td>
                                    <td>{element.categoria1}</td>
                                    {/* <td>{element.lancamentos}</td> */}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
                
            </section>
        )
    }
}

