import { React, useState } from 'react';
import './Opcoes.css';
import { Link } from 'react-router-dom';

function Opcoes(props) {
    const [acertarErrar, setAcertarErrar] = useState(props.acertarErrar);
    const [ganharPerder, setGanharPerder] = useState(props.ganharPerder);
    const [narracao, setNarracao] = useState(props.narracao);

    const altera1 = () => {
        setAcertarErrar(!acertarErrar);
        props.alteraAcertarErrar();
    }

    const altera2 = () => {
        setGanharPerder(!ganharPerder);
        props.alteraGanharPerder();
    }

    const altera3 = () => {
        setNarracao(!narracao);
        props.alteraNarracao();
    }

    console.log("Valor do ganhar: ", props.ganharPerder);
    console.log("Valor do acertar: ", props.acertarErrar);

    var h = (window.innerHeight * 80) / 100;

    return (
        <div className='Opcoes--Max'>
            <h1>Opções</h1>
            <div className='Opcoes--Container' style={{ height: h }}>
                <div className='Opc' style={{ height: h }}>
                    <div className='acertoOUerro'>
                        <p>Sons de acerto/erro: </p>
                        <button className='Botao_acertoOUerro' onClick={() => altera1()} style={{ backgroundColor: acertarErrar ? "#4791FF" : "#DEDEDE" }}>{acertarErrar ? "Ligado" : "Desligado"}</button>
                    </div>
                    <div className='ganharOUperder'>
                        <p>Músicas de vitória/derrota: </p>
                        <button className='Botao_ganharOUperder' onClick={() => altera2()} style={{ backgroundColor: ganharPerder ? "#4791FF" : "#DEDEDE" }}>{ganharPerder ? "Ligado" : "Desligado"}</button>
                    </div>
                    <div className='Narracao'>
                        <p>Narração das perguntas, alternativas, dicas e book: </p>
                        <button className='Botao_Narracao' onClick={() => altera3()} style={{ backgroundColor: narracao ? "#4791FF" : "#DEDEDE" }}>{narracao ? "Ligado" : "Desligado"}</button>
                    </div>
                </div>
                <div className='VoltarOpc'>
                    <Link to="/" tabIndex={-1} className='Link'>
                        <button className='Botao_Voltar'>Voltar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Opcoes;