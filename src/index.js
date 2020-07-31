import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/';
import CadastroVideo from './pages/Cadastro/Video'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import cadastroCategoria from './pages/Cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={cadastroCategoria} />
      <Route component={() => (<div>Página 404</div>)} /> {/*Fazer um testizinho de página*/}
    </Switch>
  </BrowserRouter>, 
  document.getElementById('root')
);


