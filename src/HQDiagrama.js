import React from 'react';
import './Book.css';
import { Link } from 'react-router-dom';
import HQDiagramaImg from './components/imgs/HQDiagrama.png';

function HQDiagrama(){
    return (
        <div className='HQMax'>
            <h1>Diagrama de Casos de Uso</h1>
            <div className='HQ--Container'>
                <Link to='/book' tabIndex={-1} className='Link'>
                    <button className='BotaoVoltar'>Voltar</button>
                </Link>
                <img className='HQ' src={HQDiagramaImg} alt='Na imagem há uma história em quadrinhos que possui 6 quadros com os personagens Mestre e Discípulo dialogando sobre o Diagrama de Casos de Uso. Primeiro quadro, Discípulo diz: “Mestre, como funcionam os diagramas de casos de uso?”, Mestre diz: “Tais diagramas têm a função de mostrar de forma simples e clara os casos de uso e os atores de um sistema.”. Segundo quadro, Mestre diz: “Nele o sistema é representado por um retângulo com o nome do sistema no topo. Os atores são representados por simples bonecos de palito com o nome do ator em baixo.”. Terceiro quadro, Mestre diz: “Os casos de uso são representados por uma elipse com o nome do caso de uso dentro dela e a ligação entre atores e casos de uso é dada por uma linha simples.”. Quarto quadro, Mestre diz: "Já os outros tipos de relação possuem algumas diferenças em como a linha é desenhada. Os includes e extends tem linhas tracejadas com uma seta e o nome da relação escrito em cima. Sendo que nos includes a seta aponta para o caso de uso incluido e nos extends a seta aponta para o caso de uso base.”. Quinto quadro, Mestre diz: “Por fim, a generalização é representada por uma linha simples com uma seta apontando para o ator ou caso de uso mais genérico.”. Sexto quadro, Discípulo diz: “Entendi! Mesmo usando elementos simples é possível demonstrar muitas coisas!”, Mestre diz: “Correto. Continue praticando e aprendendo mais!”. Fim.' />
            </div>
        </div>
    );
}

export default HQDiagrama;