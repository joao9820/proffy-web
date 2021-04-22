import React, {InputHTMLAttributes, useState} from 'react';

import './styles.css';
import see from '../../assets/images/icons/see.svg';
import hide from '../../assets/images/icons/hide.svg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { //elemento global

    name: string
    label?: string;
    placeholder?: string;
    pass?: boolean;
}

//..rest é o rest operator, que é tudo aquilo além dos parâmetros já designados
const Input: React.FC<InputProps> = ({label, name, placeholder, pass, ...rest }) => {

    const [seePass, setSeePass] = useState(false);

    function handleSeePassword(){
        setSeePass(!seePass);
    }

    return (

        <div className="input-block" {...rest}>
            {label && (<label htmlFor={name}>{label}</label>)}
            
            <input type={pass && !seePass ? "password" : "text"} placeholder={placeholder} id={name} name={name}/>

            {pass && (<img src={!seePass ? see : hide} alt="Ver senha" onClick={(e) => {e.type = "text" ; handleSeePassword()}}/>)}            
            
            
            
        </div>

    );

}

export default Input;