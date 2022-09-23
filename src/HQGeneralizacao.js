import React, { useState } from 'react';
import './Book.css';
import { Link } from 'react-router-dom';
import HQ1 from './components/imgs/HQGeneralizacao/Slide15.jpg';
import HQ2 from './components/imgs/HQGeneralizacao/Slide16.jpg';
import HQ3 from './components/imgs/HQGeneralizacao/Slide17.jpg';
import HQ4 from './components/imgs/HQGeneralizacao/Slide18.jpg';
import HQ5 from './components/imgs/HQGeneralizacao/Slide19.jpg';
import HQ6 from './components/imgs/HQGeneralizacao/Slide20.jpg';

function HQGeneralizacao() {
    const [quadrinho, setQuadrinho] = useState(0);
    var h = (window.innerHeight * 80) / 100;

    const Anterior = () => {
        if(quadrinho > 0){
            setQuadrinho(quadrinho - 1);
        }
    }

    const Proximo = () => {
        if(quadrinho < Quadrinhos.length - 1){
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
                <button className='BotaoProximo' onClick={() => Proximo()}>Próximo</button>
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
            <h1>Generalização</h1>
            <div className='HQ--Container'>
                <div className='HQ' style={{ height: h }}>
                    {BotaoAnterior()}
                    <img className='HQimg' src={Quadrinhos[quadrinho]} alt='Na imagem há uma história em quadrinhos que possui 6 quadros com os personagens Mestre e Discípulo dialogando sobre a relação de Generalização. Primeiro quadro, Discípulo diz: “Olá Mestre, poderia me falar sobre a generalização?”, Mestre diz: “Olá, falo sim! A generalização é um tipo de relação com o objetivo de deixar mais específico algo que é mais genérico.”. Segundo quadro, Mestre diz: “Ela pode ocorrer tanto com os casos de uso quanto com os atores! Em ambos acaba tendo o mesmo objetivo que disse, especificar um ator ou caso de uso que é mais genérico.”. Terceiro quadro, Mestre diz: “Para entender isso nos atores, pense neste exemplo. Podemos ter Professores, Diretores e Zeladores. Mas perceba que todos são Funcionários de uma Escola. O Funcionário é o ator mais genérico e os demais são versões mais específicas, cada um com suas particularidades.”. Quarto quadro, Mestre diz: “Já nos casos de uso pense neste exemplo. Podemos ter Aula de Português e Aula de Matemática. Mas perceba que ambos são Aula. Dessa forma um caso de uso Dar Aula é um mais genérico e os outros dois são mais específicos.”. Quinto quadro, Mestre diz: “Dessa forma nós podemos deixar um caso de uso ou um ator mais específico, mostrando suas diversas variações.”. Sexto quadro, Discípulo diz: “Obrigado pela explicação Mestre!”, Mestre diz: “Não há de que!”. Fim.' />
                    {BotaoProximo()}
                </div>
                <div className='BotaoVoltar--Container'>
                    <Link to='/book' tabIndex={-1} className='Link'>
                        <button className='BotaoVoltar'>Voltar</button>
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