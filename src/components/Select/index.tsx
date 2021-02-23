import React, {SelectHTMLAttributes} from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> { //elemento global

    name: string
    label: string;
    options: Array<{ /* Tipo do array, e as propriedades dos objetos que existem nele */
        value: string;
        label: string;
    }>;

}

//..rest é o rest operator, que é tudo aquilo além dos parâmetros já designados
const Select: React.FC<SelectProps> = ({label, name, options, ...rest }) => {
    return (
/* Quando retornamos html com estrutura de repetição no react devemos passar no primeiro elemento dentro do map
a propriedade key, que é um valor único que existe entre todas as opções. Isso ajuda
o react a identificar os elementos em tela para futuras alterações, se option tivesse algum child não seria necessário colocar nos childrens */
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} {...rest}>
                {/* Com o hidden ele não fica disponivel na listagem */}
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map(option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>

    );

}


export default Select;