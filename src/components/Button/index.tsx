import React, { ButtonHTMLAttributes } from "react";

import './styles.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: string;
    name: string;
    label: string;
    width?: number | string; 
    success?: boolean;
}


const Button: React.FC<Props> = ({color, name, label, width = '100%', success = true, ...rest}) : any => {
   return (<button className={success ? 'button-success' : ''} style={{width: width}} name={name}  {...rest}>{label}</button>)
}

export default Button;