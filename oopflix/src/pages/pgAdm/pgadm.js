import React ,{ Component } from "react";
import { Link } from "react-router-dom";
import "../pgAdm/pgAdm.css";
import Axios from "axios";

export default class adm extends Component{




    render(){
        return(
            <section>

                <h1>Página do adm</h1>
               <Link to="/lancamentosadm">Lançamentos</Link>
               <Link to="/categoriaadm">Categorias</Link>
            </section>
        )
    }
}
