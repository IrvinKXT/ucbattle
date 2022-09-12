import React from 'react';
import './Book.css';
import { Link } from 'react-router-dom';
import HQGeneralizacaoImg from './components/imgs/HQGeneralizacao.png';

function HQGeneralizacao(){
    return (
        <div className='HQMax'>
            <h1>Generalização</h1>
            <div className='HQ--Container'>
                <Link to='/book' tabIndex={-1} className='Link'>
                    <button className='BotaoVoltar'>Voltar</button>
                </Link>
                <img className='HQ' src={HQGeneralizacaoImg} alt='TEM QUE FAZER AINDA' />
            </div>
        </div>
    );
}

export default HQGeneralizacao;