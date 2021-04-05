import React, {createContext, useState, useContext} from 'react';
import api from '../services/api';
import * as auth from '../services/auth';

interface User {
    email: string;
    name: string;
}

interface AuthContextData {
    signed: boolean;
    user: User | null; //Para evitar manutenções desnecessárias, é possível estabelecer um tipo objeto genérico
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {

    const [user, setUser] = useState<User | null>(() => {

        const user = localStorage.getItem("@Proffy:user");
        const token = localStorage.getItem("@Proffy:token");

        if(!user || !token)
            return null;

        //Todas as requisições conterão por padrão o token de autorização
        api.defaults.headers.authorization = `Bearer ${token}`;

        //Converte a string em um objeto JSON
        return JSON.parse(user);

    });

    async function signIn() {

        //Chamada a rota api para realizar login
        const {token, user} = await auth.signIn();

        localStorage.setItem("@Proffy:user", JSON.stringify(user));
        localStorage.setItem("@Proffy:token", token);

        api.defaults.headers.authorization = `Bearer ${token}`;

        setUser(user);

    }

    function signOut() {

        localStorage.removeItem("@Proffy:user");
        localStorage.removeItem("@Proffy:token");

        setUser(null);
    }

    /*os dois pontos de exclamação, transforma nosso objeto em um booleano (!!)
    para pasar o valor para signed, poderia ser Boolean(user) também*/

    return (
    <AuthContext.Provider value={{signed: !!user, user, signIn, signOut }}>
        {children}
    </AuthContext.Provider>);
};

export function useAuth(){

    return useContext(AuthContext);

}