import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes(){

    return(
    
        // Cada página da aplicação será um route
         /* Routes só verifica se na rota tem o path listado abaixo, sendo que o landing 
         '/' estará em todas as chamadas, portanto verificamos com a propriedade exact se é aquela rota*/
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
            
        </BrowserRouter>
    )


}

export default Routes; 