import React, { useState } from 'react';
import './V.css';
import { Link } from 'react-router-dom';
import Alternativa from './components/Alternativa';
import Dica from './components/Dica';
//import Correct from './components/correct.mp3';
//import Incorrect from './components/incorrect.mp3';
import Victory from './components/victory.mp3';
import Corazon from './components/imgs/Corazon.png';
import Q1 from './components/audios/V1Q1.m4a'
import Q2 from './components/audios/V1Q2.m4a'
import Q3 from './components/audios/V1Q3.m4a'
import Q4 from './components/audios/V1Q4.m4a'
import Q5 from './components/audios/V1Q5.m4a'
import Q6 from './components/audios/V1Q6.m4a'
import HeR from './components/HeR';

function Treino(props) {
    const [questao, setQuestao] = useState(0);
    const [alternativa, setAlternativa] = useState(0);
    const [dica, setDica] = useState(0);
    const [vpv, setVpv] = useState(3);
    const [hwin, setHwin] = useState(false);
    const [usouh, setUsouh] = useState(false);
    const [desativah, setDesativah] = useState(false);
    const [hcor, setHcor] = useState('#DEDEDE');
    const [acor] = useState('#6DF030');
    const [victory] = useState({ audio: new Audio(Victory) });
    const [q1] = useState({audio: new Audio(Q1)});
    const [q2] = useState({audio: new Audio(Q2)});
    const [q3] = useState({audio: new Audio(Q3)});
    const [q4] = useState({audio: new Audio(Q4)});
    const [q5] = useState({audio: new Audio(Q5)});
    const [q6] = useState({audio: new Audio(Q6)});

    const narracao = [
        q1,
        q2,
        q3,
        q4,
        q5,
        q6
    ];

    const Habilidade = () => {
        if (4 <= 2 && desativah === false) {
            setUsouh(true);
        }
    }

    const Coracao = (index, max) => {
        let row = [];
        for (index; index < max; index++) {
            row.push(<img className='CorazonImg' src={Corazon} alt='' />)
        }
        return row;
    }

    const pausar = () => {
        victory.audio.pause();
        narracao[questao].audio.pause();
        narracao[questao].audio.currentTime = 0;
    }

    const jogarNovamente = () => {
        victory.audio.pause();
        victory.audio.currentTime = 0;
        setQuestao(0);
        setAlternativa(0);
        setDica(0);
        setVpv(3);
        setHwin(false);
        setUsouh(false);
        setDesativah(false);
        setHcor('#DEDEDE');
    }

    function confereAlternativa(i) {
        narracao[questao].audio.pause();
        narracao[questao].audio.currentTime = 0;
        let certo = false;
        if (vpv > 0) {
            for (let x = 0; x < corretas.length; x++) {
                if (i + alternativa === corretas[x]) {
                    certo = true;
                }
            }

            if (certo) {
                /*if(props.acertarErrar){
                    let audio = new Audio(Correct);
                    audio.play();
                }*/
                if (vpv > 1) {
                    setVpv(vpv - 1)
                    setQuestao(questao + 1)
                    setAlternativa(alternativa + 4)
                    setDica(dica + 1)
                    if (usouh) {
                        setDesativah(true)
                        setUsouh(false)
                    }
                }
                else {
                    setVpv(vpv - 1)
                    setHwin(true)
                    if (usouh) {
                        setDesativah(true)
                        setUsouh(false)
                    }
                }
            }
            else {
                /*if(props.acertarErrar){
                    let audio = new Audio(Incorrect);
                    audio.play();
                }*/
                if (questao + 1 >= Questoes.length) {
                    setQuestao(0);
                }
                else {
                    setQuestao(questao + 1);
                }
                if (alternativa + 4 >= alternativas.length) {
                    setAlternativa(0);
                }
                else {
                    setAlternativa(alternativa + 4)
                }
                if (dica + 1 >= dicas.length) {
                    setDica(0);
                }
                else {
                    setDica(dica + 1)
                }
                if (usouh) {
                    setDesativah(true)
                    setUsouh(false)
                }
            }
        }
    }

    function renderAlternativa(i) {
        return <Alternativa
            value0={alternativas[alternativa + 0]}
            value1={alternativas[alternativa + 1]}
            value2={alternativas[alternativa + 2]}
            value3={alternativas[alternativa + 3]}
            indice={i}
            onClick={confereAlternativa}
            //vwin={vwin}
            hwin={hwin}
            acor={acor}
            corretas={corretas}
            alternativa={alternativa}
            acertarErrar={props.acertarErrar}
        //clicou={clicou}
        //mudaClicou={() => mudaClicou()}
        />
    }

    function render() {
        if(props.narracao && !hwin && questao > -1){
            //console.log("cont: " + questao);
            narracao[questao].audio.play();
        }
        let charada;
        if (hwin) {
            charada = "Vencedor: Herói";
        }
        else {
            charada = Questoes[questao];
        }
        const vilao = "Vilão"
        const heroi = "Herói";

        if (hwin === true) {
            if (props.ganharPerder) {
                victory.audio.play();
            }
            return (
                <div className='vcontainer'>
                    <div className='pvs'>
                        <div className='vpv'>{vilao} {Coracao(0, vpv)}</div>
                        <div className='hpv'>{Coracao(0, 4)} {heroi}</div>
                    </div>
                    <div className='charadasFim'>
                        <div>{charada}</div>
                    </div>
                    <div className='botoesOpcoes'>
                        <Link to="/" tabIndex={-1} className='Link'>
                            <button className='botaoMeJ' onClick={() => pausar()}>Menu Principal</button>
                        </Link>
                        <button className='botaoMeJ' onClick={() => jogarNovamente()}>Jogar Novamente</button>
                    </div>
                    <HeR
                        hwin={hwin}
                        hcor={hcor}
                        Habilidade={() => Habilidade}
                    />
                    {renderAlternativa()}
                </div>
            );
        }
        if (!desativah && 4 <= 2 && hcor === '#DEDEDE') {
            setHcor('#0367FD');
        }
        if (desativah && hcor === '#0367FD') {
            setHcor('#DEDEDE');
        }
        return (
            <div className='vcontainer'>
                <div className='pvs'>
                    <div className='vpv'>{vilao} {Coracao(0, vpv)}</div>
                    <div className='hpv'>{Coracao(0, 4)} {heroi}</div>
                </div>
                <div className='charadas'>
                    <div>{"Questão " + (questao + 1) + ". " + charada}</div>
                </div>
                <HeR
                    hwin={hwin}
                    hcor={hcor}
                    Habilidade={() => Habilidade()}
                    stop={() => pausar()}
                />
                <div className='dicas'><Dica
                    dic={dicas[dica]}
                    usou={usouh}
                    pv={4}
                    desativou={desativah}
                /></div>
                {renderAlternativa()}
            </div>
        );
    }
    return render();
}

const Questoes = [
    "O que representa um ator num diagrama de casos de uso?",
    "O que é um caso de uso?",
    "Qual das características a seguir está relacionada a um extend?",
    "O que representa um caso de uso num diagrama de casos de uso?",
    "Qual das características a seguir está relacionada a um include?",
    "O que representa o limite do sistema num diagrama de casos de uso?"
];
const alternativas = [
    "Um boneco palito", "Uma elipse", "Um retângulo", "Um triângulo",
    "Uma funcionalidade do sistema", "Um botão", "Uma interação do ator com o sistema", "Um diagrama",
    "Sempre ocorre quando o caso de uso base ocorre", "Pode ou não ocorrer quando o caso de uso base ocorre", "Sempre acontece imediatamente após o caso de uso base", "Sempre acontece imediatamente antes do caso de uso base",
    "Um retângulo", "Um triângulo", "Um boneco palito", "Uma elipse",
    "Sempre ocorre quando o caso de uso base ocorre", "Se ele ocorrer, o caso de uso ocorrerá", "Pode ou não ocorrer quando o caso de uso base ocorrer", "Se ele ocorrer, o caso de uso base pode ou não ocorrer",
    "Um triângulo", "Uma elipse", "Um boneco palito", "Um retângulo"
];
const corretas = [0, 6, 9, 15, 16, 23]; //MUDAR O X DO CONFEREALTERNATIVA PARA CADA VILÃO
const dicas = ["dica1", "dica2", "dica3", "dica4", "dica5", "dica6"];

export default Treino;