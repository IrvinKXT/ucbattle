import React from 'react';
import { Link } from 'react-router-dom';
import "./ComoJogar.css";

function ComoJogar(){
    return(
        <div className='ComoJogar--Container'>
            <div className='TituloCJ'>
            <h1 className='TituloCJ'>Como Jogar</h1>
            </div>
            <div className='Topico'>
            <h2>O que é o U.C. Battle?</h2>
            <p>É um jogo sobre perguntas e respostas, onde o jogador
                deverá responder perguntas sobre o tema Casos de Uso.
            </p>
            </div>
            <div className='Topico'>
            <h2>Como funciona?</h2>
            <p>Para jogar, o jogador deverá selecionar um vilão 
                e enfrentá-lo num jogo de perguntas e respostas.
                O jogo começa com apenas um vilão desbloqueado, 
                mas ao derrotá-lo o próximo vilão é desbloqueado.
                Cada vilão fica mais difícil que o anterior e há 5 
                no total. Também é possível a qualquer momento escolher 
                a opção treino para poder praticar e entender como o jogo 
                funciona. No modo treino o jogador não é penalizado mesmo 
                se errar.
            </p>
            </div>
            <div className='Topico'>
            <h2>Como funciona a batalha?</h2>
            <p>
                Na batalha tanto o jogador quanto o vilão possuem pontos de vida ou PV, 
                o herói sempre começa com 4 e os vilões variam conforme a dificuldade 
                aumenta, com o primeiro vilão começando com 3 PV e o último começando com 7. 
                O objetivo do jogador é zerar os PV do vilão que está enfrentando. 
                Para fazer isso é preciso acertar as perguntas que vão sendo feitas, 
                caso acerte o vilão perde 1 PV, caso erre o jogador perde 1 PV. Se conseguir 
                zerar os PV do vilão, o jogador vence a batalha; caso jogador tenha seus PV zerados 
                ele perde a batalha.
            </p>
            </div>
            <div className='Topico'>
            <h2>O que é a Habilidade?</h2>
            <p>
                A habilidade é um recurso que o jogador pode usar apenas uma vez por batalha. 
                Quando seus PV forem 2 ou menos ele poderá usar a habilidade e receber uma dica da pergunta 
                que estiver resolvendo naquele momento.
            </p>
            </div>
            <div className='Topico'>
            <h2>O que é o Book?</h2>
            <p>
                O book é uma opção que permite ao jogador acessar algumas histórias que auxiliam a entender 
                alguns tópicos sobre os casos de uso. Caso o jogador deseje estudar ou revisar algum desses conceitos 
                ele poderá usar o book a qualquer momento.
            </p>
            </div>
            <div className='VoltarCJ'>
            <Link to="/ucbattle/" tabIndex={-1} className='Link'>
                <button className='BotaoVoltarCJ'>Voltar</button>
            </Link>
            </div>
        </div>
    )
}

export default ComoJogar;