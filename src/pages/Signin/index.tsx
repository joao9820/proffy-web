import React, { useContext } from 'react';
import {useAuth} from '../../contexts/auth';

 
const Signin: React.FC = () => {

      //Ler Informações que está dentro de um contexto
   const {signed, user, signIn} = useAuth();

   //ao mudar o retorno que o context da aos componentes, que nele estão, todos são atualizados novamente, como uma dependência do contexto

   function handleSignin() {
       
       signIn();

   }

    return (<div>
        <button onClick={handleSignin}>Login</button>
    </div>)
};

export default Signin;