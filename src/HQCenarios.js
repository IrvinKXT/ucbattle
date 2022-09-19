import React from 'react';
import './Book.css';
import { Link } from 'react-router-dom';
import HQCenariosImg from './components/imgs/HQCenarios.png';

function HQCenarios(){
    var h = (window.innerHeight * 10) / 100;
    return (
        <div className='HQMax' style={{height: h}}>
            <h1>Cenários dos Casos de Uso</h1>
            <div className='HQ--Container'>
            <img className='HQ' src={HQCenariosImg} alt='Na imagem há uma história em quadrinhos que possui 6 quadros com os personagens Mestre e Discípulo dialogando sobre os Cenários de um Caso de Uso. Primeiro quadro, Discípulo diz: "Mestre o senhor poderia falar sobre os cenários de um caso de uso?", Mestre diz: “Claro que sim! Os cenários são diferentes formas que o mesmo caso de uso pode acontecer”. Segundo quadro, Mestre diz: “Pense por exemplo que três pessoas desejam entrar numa festa. A primeira apresenta seu convite, o segurança avalia e a permite entrar.”. Terceiro quadro, Mestre diz: “A segunda não tinha convite, então comprou um ali na hora e foi permitida de entrar. Já a terceira apresentou um convite falso, o segurança percebeu, não a permitiu entrar e a expulsou.”. Quarto quadro, Discípulo diz: “Ah, acho que entendi! Os cenários mostram o ator realizando as interações em busca de atingir seu objetivo. Porém nem sempre as coisas acontecem da mesma forma e às vezes pode até dar errado!”. Quinto quadro, Mestre diz: “Isso mesmo! Além disso vale ressaltar que sempre temos um fluxo principal que é o cenário onde tudo ocorre como esperado. E também temos os fluxos alternativos que mostram diferentes formas daquilo acontecer.”. Sexto quadro: Discípulo diz: “Obrigado Mestre!”, Mestre diz: “Sem problemas, estou à disposição!”. Fim.' />
            </div>
                <Link to='/book' tabIndex={-1} className='Link'>
                    <button className='BotaoVoltar'>Voltar</button>
                </Link>
            
        </div>
    );
}

export default HQCenarios;