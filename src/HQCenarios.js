import React from 'react';
import './Book.css';
import { Link } from 'react-router-dom';
import HQCenariosImg from './components/imgs/HQCenarios.png';

function HQCenarios(){
    return (
        <div className='HQMax'>
            <h1>Cenários dos Casos de Uso</h1>
            <div className='HQ--Container'>
                <Link to='/book' tabIndex={-1} className='Link'>
                    <button className='BotaoVoltar'>Voltar</button>
                </Link>
                <img className='HQ' src={HQCenariosImg} alt='TEM QUE FAZER AINDA' />
            </div>
        </div>
    );
}

export default HQCenarios;