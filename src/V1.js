import React, { useState } from 'react';
import './V.css';
import { Link } from 'react-router-dom';
//import axios from 'axios';
import Alternativa from './components/Alternativa';
import Dica from './components/Dica';
//import Correct from './components/correct.mp3';
//import Incorrect from './components/incorrect.mp3';
import Victory from './components/victory.mp3';
import Lose from './components/lose.mp3';
import HeR from './components/HeR';
import Corazon from './components/imgs/Corazon.png';
import Q1 from './components/audios/V1Q1.m4a';
import Q2 from './components/audios/V1Q2.m4a';
import Q3 from './components/audios/V1Q3.m4a';
import Q4 from './components/audios/V1Q4.m4a';
import Q5 from './components/audios/V1Q5.m4a';
import Q6 from './components/audios/V1Q6.m4a';
import D1 from './components/audios/V1q1d.m4a';
import D2 from './components/audios/V1q2d.m4a';
import D3 from './components/audios/V1q3d.m4a';

function V1(props) {
    const [questao, setQuestao] = useState(0);
    const [alternativa, setAlternativa] = useState(0);
    const [dica, setDica] = useState(0);
    const [vpv, setVpv] = useState(3);
    const [hpv, setHpv] = useState(4);
    const [hwin, setHwin] = useState(false);
    const [vwin, setVwin] = useState(false);
    const [usouh, setUsouh] = useState(false);
    const [desativah, setDesativah] = useState(false);
    const [hcor, setHcor] = useState('#DEDEDE');
    const [acor] = useState('#6DF030');
    const [victory] = useState({ audio: new Audio(Victory) });
    const [lose] = useState({ audio: new Audio(Lose) });
    const [q1] = useState({audio: new Audio(Q1)});
    const [q2] = useState({audio: new Audio(Q2)});
    const [q3] = useState({audio: new Audio(Q3)});
    const [q4] = useState({audio: new Audio(Q4)});
    const [q5] = useState({audio: new Audio(Q5)});
    const [q6] = useState({audio: new Audio(Q6)});
    const [d1] = useState({audio: new Audio(D1)});
    const [d2] = useState({audio: new Audio(D2)});
    const [d3] = useState({audio: new Audio(D3)});
    console.log("questão: " + questao);

    const narracao = [
        q1,
        q2,
        q3,
        q4,
        q5,
        q6
    ];

    const narradica = [
        d1,
        d2,
        d3,
        q4,
        q5,
        q6
    ];

    const playdica = () => {
        narradica[dica].audio.play();
    }

    //const [clicou, setClicou] = useState(false);

    /*const updateAPIData = async () => {
        await axios.put('https://62aa160c371180affbcf1820.mockapi.io/viloes/2', {"id":"2","desbloqueado":true})
    }*/

    const Habilidade = () => {
        if (hpv <= 2 && desativah === false) {
            pausar();
            playdica();
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

    const arrumaCorH = () => {
        if (!desativah && hpv <= 2 && hcor === '#DEDEDE') {
            setHcor('#4791FF');
        }
        if (desativah && hcor === '#4791FF') {
            setHcor('#DEDEDE');
        }
    }

    /*const mudaClicou = () => {
        setClicou(true);
    }*/

    const pausar = () => {
        victory.audio.pause();
        lose.audio.pause();
        narracao[questao].audio.pause();
        narracao[questao].audio.currentTime = 0;
        narradica[dica].audio.pause();
        narradica[dica].audio.currentTime = 0;
    }

    const jogarNovamente = () => {
        victory.audio.pause();
        victory.audio.currentTime = 0;
        lose.audio.pause();
        lose.audio.currentTime = 0;
        //narracao[questao].audio.pause();
        //narracao[questao].audio.currentTime = 0;
        setQuestao(0);
        setAlternativa(0);
        setDica(0);
        setVpv(3);
        setHpv(4);
        setVwin(false);
        setHwin(false);
        setUsouh(false);
        setDesativah(false);
        setHcor('#DEDEDE');
    }

    function confereAlternativa(i) {
        narracao[questao].audio.pause();
        narracao[questao].audio.currentTime = 0;
        narradica[dica].audio.pause();
        narradica[dica].audio.currentTime = 0;
        let certo = false;
        if (vpv > 0 && hpv > 0) {
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
                if (hpv > 1) {
                    setHpv(hpv - 1)
                    setQuestao(questao + 1)
                    setAlternativa(alternativa + 4)
                    setDica(dica + 1)
                    if (usouh) {
                        setDesativah(true)
                        setUsouh(false)
                    }

                }
                else {
                    setHpv(hpv - 1)
                    setVwin(true)
                    if (usouh) {
                        setDesativah(true)
                        setUsouh(false)
                    }
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
            vwin={vwin}
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
        if(props.narracao && !hwin && !vwin && !usouh){
            //console.log("cont: " + questao);
            narracao[questao].audio.play();
        }
        let charada;
        if (hwin) {
            charada = "Vencedor: Herói";
            if (!props.v2) {
                props.alteraV2();
            }
        }
        else {
            if (vwin) {
                charada = "Vencedor: Vilão";
            }
            else {
                charada = Questoes[questao];
            }
        }
        const vilao = "Vilão";
        const heroi = "Herói";

        if (hwin === true || vwin === true) {
            if (hwin && props.ganharPerder) {
                victory.audio.play();
            }
            else if (vwin && props.ganharPerder) {
                lose.audio.play();
            }
            return (
                <div className='vcontainer'>
                    <div className='pvs'>
                        <div className='vpv'>{vilao} {Coracao(0, vpv)}</div>
                        <div className='hpv'> {Coracao(0, hpv)}{heroi}</div>
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
                        vwin={vwin}
                        hwin={hwin}
                        hcor={hcor}
                        Habilidade={() => Habilidade}
                    />
                    {renderAlternativa()}
                </div>
            );
        }

        arrumaCorH();

        return (
            <div className='vcontainer'>
                <div className='pvs'>
                    <div className='vpv'>{vilao} {Coracao(0, vpv)}</div>
                    <div className='hpv'> {Coracao(0, hpv)}{heroi}</div>
                </div>
                <div className='charadas' style={{ fontSize: "20px" }}>
                    <div>{"Questão " + (questao + 1) + ". " + charada}</div>
                </div>
                <HeR
                    vwin={vwin}
                    hwin={hwin}
                    hcor={hcor}
                    Habilidade={() => Habilidade()}
                    stop={() => pausar()}
                />
                <div className='dicas'><Dica
                    dic={dicas[dica]}
                    usou={usouh}
                    pv={hpv}
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
    "Um boneco palito",
    "Uma elipse",
    "Um retângulo",
    "Um triângulo",

    "Uma funcionalidade do sistema",
    "Um botão",
    "Uma interação do ator com o sistema",
    "Um diagrama",

    "Sempre ocorre quando o caso de uso base ocorre",
    "Pode ou não ocorrer quando o caso de uso base ocorre",
    "Sempre acontece imediatamente após o caso de uso base",
    "Sempre acontece imediatamente antes do caso de uso base",

    "Um retângulo",
    "Um triângulo",
    "Um boneco palito",
    "Uma elipse",

    "Sempre ocorre quando o caso de uso base ocorre",
    "Se ele ocorrer, o caso de uso ocorrerá",
    "Pode ou não ocorrer quando o caso de uso base ocorrer",
    "Se ele ocorrer, o caso de uso base pode ou não ocorrer",

    "Um triângulo",
    "Uma elipse",
    "Um boneco palito",
    "Um retângulo"
];
const corretas = [0, 6, 9, 15, 16, 23];
const dicas = [
    "Dica: Lembra uma pessoa",
    "Dica: Está relacionado a interação",
    "Dica: Característica principal é ser opcional",
    "Dica: Tem zero arestas",
    "Dica: Característica principal é não ser opcional",
    "Dica: Tem quatro ângulos de 90 graus"
];

export default V1;