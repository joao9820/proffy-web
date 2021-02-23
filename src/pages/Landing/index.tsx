import React, { useState, useEffect } from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';

import giveClassesIcon from '../../assets/images/icons/give-classes.svg';

import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

//Com esse componente trocamos o tradicional a por Link e href por to
//Isso faz com que as páginas não sejam carregadas por completo
import {Link} from 'react-router-dom';

//importações pessoais, devem ser precedidas ./, todos aqueles que não estão em node modules
import './styles.css'; //somente a string o react interpretaria como pacote instalado no projeto via npm por exemplo
import api from '../../services/api';

/* class é uma palavra reservada do JS então o react permite nas tags html utilizar
className */

function Landing(){

    //Sempre que uma informação for mantida pelo backend será um estado
    //Inicia como 0 porque até buscar o valor das conexões pela api precisamos exibir algo
    const [totalConnections, setTotalConnections] = useState(0); 

    //Chama a função passada no 1ª param quando a variável do 2º param for alterada
    useEffect(() => {
        api.get('connections').then(response => {
           const {total} = response.data; //total é o objeto dentro de data que retornamos como objeto para respoonse
        
            setTotalConnections(total);
        
        })
    }, []); //Quando precisamos que a função execute apenas ao exibir o elemento em tela na primeira vez, deixamos o array vazio

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                
                
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="Plataforma de estudos" 
            className="hero-image"/>

                <div className="buttons-container">  
                    <Link to="/study" className="study" >

                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes" >

                        <img src={giveClassesIcon} alt="Dar aulas"/>
                        Dar aulas
                    </Link>
                </div>
                
                <span className="total-connections">
                        Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>

            </div>
        </div>
    )

}

export default Landing;