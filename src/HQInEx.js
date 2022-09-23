import React, { useState } from 'react';
import './Book.css';
import { Link } from 'react-router-dom';
import HQ1 from './components/imgs/HQInEx/Slide9.jpg';
import HQ2 from './components/imgs/HQInEx/Slide10.jpg';
import HQ3 from './components/imgs/HQInEx/Slide11.jpg';
import HQ4 from './components/imgs/HQInEx/Slide12.jpg';
import HQ5 from './components/imgs/HQInEx/Slide13.jpg';
import HQ6 from './components/imgs/HQInEx/Slide14.jpg';

function HQInEx() {
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
            <h1>Include e Extend</h1>
            <div className='HQ--Container'>
                <div className='HQ' style={{ height: h }}>
                    {BotaoAnterior()}
                    <img className='HQimg' src={Quadrinhos[quadrinho]} alt='Na imagem há uma história em quadrinhos que possui 6 quadros com os personagens Mestre e Discípulo dialogando sobre as relações de Include e Extend. Primeiro quadro, Discípulo diz: "Mestre, estou com dificuldades de diferenciar um include e um extend, poderia me ajudar?”, Mestre diz: “Claro! Muitos acabam não entendendo suas diferenças e se confundem.”. Segundo quadro, Mestre diz: “A característica principal de um caso de uso include é que ele sempre ocorre quando o caso de uso base ocorre. Já o extend tem por característica não ser obrigatório, ele pode ou não ocorrer quando o caso de uso base ocorre.”. Terceiro quadro, Mestre diz: “Os includes são bem úteis quando temos um comportamento que se repete em mais de um caso de uso. Dessa forma vários casos de uso podem incluí-lo, facilitando a visualização daquela ação.”. Quarto quadro, Mestre diz: “Os extends são bem úteis quando queremos demonstrar um comportamento opcional, que nem sempre ocorre, num caso de uso. Assim todos os casos de uso que tem um mesmo comportamento opcional podem ter o mesmo extend.”. Quinto quadro, Mestre diz: “Observe o seguinte exemplo para ajudar a entender melhor a diferença entre os dois. Num espirro, um include seria fechar os olhos e um extend seria cobrir a cara com o braço.”. Sexto quadro, Discípulo diz: “Estou começando a entender melhor, muito obrigado!”, Mestre diz: “Que bom! Continue praticando!”. Fim.' />
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

export default HQInEx;