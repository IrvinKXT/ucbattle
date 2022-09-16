import './App.css';
import { Link, useNavigate } from 'react-router-dom';
//import React from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Aguardar from './components/Aguardar.js'
//import App from './App';

function Ucbattle(){
    const [fases, setFases] = useState([]);
    const [aguardar, setAguardar] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://62aa160c371180affbcf1820.mockapi.io/viloes')
          .then(res => {
            const fase = res.data;
            setFases(fase);
          })
          .catch(error => console.log(error))
    }, [])
    /*return(
        <div>
            <App />
        </div>
    );*/

    const resetProgress = async () => {
        setAguardar(true);
        await axios.put('https://62aa160c371180affbcf1820.mockapi.io/viloes/2', { "id": "2", "desbloqueado": false });
        await axios.put('https://62aa160c371180affbcf1820.mockapi.io/viloes/3', { "id": "3", "desbloqueado": false });
        await axios.put('https://62aa160c371180affbcf1820.mockapi.io/viloes/4', { "id": "4", "desbloqueado": false });
        await axios.put('https://62aa160c371180affbcf1820.mockapi.io/viloes/5', { "id": "5", "desbloqueado": false });
        navigate("/");
      }

    if(fases.length > 0){
        if(fases[1].desbloqueado){
            return(
                <div className='Ucbattle--Container'>
                    <div className='Titulo--Container'>
                        <h1>Ucbattle</h1>
                    </div>
                    <div className='UcbattleBotoes' style={{display: "flex", alignItens: "center", justifyContent: "center"}}>
                        <button className='NovoJogoBotao' onClick={() => resetProgress()}>Novo Jogo</button>
                        <Link to="/" tabIndex={-1} className='Link'>
                            <button className='ContinuarBotao'>Continuar</button>
                        </Link>
                    </div>
                    <div className='Aguardar'>
                        <Aguardar
                        aguardar={aguardar}
                         />
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className='Ucbattle--Container'>
                    <div className='Titulo--Container'>
                        <h1>Ucbattle</h1>
                    </div>
                    <div className='UcbattleBotoes' style={{display: "flex", alignItens: "center", justifyContent: "center"}}>
                        <Link to="/" tabIndex={-1} className='Link'>
                            <button className='NovoJogoBotao'>Novo Jogo</button>
                        </Link>
                    </div>
                </div>
            );
        }
    }
}

export default Ucbattle;