import React, {TextareaHTMLAttributes} from 'react';

import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { //elemento global

    name: string
    label: string;

}

//..rest é o rest operator, que é tudo aquilo além dos parâmetros já designados
const Textarea: React.FC<TextareaProps> = ({label, name, ...rest }) => {
    return (

        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest}/>
        </div>

    );

}


export default Textarea;