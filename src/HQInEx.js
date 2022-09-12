import React from 'react';
import './Book.css';
import { Link } from 'react-router-dom';
import HQInExImg from './components/imgs/HQInEx.png';

function HQInEx(){
    return (
        <div className='HQMax'>
            <h1>Include e Extend</h1>
            <div className='HQ--Container'>
                <Link to='/book' tabIndex={-1} className='Link'>
                    <button className='BotaoVoltar'>Voltar</button>
                </Link>
                <img className='HQ' src={HQInExImg} alt='Na imagem há uma história em quadrinhos que possui 6 quadros com os personagens Mestre e Discípulo dialogando sobre as relações de Include e Extend. Primeiro quadro, Discípulo diz: "Mestre, estou com dificuldades de diferenciar um include e um extend, poderia me ajudar?”, Mestre diz: “Claro! Muitos acabam não entendendo suas diferenças e se confundem.”. Segundo quadro, Mestre diz: “A característica principal de um caso de uso include é que ele sempre ocorre quando o caso de uso base ocorre. Já o extend tem por característica não ser obrigatório, ele pode ou não ocorrer quando o caso de uso base ocorre.”. Terceiro quadro, Mestre diz: “Os includes são bem úteis quando temos um comportamento que se repete em mais de um caso de uso. Dessa forma vários casos de uso podem incluí-lo, facilitando a visualização daquela ação.”. Quarto quadro, Mestre diz: “Os extends são bem úteis quando queremos demonstrar um comportamento opcional, que nem sempre ocorre, num caso de uso. Assim todos os casos de uso que tem um mesmo comportamento opcional podem ter o mesmo extend.”. Quinto quadro, Mestre diz: “Observe o seguinte exemplo para ajudar a entender melhor a diferença entre os dois. Num espirro, um include seria fechar os olhos e um extend seria cobrir a cara com o braço.”. Sexto quadro, Discípulo diz: “Estou começando a entender melhor, muito obrigado!”, Mestre diz: “Que bom! Continue praticando!”. Fim.' />
            </div>
        </div>
    );
}

export default HQInEx;