import './App.css';
import { Link } from 'react-router-dom';
import React, { /*useEffect, useState */ } from 'react';
//import axios from 'axios';

function MenuPrin(props) {
  //console.log("Props: ", props.v2)
  //const [fases, setFases] = useState([]);

  /*const resetProgress = async () => {
    await axios.put('https://62aa160c371180affbcf1820.mockapi.io/viloes/2', { "id": "2", "desbloqueado": false });
    await axios.put('https://62aa160c371180affbcf1820.mockapi.io/viloes/3', { "id": "3", "desbloqueado": false });
    await axios.put('https://62aa160c371180affbcf1820.mockapi.io/viloes/4', { "id": "4", "desbloqueado": false });
    await axios.put('https://62aa160c371180affbcf1820.mockapi.io/viloes/5', { "id": "5", "desbloqueado": false });
    await window.location.reload();
  }*/

  /*useEffect(() => {
      axios.get('https://62aa160c371180affbcf1820.mockapi.io/viloes')
        .then(res => {
          const fase = res.data;
          setFases(fase);
        })
        .catch(error => console.log(error))
  }, [])*/

  if (props.v5) {
    return (
      <div>
        <h1>
          U.C. Battle
        </h1>

        <div className='fases'>
          <div className='V'>
            <Link to="/v1" tabIndex={-1} className='Link'>
              <button className='botaoV'>V1</button>
            </Link>
            <small>Vilão 1</small>
          </div>
          <div className='V'>
            <Link to="/v2" tabIndex={-1} className='Link'>
              <button className='botaoV'>V2</button>
            </Link>
            <small>Vilão 2</small>
          </div>
          <div className='V'>
            <Link to="/v3" tabIndex={-1} className='Link'>
              <button className='botaoV'>V3</button>
            </Link>
            <small>Vilão 3</small>
          </div>
          <div className='V'>
            <Link to="/v4" tabIndex={-1} className='Link'>
              <button className='botaoV'>V4</button>
            </Link>
            <small>Vilão 4</small>
          </div>
          <div className='V'>
            <Link to="/v5" tabIndex={-1} className='Link'>
              <button className='botaoV'>V5</button>
            </Link>
            <small>Vilão 5</small>
          </div>
        </div>

        <div className='options'>
          <div className='Book' name='Book'>
            <Link to='/book' tabIndex={-1} className='Link'>
              <button className='botaoBook'>Book</button>
            </Link>
            <small>Book</small>
          </div>
          <div className='Treino'>
            <Link to="/treino" tabIndex={-1} className='Link'>
              <button className='botaoTreino'>Treino</button>
            </Link>
            <small>Treino</small>
          </div>
        </div>
        <div className='Botoes--ultimaLinha'>
          <Link to="ucbattle/" tabIndex={-1} className='Link'>
            <button className='BotaoMenuI'>Menu Inicial</button>
          </Link>
          <Link to="/comojogar" tabIndex={-1} className='Link'>
            <button className='BotaoComoJogar'>Como Jogar</button>
          </Link>
          <Link to="/opcoes" tabIndex={-1} className='Link'>
            <button className='BotaoOpcao'>Opções</button>
          </Link>
        </div>

      </div>
    );
  }

  else if (props.v4) {
    return (
      <div>
        <h1>
          U.C. Battle
        </h1>

        <div className='fases'>
          <div className='V'>
            <Link to="/v1" tabIndex={-1} className='Link'>
              <button className='botaoV'>V1</button>
            </Link>
            <small>Vilão 1</small>
          </div>
          <div className='V'>
            <Link to="/v2" tabIndex={-1} className='Link'>
              <button className='botaoV'>V2</button>
            </Link>
            <small>Vilão 2</small>
          </div>
          <div className='V'>
            <Link to="/v3" tabIndex={-1} className='Link'>
              <button className='botaoV'>V3</button>
            </Link>
            <small>Vilão 3</small>
          </div>
          <div className='V'>
            <Link to="/v4" tabIndex={-1} className='Link'>
              <button className='botaoV'>V4</button>
            </Link>
            <small>Vilão 4</small>
          </div>
          <div className='V'>
          <button className='botaoVB'>V5-Bloqueado</button>
          <small>Vilão 5</small>
          </div>
        </div>

        <div className='options'>
          <div className='Book' name='Book'>
            <Link to='/book' tabIndex={-1} className='Link'>
              <button className='botaoBook'>Book</button>
            </Link>
            <small>Book</small>
          </div>
          <div className='Treino'>
            <Link to="/treino" tabIndex={-1} className='Link'>
              <button className='botaoTreino'>Treino</button>
            </Link>
            <small>Treino</small>
          </div>
        </div>
        <div className='Botoes--ultimaLinha'>
          <Link to="ucbattle/" tabIndex={-1} className='Link'>
            <button className='BotaoMenuI'>Menu Inicial</button>
          </Link>
          <Link to="/comojogar" tabIndex={-1} className='Link'>
            <button className='BotaoComoJogar'>Como Jogar</button>
          </Link>
          <Link to="/opcoes" tabIndex={-1} className='Link'>
            <button className='BotaoOpcao'>Opções</button>
          </Link>
        </div>

      </div>
    );
  }

  else if (props.v3) {
    return (
      <div>
        <h1>
          U.C. Battle
        </h1>

        <div className='fases'>
          <div className='V'>
            <Link to="/v1" tabIndex={-1} className='Link'>
              <button className='botaoV'>V1</button>
            </Link>
            <small>Vilão 1</small>
          </div>
          <div className='V'>
            <Link to="/v2" tabIndex={-1} className='Link'>
              <button className='botaoV'>V2</button>
            </Link>
            <small>Vilão 2</small>
          </div>
          <div className='V'>
            <Link to="/v3" tabIndex={-1} className='Link'>
              <button className='botaoV'>V3</button>
            </Link>
            <small>Vilão 3</small>
          </div>
          <div className='V'>
          <button className='botaoVB'>V4-Bloqueado</button>
          <small>Vilão 4</small>
          </div>
          <div className='V'>
          <button className='botaoVB'>V5-Bloqueado</button>
          <small>Vilão 5</small>
          </div>
        </div>

        <div className='options'>
          <div className='Book' name='Book'>
            <Link to='/book' tabIndex={-1} className='Link'>
              <button className='botaoBook'>Book</button>
            </Link>
            <small>Book</small>
          </div>
          <div className='Treino'>
            <Link to="/treino" tabIndex={-1} className='Link'>
              <button className='botaoTreino'>Treino</button>
            </Link>
            <small>Treino</small>
          </div>
        </div>
        <div className='Botoes--ultimaLinha'>
          <Link to="ucbattle/" tabIndex={-1} className='Link'>
            <button className='BotaoMenuI'>Menu Inicial</button>
          </Link>
          <Link to="/comojogar" tabIndex={-1} className='Link'>
            <button className='BotaoComoJogar'>Como Jogar</button>
          </Link>
          <Link to="/opcoes" tabIndex={-1} className='Link'>
            <button className='BotaoOpcao'>Opções</button>
          </Link>
        </div>

      </div>
    );
  }

  else if (props.v2) {
    return (
      <div>
        <h1>
          U.C. Battle
        </h1>

        <div className='fases'>
          <div className='V'>
            <Link to="/v1" tabIndex={-1} className='Link'>
              <button className='botaoV'>V1</button>
            </Link>
            <small>Vilão 1</small>
          </div>
          <div className='V'>
            <Link to="/v2" tabIndex={-1} className='Link'>
              <button className='botaoV'>V2</button>
            </Link>
            <small>Vilão 2</small>
          </div>
          <div className='V'>
          <button className='botaoVB'>V3-Bloqueado</button>
          <small>Vilão 3</small>
          </div>
          <div className='V'>
          <button className='botaoVB'>V4-Bloqueado</button>
          <small>Vilão 4</small>
          </div>
          <div className='V'>
          <button className='botaoVB'>V5-Bloqueado</button>
          <small>Vilão 5</small>
          </div>
        </div>

        <div className='options'>
          <div className='Book' name='Book'>
            <Link to='/book' tabIndex={-1} className='Link'>
              <button className='botaoBook'>Book</button>
            </Link>
            <small>Book</small>
          </div>
          <div className='Treino'>
            <Link to="/treino" tabIndex={-1} className='Link'>
              <button className='botaoTreino'>Treino</button>
            </Link>
            <small>Treino</small>
          </div>
        </div>
        <div className='Botoes--ultimaLinha'>
          <Link to="ucbattle/" tabIndex={-1} className='Link'>
            <button className='BotaoMenuI'>Menu Inicial</button>
          </Link>
          <Link to="/comojogar" tabIndex={-1} className='Link'>
            <button className='BotaoComoJogar'>Como Jogar</button>
          </Link>
          <Link to="/opcoes" tabIndex={-1} className='Link'>
            <button className='BotaoOpcao'>Opções</button>
          </Link>
        </div>

      </div>
    );
  }

  else {
    return (
      <div>
        <h1>
          U.C. Battle
        </h1>

        <div className='fases'>
          <div className='V'>
            <Link to="/v1" tabIndex={-1} className='Link'>
              <button className='botaoV'>V1</button>
            </Link>
            <small>Vilão 1</small>
          </div>
          <div className='V'>
          <button className='botaoVB'>V2-Bloqueado</button>
          <small>Vilão 2</small>
          </div>
          <div className='V'>
          <button className='botaoVB'>V3-Bloqueado</button>
          <small>Vilão 3</small>
          </div>
          <div className='V'>
          <button className='botaoVB'>V4-Bloqueado</button>
          <small>Vilão 4</small>
          </div>
          <div className='V'>
          <button className='botaoVB'>V5-Bloqueado</button>
          <small>Vilão 5</small>
          </div>
        </div>

        <div className='options'>
          <div className='Book' name='Book'>
            <Link to='/book' tabIndex={-1} className='Link'>
              <button className='botaoBook'>Book</button>
            </Link>
            <small>Book</small>
          </div>
          <div className='Treino'>
            <Link to="/treino" tabIndex={-1} className='Link'>
              <button className='botaoTreino'>Treino</button>
            </Link>
            <small>Treino</small>
          </div>
        </div>
        <div className='Botoes--ultimaLinha'>
          <Link to="ucbattle/" tabIndex={-1} className='Link'>
            <button className='BotaoMenuI'>Menu Inicial</button>
          </Link>
          <Link to="/comojogar" tabIndex={-1} className='Link'>
            <button className='BotaoComoJogar'>Como Jogar</button>
          </Link>
          <Link to="/opcoes" tabIndex={-1} className='Link'>
            <button className='BotaoOpcao'>Opções</button>
          </Link>
        </div>

      </div>
    );
  }
}

export default MenuPrin;