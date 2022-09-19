import {React, useState} from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Opcoes(props){
    const [acertarErrar, setAcertarErrar] = useState(props.acertarErrar);
    const [ganharPerder, setGanharPerder] = useState(props.ganharPerder);

    const altera1 = () => {
        setAcertarErrar(!acertarErrar);
        props.alteraAcertarErrar();
    }

    const altera2 = () => {
        setGanharPerder(!ganharPerder);
        props.alteraGanharPerder();
    }

    console.log("Valor do ganhar: ", props.ganharPerder);
    console.log("Valor do acertar: ", props.acertarErrar);

    return(
        <div className='Opcoes--Container'>
            <div className='acertoOUerro'>
                <p>Sons de acerto/erro: </p>
                <button className='Botao_acertoOUerro' onClick={() => altera1()}>{acertarErrar ? "Ligado" : "Desligado"}</button>
            </div>
            <div className='ganharOUperder'>
                <p>Músicas de vitória/derrota: </p>
                <button className='Botao_ganharOUperder' onClick={() => altera2()}>{ganharPerder ? "Ligado" : "Desligado"}</button>
            </div>
            <div className='Voltar'>
                <Link to="/" tabIndex={-1} className='Link'>
                    <button className='Botao_Voltar'>Voltar</button>
                </Link>
            </div>
        </div>
    )
}

export default Opcoes;