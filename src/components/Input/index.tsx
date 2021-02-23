import React, {InputHTMLAttributes} from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { //elemento global

    name: string
    label: string;

}

//..rest é o rest operator, que é tudo aquilo além dos parâmetros já designados
const Input: React.FC<InputProps> = ({label, name, ...rest }) => {
    return (

        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest}/>
        </div>

    );

}


export default Input;