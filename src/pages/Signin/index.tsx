import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {useAuth} from '../../contexts/auth';

import './styles.css';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';
import Input from '../../components/Input'; 
import Button from '../../components/Button';
 
const Signin: React.FC = () => {

    const [allowEntry, setAllowEntry] = useState(false);

    function handleSaveUsername(username: string) {

        if(username && !allowEntry)
            setAllowEntry(true);
        else if(!username)
            setAllowEntry(false);
            
    }

    return (
        <div id="page-signin">
            <div className="login-background">
                <img src='/intro.png' alt="logo" />
            </div>
            <div className="login-container">
                <div className="login-form">
                    <div>
                        <h1>Fazer Login</h1>
                    </div>
                    
                    <form>
                        <div className="fields-form">
                            <Input name="username" onChange={e => handleSaveUsername(e.target.value)} placeholder="Usuário" style={{margin: 0}}/>
                            <Input name="password" placeholder="Senha" pass style={{margin: 0}}/>
                        </div>
                        <div className="recovery-pass">
                           <div> 
                               <input id="check_remember_me" name="remember_me" type="checkbox" />{' '}
                               <label htmlFor='check_remember_me'>Lembrar-me</label>
                               
                               {/* <small className="remember-me">Lembrar-me</small>  */}
                            </div>
                            <Link to="/" className="link-recovery-pass"><small>Esqueci minha senha</small></Link>
                        </div>
                        <Button name="send" label="Entrar" success={allowEntry} disabled={!allowEntry} />
                    </form>
                    
                    <div className="login-footer">
                        <div>
                            <p>Não tem conta?</p>
                            <Link to="/" className="link-register">Cadastre-se</Link>
                        </div>
                        <div className="login-info">
                            <small>É de graça</small> <img src={purpleHeart} alt="coração roxo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Signin;