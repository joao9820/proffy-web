import React from 'react';
import {Redirect, Route, RouteProps} from 'react-router-dom';
import { useAuth } from '../contexts/auth';

//Component é a mesma prop component porém em Maiúsculo, para poder utilizar realmente como componente
const AuthRoutes: React.FC<RouteProps> = ({component: Component, ...rest}) => {

    const {user} = useAuth();

    return(

        //Redefinimos o método render do Componente Router para renderizar nosso componente utilizando as props do render ou o nosso redirect para a página de login
        //A prop state do objeto recebido em to do Redirect, garante que o usuário não perca o seu histórico de navegação após ser redirecionado
            <Route 
                {...rest}
                render={props => user && Component ? <Component {...props} /> : <Redirect to={{pathname: "/", state: {from: props.location}}} />  } 
                path="/login" />   
    )


}

export default AuthRoutes; 