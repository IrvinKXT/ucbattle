import React from 'react';
import '../V.css';

function Alternativa(props){
    return(
        <button className='botao_alternativa' style={{backgroundColor: '#6DF030'}} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Alternativa;