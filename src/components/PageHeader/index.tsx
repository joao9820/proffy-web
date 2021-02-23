import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import './styles.css';


//interface Define as tipagens de um objeto, props = propertys
interface PageHeaderProps{
    title: string; //obrigatório, para opcional precisa acrescentar ? antes
    description? : string; //propriedade opcional
}


//Componente reutilzável
//Necessário escrever a função como constante para conseguir declarar as propriedades e sua tipagem
//Compenente em Função, tipo do PageHeader
const PageHeader: React.FC<PageHeaderProps> = (props) => {

    return (
        <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
                <img src={backIcon} alt="Voltar"/>
            </Link>
            <img src={logoImg} alt="Proffy" />
        </div>

        <div className="header-content">
            <strong>
                {props.title}
            </strong>

            {/* Equivalente a um if ternário, mas aqui só executa se a primeira condição é verdadeira */}
            {props.description && <p>{props.description}</p>}

            {/* propriedade que exibe o que está dentro do componente, aonde há sua utilização*/}
            {props.children} 
        </div>
    </header>
    );

}

export default PageHeader;