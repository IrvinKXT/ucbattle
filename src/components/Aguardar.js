import React from 'react';
import '../App.css';

function Aguardar(props) {
    if (props.aguardar) {
        return (
            <div>
                <h2>Aguarde alguns instantes...</h2>
            </div>
        );
    }
}

export default Aguardar;