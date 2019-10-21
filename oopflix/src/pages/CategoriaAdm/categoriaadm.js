import React, { Component } from "react";
import Axios from "axios";

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
        Axios.get("http://localhost:5000/api/Categoria")
        .then(response => {
            console.log(response.data);
            this.setState({categorias: response.data})
        })
        .catch(erro => console.log(erro))
    }


    render(){
        return(
            <section>
                <table>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Categoria</th>
                        {/* <th>lancamentos</th> */}
                        </tr>
                        
                    </thead>

                    <tbody>
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
            </section>
        )
    }
}

