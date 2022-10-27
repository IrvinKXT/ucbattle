import React, {/*useEffect, */useState } from 'react';
import './V.css';
import { Link } from 'react-router-dom';
//import axios from 'axios';
import Alternativa from './components/Alternativa';
import Dica from './components/Dica';
import Qimg1 from './components/imgs/V3Q1(1).png';
import Qimg2 from './components/imgs/V3Q2.png';
import Qimg3_5 from './components/imgs/V3Q3e5.png';
import Qimg4 from './components/imgs/V3Q4.png';
import Qimg6_8 from './components/imgs/V3Q6e8.png';
import Qimg7 from './components/imgs/V3Q7.png';
//import Correct from './components/correct.mp3';
//import Incorrect from './components/incorrect.mp3';
import Victory from './components/victory.mp3';
import Lose from './components/lose.mp3';
import HeR from './components/HeR';
import Corazon from './components/imgs/Corazon.png';
import Q1 from './components/audios/V3Q1.m4a'
import Q2 from './components/audios/V3Q2.m4a'
import Q3 from './components/audios/V3Q3.m4a'
import Q4 from './components/audios/V3Q4.m4a'
import Q5 from './components/audios/V3Q5.m4a'
import Q6 from './components/audios/V3Q6.m4a'
import Q7 from './components/audios/V3Q7.m4a'
import Q8 from './components/audios/V3Q8.m4a'
import D1 from './components/audios/V3q1d.m4a';
import D2 from './components/audios/V3q2d.m4a';
import D3 from './components/audios/V3q3d.m4a';
import D4 from './components/audios/V3q4d.m4a';
import D5 from './components/audios/V3q5d.m4a';
import D6 from './components/audios/V3q6d.m4a';
import D7 from './components/audios/V3q7d.m4a';
import D8 from './components/audios/V3q8d.m4a';

function V3(props) {
    const [questao, setQuestao] = useState(0);
    const [alternativa, setAlternativa] = useState(0);
    const [dica, setDica] = useState(0);
    const [vpv, setVpv] = useState(5);
    const [hpv, setHpv] = useState(4);
    const [hwin, setHwin] = useState(false);
    const [vwin, setVwin] = useState(false);
    const [usouh, setUsouh] = useState(false);
    const [desativah, setDesativah] = useState(false);
    const [hcor, setHcor] = useState('#DEDEDE');
    const [acor] = useState('#6DF030');
    const [victory] = useState({ audio: new Audio(Victory) });
    const [lose] = useState({ audio: new Audio(Lose) });
    //const [fases, setFases] = useState([]);
    const [q1] = useState({audio: new Audio(Q1)});
    const [q2] = useState({audio: new Audio(Q2)});
    const [q3] = useState({audio: new Audio(Q3)});
    const [q4] = useState({audio: new Audio(Q4)});
    const [q5] = useState({audio: new Audio(Q5)});
    const [q6] = useState({audio: new Audio(Q6)});
    const [q7] = useState({audio: new Audio(Q7)});
    const [q8] = useState({audio: new Audio(Q8)});
    const [d1] = useState({audio: new Audio(D1)});
    const [d2] = useState({audio: new Audio(D2)});
    const [d3] = useState({audio: new Audio(D3)});
    const [d4] = useState({audio: new Audio(D4)});
    const [d5] = useState({audio: new Audio(D5)});
    const [d6] = useState({audio: new Audio(D6)});
    const [d7] = useState({audio: new Audio(D7)});
    const [d8] = useState({audio: new Audio(D8)});

    const narracao = [
        q1,
        q2,
        q3,
        q4,
        q5,
        q6,
        q7,
        q8
    ];

    const narradica = [
        d1,
        d2,
        d3,
        d4,
        d5,
        d6,
        d7,
        d8
    ];

    const playdica = () => {
        narradica[dica].audio.play();
    }

    const narraRepeat = () => {
        if (!vwin && !hwin) {
            narradica[questao].audio.pause();
            narradica[questao].audio.currentTime = 0;
            narracao[questao].audio.pause();
            narracao[questao].audio.currentTime = 0;
            narracao[questao].audio.play();
        }
    }

    const repeteNarraButton = () => {
        if (props.narracao) {
            return (
                <div className='Narra--Container'>
                    <button className='Narra' onClick={() => narraRepeat()}>Repetir Narração</button>
                </div>
            )
        }
        else {
            return (
                <div>{""}</div>
            )
        }
    }

    /*useEffect(() => {
            axios.get('https://62aa160c371180affbcf1820.mockapi.io/viloes')
                .then(res => {
                  const fase = res.data;
                  setFases(fase);
                })
                .catch(error => console.log(error))
    }, [])*/

    /*const updateAPIData = async () => {
        await axios.put('https://62aa160c371180affbcf1820.mockapi.io/viloes/4', {"id":"4","desbloqueado":true})
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
        setQuestao(0);
        setAlternativa(0);
        setDica(0);
        setVpv(5);
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
            if (!props.v4) {
                props.alteraV4();
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
                    <div className='Narracao_e_HeR'>
                    {repeteNarraButton()}
                    <HeR
                        vwin={vwin}
                        hwin={hwin}
                        hcor={hcor}
                        Habilidade={() => Habilidade()}
                        stop={() => pausar()}
                    />
                </div>
                    {renderAlternativa()}
                </div>
            );
        }
        if (!desativah && hpv <= 2 && hcor === '#DEDEDE') {
            setHcor('#4791FF');
        }
        if (desativah && hcor === '#4791FF') {
            setHcor('#DEDEDE');
        }
        return (
            <div className='vcontainer'>
                <div className='pvs'>
                    <div className='vpv'>{vilao} {Coracao(0, vpv)}</div>
                    <div className='hpv'> {Coracao(0, hpv)}{heroi}</div>
                </div>
                <div className='charadasImg'>
                    <div>{"Questão " + (questao + 1) + ". " + charada}</div>
                    <div><img className='Qimg' src={Qimagens[questao]} alt={alts[questao]} /></div>
                </div>
                <div className='Narracao_e_HeR'>
                    {repeteNarraButton()}
                    <HeR
                        vwin={vwin}
                        hwin={hwin}
                        hcor={hcor}
                        Habilidade={() => Habilidade()}
                        stop={() => pausar()}
                    />
                </div>
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

    //Para combater trapaça
    // if(fases.length > 0){
    //   if(fases[2].desbloqueado){
    return render();
    //   }
    //}
    //return render();
}

const Questoes = [
    "Qual seria um possível nome para o sistema do diagrama de casos de uso a seguir?",
    "Qual alternativa informa corretamente o(s) ator(es) no diagrama de casos de uso a seguir?",
    "Qual dos casos de uso a seguir possui mais de um ator?",
    "No diagrama de casos de uso a seguir, o que deveria estar escrito em cima da linha tracejada?",
    "Qual dos casos de uso a seguir é realizado apenas pelo ator Cliente?",
    "Quantos atores existem no diagrama de casos de uso a seguir?",
    "No diagrama de casos de uso a seguir, o que deveria estar escrito em cima da linha tracejada?",
    "Quantos casos de uso existem no diagrama de casos de uso a seguir?"
];
const Qimagens = [
    Qimg1,
    Qimg2,
    Qimg3_5,
    Qimg4,
    Qimg3_5,
    Qimg6_8,
    Qimg7,
    Qimg6_8
]

const alts = [
    "Um diagrama de casos de uso cujo sistema não está nomeado, possui dois atores que são o Cliente e o Vendedor. O Cliente realiza os casos de uso Comprar Tapete e Rastrear Tapete. O Vendedor realiza os casos de uso Confirmar Venda, Confirmar o Despache do Produto e Rastrear Tapete.",
    "No diagrama estão presentes um retângulo com o nome de Máquina de venda de bilhetes, dois bonecos palito um escrito Viajante e o outro, Banco. Por fim há uma elipse com o nome Comprar bilhete e está ligada aos dois bonecos palito por meio de linhas simples",
    "No diagrama estão presentes um retângulo com o nome de Terra dos Tapetes, dois bonecos palitos com os nomes de Cliente e Vendedor respectivamente. Cliente está ligado a duas elipses por meio de linhas simples, a primeira tem o nome de Comprar Tapete e a segunda, Rastrear Tapete. Vendedor está ligado a três elipses por meio de linhas simples, a primeira tem nome de Confirmar Venda, a segunda tem nome de Confirmar o Despache do Produto e a terceira, Rastrear Tapete.",
    "No diagrama estão presentes um retângulo como o nome de Aplicativo Bancário, um boneco palito com o nome de Cliente que está ligado a uma elipse por meio de uma linha simples, essa elipse tem o nome de Transação Bancária e ela está ligada a outra elipse por meio de uma linha tracejada com uma seta apontando para a outra. Essa outra elipse tem o nome de Autenticação. Por cima da linha tracejada há um campo vazio faltando o nome que deveria estar escrito por cima da linha.",
    "No diagrama estão presentes um retângulo com o nome de Terra dos Tapetes, dois bonecos palitos com os nomes de Cliente e Vendedor respectivamente. Cliente está ligado a duas elipses por meio de linhas simples, a primeira tem o nome de Comprar Tapete e a segunda, Rastrear Tapete. Vendedor está ligado a três elipses por meio de linhas simples, a primeira tem nome de Confirmar Venda, a segunda tem nome de Confirmar o Despache do Produto e a terceira, Rastrear Tapete.",
    "No diagrama estão presentes um retângulo com o nome de Terminal de ponto de vendas, possui duas elipses com os seguintes nomes: Pagamento e Administrar usuários. Pagamento está ligada por linhas simples a três bonecos palito com os seguintes nomes: Cliente, Atendente e Serviço de Pagamento. Já Administrar usuários está ligada por uma linha simples a um quarto boneco palito cujo nome é Administrador.",
    "No diagrama estão presentes um retângulo como o nome de Site de compra de eletrodomésticos, um boneco palito com o nome de Cliente que está ligado a uma elipse por meio de uma linha simples, essa elipse tem o nome de Cadastrar-se e ela está ligada a outra elipse por meio de uma linha tracejada com uma seta apontando para Cadastrar-se. Essa outra elipse tem o nome de Obter ajuda com o cadastro. Por cima da linha tracejada há um campo vazio faltando o nome que deveria estar escrito por cima da linha.",
    "No diagrama estão presentes um retângulo com o nome de Terminal de ponto de vendas, possui duas elipses com os seguintes nomes: Pagamento e Administrar usuários. Pagamento está ligada por linhas simples a três bonecos palito com os seguintes nomes: Cliente, Atendente e Serviço de Pagamento. Já Administrar usuários está ligada por uma linha simples a um quarto boneco palito cujo nome é Administrador."
];

const alternativas = [
    "Aplicativo Bancário",
    "Terra dos Lanches",
    "Terra dos Tapetes",
    "Terra das Cadeiras",

    "Viajante",
    "Viajante e Máquina de venda de Bilhetes",
    "Viajante, Máquina de venda de Bilhetes e Banco",
    "Viajante e Banco",

    "Comprar Tapete",
    "Confirmar Venda",
    "Confirmar o Despache do Produto",
    "Rastrear Tapete",

    "<<include>>",
    "<<generalization>>",
    "<<extend>>",
    "<<use_case>>",

    "Comprar Tapete",
    "Confirmar Venda",
    "Confirmar o Despache do Produto",
    "Rastrear Tapete",

    "1",
    "2",
    "3",
    "4",

    "<<include>>",
    "<<generalization>>",
    "<<extend>>",
    "<<use_case>>",

    "1",
    "2",
    "3",
    "4"
];
const corretas = [2, 7, 11, 12, 16, 23, 26, 29]; //MUDAR O X DO CONFEREALTERNATIVA PARA CADA VILÃO
const dicas = [
    "Dica: Está relacionado com o que se pode comprar ali",
    "Dica: Os atores são representados por bonecos palito",
    "Dica: Observe a quantidade de linhas ligadas a cada um",
    "Dica: Sempre ocorre quando o caso de uso base ocorre",
    "Dica: Repare nas ligações",
    "Dica: Os atores são representados por bonecos palito",
    "Dica: Pode ou não ocorrer quando o caso de uso base ocorre",
    "Dica: Os casos de uso são representados por elipses"
];

export default V3;