import React, { useState } from 'react';
import './Book.css';
import { Link } from 'react-router-dom';
import HQ1 from './components/imgs/HQDiagrama/Slide21.jpg';
import HQ2 from './components/imgs/HQDiagrama/Slide22.jpg';
import HQ3 from './components/imgs/HQDiagrama/Slide23.jpg';
import HQ4 from './components/imgs/HQDiagrama/Slide24.jpg';
import HQ5 from './components/imgs/HQDiagrama/Slide25.jpg';
import HQ6 from './components/imgs/HQDiagrama/Slide26.jpg';

function HQDiagrama() {
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
            <h1>Diagrama de Casos de Uso</h1>
            <div className='HQ--Container'>
                <div className='HQ' style={{ height: h }}>
                    {BotaoAnterior()}
                    <img className='HQimg' src={Quadrinhos[quadrinho]} alt='Na imagem há uma história em quadrinhos que possui 6 quadros com os personagens Mestre e Discípulo dialogando sobre o Diagrama de Casos de Uso. Primeiro quadro, Discípulo diz: “Mestre, como funcionam os diagramas de casos de uso?”, Mestre diz: “Tais diagramas têm a função de mostrar de forma simples e clara os casos de uso e os atores de um sistema.”. Segundo quadro, Mestre diz: “Nele o sistema é representado por um retângulo com o nome do sistema no topo. Os atores são representados por simples bonecos de palito com o nome do ator em baixo.”. Terceiro quadro, Mestre diz: “Os casos de uso são representados por uma elipse com o nome do caso de uso dentro dela e a ligação entre atores e casos de uso é dada por uma linha simples.”. Quarto quadro, Mestre diz: "Já os outros tipos de relação possuem algumas diferenças em como a linha é desenhada. Os includes e extends tem linhas tracejadas com uma seta e o nome da relação escrito em cima. Sendo que nos includes a seta aponta para o caso de uso incluido e nos extends a seta aponta para o caso de uso base.”. Quinto quadro, Mestre diz: “Por fim, a generalização é representada por uma linha simples com uma seta apontando para o ator ou caso de uso mais genérico.”. Sexto quadro, Discípulo diz: “Entendi! Mesmo usando elementos simples é possível demonstrar muitas coisas!”, Mestre diz: “Correto. Continue praticando e aprendendo mais!”. Fim.' />
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

export default HQDiagrama;