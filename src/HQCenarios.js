import React, { useState } from 'react';
import './Book.css';
import { Link } from 'react-router-dom';
import HQ1 from './components/imgs/HQCenarios/Slide3.jpg';
import HQ2 from './components/imgs/HQCenarios/Slide4.jpg';
import HQ3 from './components/imgs/HQCenarios/Slide5.jpg';
import HQ4 from './components/imgs/HQCenarios/Slide6.jpg';
import HQ5 from './components/imgs/HQCenarios/Slide7.jpg';
import HQ6 from './components/imgs/HQCenarios/Slide8.jpg';
import Q1 from './components/audios/Cenarios1.m4a';
import Q2 from './components/audios/Cenarios2.m4a';
import Q3 from './components/audios/Cenarios3.m4a';
import Q4 from './components/audios/Cenarios4.m4a';
import Q5 from './components/audios/Cenarios5.m4a';
import Q6 from './components/audios/Cenarios6.m4a';

function HQCenarios(props) {
    const [quadrinho, setQuadrinho] = useState(0);
    const [q1] = useState({ audio: new Audio(Q1) });
    const [q2] = useState({ audio: new Audio(Q2) });
    const [q3] = useState({ audio: new Audio(Q3) });
    const [q4] = useState({ audio: new Audio(Q4) });
    const [q5] = useState({ audio: new Audio(Q5) });
    const [q6] = useState({ audio: new Audio(Q6) });
    var h = (window.innerHeight * 80) / 100;

    const narracao = [
        q1,
        q2,
        q3,
        q4,
        q5,
        q6
    ];

    if (props.narracao) {
        narracao[quadrinho].audio.play();
    }

    const pausar = () => {
        narracao[quadrinho].audio.pause();
        narracao[quadrinho].audio.currentTime = 0;
    }

    const Anterior = () => {
        if (quadrinho > 0) {
            narracao[quadrinho].audio.pause();
            narracao[quadrinho].audio.currentTime = 0;
            setQuadrinho(quadrinho - 1);
        }
    }

    const Proximo = () => {
        if (quadrinho < Quadrinhos.length - 1) {
            narracao[quadrinho].audio.pause();
            narracao[quadrinho].audio.currentTime = 0;
            setQuadrinho(quadrinho + 1);
        }
    }

    const BotaoAnterior = () => {
        if (quadrinho > 0) {
            return (
                <button className='BotaoAnterior' onClick={() => Anterior()}>Anterior</button>
            )
        }
        else {
            return (
                <div>{""}</div>
            )
        }
    }

    const BotaoProximo = () => {
        if (quadrinho < Quadrinhos.length - 1) {
            return (
                <button className='BotaoProximo' onClick={() => Proximo()}>Pr??ximo</button>
            )
        }
        else {
            return (
                <div>{""}</div>
            )
        }
    }

    return (
        <div className='HQMax'>
            <h1>Cen??rios dos Casos de Uso</h1>
            <div className='HQ--Container'>
                <div className='HQ' style={{ height: h }}>
                    {BotaoAnterior()}
                    <img className='HQimg' src={Quadrinhos[quadrinho]} alt='Na imagem h?? uma hist??ria em quadrinhos que possui 6 quadros com os personagens Mestre e Disc??pulo dialogando sobre os Cen??rios de um Caso de Uso. Primeiro quadro, Disc??pulo diz: "Mestre o senhor poderia falar sobre os cen??rios de um caso de uso?", Mestre diz: ???Claro que sim! Os cen??rios s??o diferentes formas que o mesmo caso de uso pode acontecer???. Segundo quadro, Mestre diz: ???Pense por exemplo que tr??s pessoas desejam entrar numa festa. A primeira apresenta seu convite, o seguran??a avalia e a permite entrar.???. Terceiro quadro, Mestre diz: ???A segunda n??o tinha convite, ent??o comprou um ali na hora e foi permitida de entrar. J?? a terceira apresentou um convite falso, o seguran??a percebeu, n??o a permitiu entrar e a expulsou.???. Quarto quadro, Disc??pulo diz: ???Ah, acho que entendi! Os cen??rios mostram o ator realizando as intera????es em busca de atingir seu objetivo. Por??m nem sempre as coisas acontecem da mesma forma e ??s vezes pode at?? dar errado!???. Quinto quadro, Mestre diz: ???Isso mesmo! Al??m disso vale ressaltar que sempre temos um fluxo principal que ?? o cen??rio onde tudo ocorre como esperado. E tamb??m temos os fluxos alternativos que mostram diferentes formas daquilo acontecer.???. Sexto quadro: Disc??pulo diz: ???Obrigado Mestre!???, Mestre diz: ???Sem problemas, estou ?? disposi????o!???. Fim.' />
                    {BotaoProximo()}
                </div>
                <div className='BotaoVoltar--Container'>
                    <Link to='/book' tabIndex={-1} className='Link'>
                        <button className='BotaoVoltar' onClick={() => pausar()}>Voltar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

const Quadrinhos = [
    HQ1,
    HQ2,
    HQ3,
    HQ4,
    HQ5,
    HQ6
]

export default HQCenarios;