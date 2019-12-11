import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/App';
import Comecar from './pages/Comecar/comecar';
import Filmes from './pages/Filmes/filmes';
import Series from './pages/Series/series';
import Cinema from './pages/Cinema/cinema';
import Netflix from './pages/Netflix/netflix';
import Login from './pages/Login/login';
import Cadastrar from './pages/Cadastrar/cadastrar';
import Adm from './pages/pgAdm/pgadm';
import Usuario from './pages/pgUsuario/pgusuario';
import LancamentosAdm from './pages/LancamentosAdm/LancamentosAdm';
import CategoriaAdm from './pages/CategoriaAdm/categoriaadm';
import Mapa from './pages/Mapa/mapa';

import { Route, Link, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import * as serviceWorker from './serviceWorker';

const RotaPrivada = ({component: Component}) =>(
    <Route
    render={ props =>
        localStorage.getItem("usuario-opflix") !== null ?
        (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: "/login", state: {from: props.location}}}
            />
        )
    }
     />
)

const routing =(
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={Login} />
                {/* <Route path='/comecar' component={Comecar} /> */}
                <RotaPrivada path='/filmes' component={Filmes} />
                <Route path='/series' component={Series} />
                <Route path='/principal' component={App} />
                <Route path='/cadastrar' component={Cadastrar} />
                <RotaPrivada path='/comecar' component={Comecar} />
                <Route path='/cinema' component={Cinema}/>
                <Route path='/netflix' component={Netflix}/>
                <Route path='/adm' component={Adm} />
                <Route path='/lancamentosadm' component={LancamentosAdm} />
                <Route path='/categoriaadm' component={CategoriaAdm} />
                <Route path='/mapa' component={Mapa} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
