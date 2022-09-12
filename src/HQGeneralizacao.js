import React from 'react';
import './Book.css';
import { Link } from 'react-router-dom';
import HQGeneralizacaoImg from './components/imgs/HQGeneralizacao.png';

function HQGeneralizacao(){
    return (
        <div className='HQMax'>
            <h1>Generalização</h1>
            <div className='HQ--Container'>
                <Link to='/book' tabIndex={-1} className='Link'>
                    <button className='BotaoVoltar'>Voltar</button>
                </Link>
                <img className='HQ' src={HQGeneralizacaoImg} alt='Na imagem há uma história em quadrinhos que possui 6 quadros com os personagens Mestre e Discípulo dialogando sobre a relação de Generalização. Primeiro quadro, Discípulo diz: “Olá Mestre, poderia me falar sobre a generalização?”, Mestre diz: “Olá, falo sim! A generalização é um tipo de relação com o objetivo de deixar mais específico algo que é mais genérico.”. Segundo quadro, Mestre diz: “Ela pode ocorrer tanto com os casos de uso quanto com os atores! Em ambos acaba tendo o mesmo objetivo que disse, especificar um ator ou caso de uso que é mais genérico.”. Terceiro quadro, Mestre diz: “Para entender isso nos atores, pense neste exemplo. Podemos ter Professores, Diretores e Zeladores. Mas perceba que todos são Funcionários de uma Escola. O Funcionário é o ator mais genérico e os demais são versões mais específicas, cada um com suas particularidades.”. Quarto quadro, Mestre diz: “Já nos casos de uso pense neste exemplo. Podemos ter Aula de Português e Aula de Matemática. Mas perceba que ambos são Aula. Dessa forma um caso de uso Dar Aula é um mais genérico e os outros dois são mais específicos.”. Quinto quadro, Mestre diz: “Dessa forma nós podemos deixar um caso de uso ou um ator mais específico, mostrando suas diversas variações.”. Sexto quadro, Discípulo diz: “Obrigado pela explicação Mestre!”, Mestre diz: “Não há de que!”. Fim.' />
            </div>
        </div>
    );
}

export default HQGeneralizacao;