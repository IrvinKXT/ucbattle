import React from 'react';

function Dica(props){
    if(props.usou === true && props.pv <= 2){
    return(
        <div>{props.dic}</div>
    );
    }
}

export default Dica;