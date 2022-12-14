import React, { useState } from 'react';
import './Book.css';
import { Link } from 'react-router-dom';
import HQ1 from './components/imgs/HQGeneralizacao/Slide15.jpg';
import HQ2 from './components/imgs/HQGeneralizacao/Slide16.jpg';
import HQ3 from './components/imgs/HQGeneralizacao/Slide17.jpg';
import HQ4 from './components/imgs/HQGeneralizacao/Slide18.jpg';
import HQ5 from './components/imgs/HQGeneralizacao/Slide19.jpg';
import HQ6 from './components/imgs/HQGeneralizacao/Slide20.jpg';
import Q1 from './components/audios/Generalizacao1.m4a';
import Q2 from './components/audios/Generalizacao2.m4a';
import Q3 from './components/audios/Generalizacao3.m4a';
import Q4 from './components/audios/Generalizacao4.m4a';
import Q5 from './components/audios/Generalizacao5.m4a';
import Q6 from './components/audios/Generalizacao6.m4a';

function HQGeneralizacao(props) {
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
        if(quadrinho > 0){
            narracao[quadrinho].audio.pause();
            narracao[quadrinho].audio.currentTime = 0;
            setQuadrinho(quadrinho - 1);
        }
    }

    const Proximo = () => {
        if(quadrinho < Quadrinhos.length - 1){
            narracao[quadrinho].audio.pause();
            narracao[quadrinho].audio.currentTime = 0;
            setQuadrinho(quadrinho + 1);
        }
    }

    const BotaoAnterior = () => {
        if(quadrinho > 0){
            return(
                <button className='BotaoAnterior' onClick={() => Anterior()}>Anterior</button>
            )
        }
        else{
            return(
                <div>{""}</div>
            )
        }
    }

    const BotaoProximo = () => {
        if(quadrinho < Quadrinhos.length - 1){
            return(
                <button className='BotaoProximo' onClick={() => Proximo()}>Pr??ximo</button>
            )
        }
        else{
            return(
                <div>{""}</div>
            )
        }
    }

    return (
        <div className='HQMax'>
            <h1>Generaliza????o</h1>
            <div className='HQ--Container'>
                <div className='HQ' style={{ height: h }}>
                    {BotaoAnterior()}
                    <img className='HQimg' src={Quadrinhos[quadrinho]} alt='Na imagem h?? uma hist??ria em quadrinhos que possui 6 quadros com os personagens Mestre e Disc??pulo dialogando sobre a rela????o de Generaliza????o. Primeiro quadro, Disc??pulo diz: ???Ol?? Mestre, poderia me falar sobre a generaliza????o????, Mestre diz: ???Ol??, falo sim! A generaliza????o ?? um tipo de rela????o com o objetivo de deixar mais espec??fico algo que ?? mais gen??rico.???. Segundo quadro, Mestre diz: ???Ela pode ocorrer tanto com os casos de uso quanto com os atores! Em ambos acaba tendo o mesmo objetivo que disse, especificar um ator ou caso de uso que ?? mais gen??rico.???. Terceiro quadro, Mestre diz: ???Para entender isso nos atores, pense neste exemplo. Podemos ter Professores, Diretores e Zeladores. Mas perceba que todos s??o Funcion??rios de uma Escola. O Funcion??rio ?? o ator mais gen??rico e os demais s??o vers??es mais espec??ficas, cada um com suas particularidades.???. Quarto quadro, Mestre diz: ???J?? nos casos de uso pense neste exemplo. Podemos ter Aula de Portugu??s e Aula de Matem??tica. Mas perceba que ambos s??o Aula. Dessa forma um caso de uso Dar Aula ?? um mais gen??rico e os outros dois s??o mais espec??ficos.???. Quinto quadro, Mestre diz: ???Dessa forma n??s podemos deixar um caso de uso ou um ator mais espec??fico, mostrando suas diversas varia????es.???. Sexto quadro, Disc??pulo diz: ???Obrigado pela explica????o Mestre!???, Mestre diz: ???N??o h?? de que!???. Fim.' />
                    {BotaoProximo()}
                </div>
                <div className='BotaoVoltar--Container'>
                    <Link to='/book' tabIndex={-1} className='Link'>
                        <button className='BotaoVoltar' onClick={() => pausar()}>Voltar</button>
                    </Link>
                </div>
            </div>
        </div >
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

export default HQGeneralizacao;