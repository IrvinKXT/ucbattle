import './App.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Correct from './components/correct.mp3';

function Ucbattle(){
    const audio = new Audio(Correct);

    const start = () => {
        audio.play();
    }
    return(
        <div className='Ucbattle--Container'>
            <div className='Titulo--Container'>
                <h1>Ucbattle</h1>
            </div>
            <div className='UcbattleBotoes' style={{display: "flex", alignItens: "center", justifyContent: "center"}}>
                <button className='NovoJogoBotao'>Novo Jogo</button>
                <button className='ContinuarBotao' onClick={start}>Continuar</button>
            </div>
        </div>
    );
}

export default Ucbattle;