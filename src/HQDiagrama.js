import React from 'react';
import './Book.css';
import { Link } from 'react-router-dom';
import HQDiagramaImg from './components/imgs/HQDiagrama.png';

function HQDiagrama(){
    return (
        <div className='HQMax'>
            <h1>Diagrama de Casos de Uso</h1>
            <div className='HQ--Container'>
                <Link to='/book' tabIndex={-1} className='Link'>
                    <button className='BotaoVoltar'>Voltar</button>
                </Link>
                <img className='HQ' src={HQDiagramaImg} alt='TEM QUE FAZER AINDA' />
            </div>
        </div>
    );
}

export default HQDiagrama;