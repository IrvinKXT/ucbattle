import React, { useState } from 'react';
import './Book.css';
import { Link } from 'react-router-dom';
import HQ1 from './components/imgs/HQCenarios/Slide3.jpg';
import HQ2 from './components/imgs/HQCenarios/Slide4.jpg';
import HQ3 from './components/imgs/HQCenarios/Slide5.jpg';
import HQ4 from './components/imgs/HQCenarios/Slide6.jpg';
import HQ5 from './components/imgs/HQCenarios/Slide7.jpg';
import HQ6 from './components/imgs/HQCenarios/Slide8.jpg';

function HQCenarios() {
    const [quadrinho, setQuadrinho] = useState(0);
    var h = (window.innerHeight * 80) / 100;

    const Anterior = () => {
        if (quadrinho > 0) {
            setQuadrinho(quadrinho - 1);
        }
    }

    const Proximo = () => {
        if (quadrinho < Quadrinhos.length - 1) {
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
                <button className='BotaoProximo' onClick={() => Proximo()}>Próximo</button>
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
            <h1>Cenários dos Casos de Uso</h1>
            <div className='HQ--Container'>
                <div className='HQ' style={{ height: h }}>
                    {BotaoAnterior()}
                    <img className='HQimg' src={Quadrinhos[quadrinho]} alt='Na imagem há uma história em quadrinhos que possui 6 quadros com os personagens Mestre e Discípulo dialogando sobre os Cenários de um Caso de Uso. Primeiro quadro, Discípulo diz: "Mestre o senhor poderia falar sobre os cenários de um caso de uso?", Mestre diz: “Claro que sim! Os cenários são diferentes formas que o mesmo caso de uso pode acontecer”. Segundo quadro, Mestre diz: “Pense por exemplo que três pessoas desejam entrar numa festa. A primeira apresenta seu convite, o segurança avalia e a permite entrar.”. Terceiro quadro, Mestre diz: “A segunda não tinha convite, então comprou um ali na hora e foi permitida de entrar. Já a terceira apresentou um convite falso, o segurança percebeu, não a permitiu entrar e a expulsou.”. Quarto quadro, Discípulo diz: “Ah, acho que entendi! Os cenários mostram o ator realizando as interações em busca de atingir seu objetivo. Porém nem sempre as coisas acontecem da mesma forma e às vezes pode até dar errado!”. Quinto quadro, Mestre diz: “Isso mesmo! Além disso vale ressaltar que sempre temos um fluxo principal que é o cenário onde tudo ocorre como esperado. E também temos os fluxos alternativos que mostram diferentes formas daquilo acontecer.”. Sexto quadro: Discípulo diz: “Obrigado Mestre!”, Mestre diz: “Sem problemas, estou à disposição!”. Fim.' />
                    {BotaoProximo()}
                </div>
                <div className='BotaoVoltar--Container'>
                    <Link to='/book' tabIndex={-1} className='Link'>
                        <button className='BotaoVoltar'>Voltar</button>
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