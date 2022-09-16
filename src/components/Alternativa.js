import React from 'react';
import '../V.css';

function Alternativa(props) {
    if (props.vwin || props.hwin) {
        return (
            <button className='botao_alternativa' style={{ backgroundColor: '#6DF030' }} onClick={props.onClick} tabIndex={-1}>
                {props.value}
            </button>
        );
    }
    return (
        <button className='botao_alternativa' style={{ backgroundColor: '#6DF030' }} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Alternativa;