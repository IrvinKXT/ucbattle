import './Ucbattle.css';
import { Link, /*useNavigate*/ } from 'react-router-dom';
//import React from 'react';
//import React, {/* useEffect,*/ useState } from 'react';
//import axios from 'axios';
//import Aguardar from './components/Aguardar.js'
//import App from './App';
import Heroi from './components/imgs/Aluno.png';
import Mestre from './components/imgs/Mestre.png';

function Ucbattle(props) {
    //const [fases, setFases] = useState([]);
    // const [aguardar, setAguardar] = useState(false);
    //const navigate = useNavigate();

    /*useEffect(() => {
        axios.get('https://62aa160c371180affbcf1820.mockapi.io/viloes')
          .then(res => {
            const fase = res.data;
            setFases(fase);
          })
          .catch(error => console.log(error))
    }, [])*
    /*return(
        <div>
            <App />
        </div>
    );*/

    /*const resetProgress = async () => {
        setAguardar(true);
        await axios.put('https://62aa160c371180affbcf1820.mockapi.io/viloes/2', { "id": "2", "desbloqueado": false });
        await axios.put('https://62aa160c371180affbcf1820.mockapi.io/viloes/3', { "id": "3", "desbloqueado": false });
        await axios.put('https://62aa160c371180affbcf1820.mockapi.io/viloes/4', { "id": "4", "desbloqueado": false });
        await axios.put('https://62aa160c371180affbcf1820.mockapi.io/viloes/5', { "id": "5", "desbloqueado": false });
        navigate("/");
      }*/

    const resetProgress = () => {
        window.location.reload();
    }

    //var h = (window.innerHeight * 80) / 100;

    if (props.v2) {
        return (
            <div className='Ucbattle--Container' >
                <div className='Titulo--Container'>
                    <h1>U.C. Battle</h1>
                </div>
                <div className='Imagens'>
                    <img className='HeroiImg' src={Heroi} alt='' />
                    <img className='MestreImg' src={Mestre} alt='' />
                </div>
                <div className='UcbattleBotoes' >
                    <button className='BotaoZerarProgresso' onClick={() => resetProgress()}>Zerar Progresso</button>
                    <Link to="/" tabIndex={-1} className='Link'>
                        <button className='BotaoJogar'>Jogar</button>
                    </Link>
                </div>
                <div className='Aguardar'>
                    {/* <Aguardar
                        aguardar={aguardar}
            />*/}
                </div>
            </div>
        );
    }
    else {
        return (
            <div className='Ucbattle--Container' >
                <div className='Titulo--Container'>
                    <h1>U.C. Battle</h1>
                </div>
                <div className='Imagens'>
                    <img className='HeroiImg' src={Heroi} alt='' />
                    <img className='MestreImg' src={Mestre} alt='' />
                </div>
                <div className='UcbattleBotoes' >
                    <Link to="/" tabIndex={-1} className='Link'>
                        <button className='BotaoJogar'>Jogar</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Ucbattle;