import React ,{ Component } from "react";
import { Link } from "react-router-dom";
import "../pgAdm/pgAdm.css";
import Axios from "axios";

export default class adm extends Component{




    render(){
        return(
            <section id="principal">

        <div id="zebrah1">
            <div id="quadrovermelho1">
                <div id="textt">

                    <h1 id="h1adm">[Administração]</h1>
                </div>
            </div>
            </div>

            <div id="zebrah2">
            <div id="quadrobranco">

                <div id="dupla">
               <Link id="link1" to="/lancamentosadm">[Lançamentos]</Link>
               <Link id="link2" to="/categoriaadm">[Categorias]</Link>
               <Link id="link3" to="/">[Lorem Ipsum 1]</Link>
               <Link id="link4" to="/">[Lorem Ipsum 2]</Link>
               <Link id="link5" to="/">[Lorem Ipsum 3]</Link>
               <Link id="link6" to="/">[Lorem Ipsum 4]</Link>
               
               </div>
            </div>
        </div>
            </section>
        )
    }
}
