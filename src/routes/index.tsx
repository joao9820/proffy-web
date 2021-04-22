import React from 'react';

import {BrowserRouter, Switch ,Route} from 'react-router-dom';

//Rotas que para acessar é necessário estar autenticado
import PrivateRoute from './auth.routes';

import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';
import Signin from '../pages/Signin';

//Funções stateless podem utilizar essa sintaxe
const Routes = () => {

    return (
        //Disponibiliza funções de rotas comuns web, como histórico de página para voltar a navegação por exemplo
        <BrowserRouter>
            {/*Garante que mesmo rotas que possuam paths semelhantes, seja chamada apenas a primeira, por exemplo /app e /app/teste */ }
            <Switch>
                {// Cada página da aplicação será um route
            /* Routes só verifica se na rota tem o path listado abaixo, sendo que o landing 
            '/' estará em todas as chamadas, portanto verificamos com a propriedade exact se é aquela rota*/}
                <Route exact path="/" component={Signin} />
                <PrivateRoute path="/study" component={TeacherList} />
                <PrivateRoute path="/give-classes" component={TeacherForm} />
            </ Switch>
        </BrowserRouter>
    );
    
}

export default Routes;