import React from 'react';
import './Book.css';
import { Link } from 'react-router-dom';
import HQInExImg from './components/imgs/HQInEx.png';

function HQInEx(){
    return (
        <div className='HQMax'>
            <h1>Include e Extend</h1>
            <div className='HQ--Container'>
                <Link to='/book' tabIndex={-1} className='Link'>
                    <button className='BotaoVoltar'>Voltar</button>
                </Link>
                <img className='HQ' src={HQInExImg} alt='TEM QUE FAZER AINDA' />
            </div>
        </div>
    );
}

export default HQInEx;