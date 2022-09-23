import React from 'react';
import './Book.css';
import { Link } from 'react-router-dom';

function Book(){
    var h = (window.innerHeight * 32.8) / 100;
    return (
        <div className='Book'>
            <h1>Escolha uma história para ler</h1>
            <div className='HQOpcoes--Container' style={{height: h}}>
                <div className='OpRow1'>
                    <Link to='/hqcenarios' tabIndex={-1} className='Link'>
                        <button className='BotaoOpcoes'>Cenarios</button>
                    </Link>
                    <Link to='/hqdiagrama' tabIndex={-1} className='Link'>
                        <button className='BotaoOpcoes'>Diagrama</button>
                    </Link>
                </div>
                <div className='OpRow2'>
                    <Link to='/hqgeneralizacao' tabIndex={-1} className='Link'>
                        <button className='BotaoOpcoes'>Generalização</button>
                    </Link>
                    <Link to='/hqinex' tabIndex={-1} className='Link'>
                        <button className='BotaoOpcoes'>Include e Extend</button>
                    </Link>
                </div>
                <div className='Voltar'>
                    <Link to="/ucbattle/" tabIndex={-1} className='Link'>
                        <button className='BotaoVoltarBook'>Voltar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Book;