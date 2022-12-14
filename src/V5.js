import React, {/*useEffect, */useState } from 'react';
import './V.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Alternativa from './components/Alternativa';
import Dica from './components/Dica';
import Qimg1_5_8 from './components/imgs/v5q1e5e8.png';
import Qimg2 from './components/imgs/v5q2.png';
import Qimg3_7_10 from './components/imgs/v5q3e7e10.png';
import Qimg4_6_9 from './components/imgs/v5q4e6e9.png';
//import Correct from './components/correct.mp3';
//import Incorrect from './components/incorrect.mp3';
import Victory from './components/victory.mp3';
import Lose from './components/lose.mp3';
import HeR from './components/HeR';
import Corazon from './components/imgs/Corazon.png';
import Q1 from './components/audios/V5Q1.m4a'
import Q2 from './components/audios/V5Q2.m4a'
import Q3 from './components/audios/V5Q3.m4a'
import Q4 from './components/audios/V5Q4.m4a'
import Q5 from './components/audios/V5Q5.m4a'
import Q6 from './components/audios/V5Q6.m4a'
import Q7 from './components/audios/V5Q7.m4a'
import Q8 from './components/audios/V5Q8.m4a'
import Q9 from './components/audios/V5Q9.m4a'
import Q10 from './components/audios/V5Q10.m4a'
import D1 from './components/audios/V5q1d.m4a';
import D2 from './components/audios/V5q2d.m4a';
import D3 from './components/audios/V5q3d.m4a';
import D4 from './components/audios/V5q4d.m4a';
import D5 from './components/audios/V5q5d.m4a';
import D6 from './components/audios/V5q6e7d.m4a';
import D7 from './components/audios/V5q6e7d.m4a';
import D8 from './components/audios/V5q8d.m4a';
import D9 from './components/audios/V5q9d.m4a';
import D10 from './components/audios/V5q10d.m4a';

function V5(props) {
    const [questao, setQuestao] = useState(0);
    const [alternativa, setAlternativa] = useState(0);
    const [dica, setDica] = useState(0);
    const [vpv, setVpv] = useState(7);
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
    const [q9] = useState({audio: new Audio(Q9)});
    const [q10] = useState({audio: new Audio(Q10)});
    const [d1] = useState({audio: new Audio(D1)});
    const [d2] = useState({audio: new Audio(D2)});
    const [d3] = useState({audio: new Audio(D3)});
    const [d4] = useState({audio: new Audio(D4)});
    const [d5] = useState({audio: new Audio(D5)});
    const [d6] = useState({audio: new Audio(D6)});
    const [d7] = useState({audio: new Audio(D7)});
    const [d8] = useState({audio: new Audio(D8)});
    const [d9] = useState({audio: new Audio(D9)});
    const [d10] = useState({audio: new Audio(D10)});

    const narracao = [
        q1,
        q2,
        q3,
        q4,
        q5,
        q6,
        q7,
        q8,
        q9,
        q10
    ];

    const narradica = [
        d1,
        d2,
        d3,
        d4,
        d5,
        d6,
        d7,
        d8,
        d9,
        d10
    ];

    const playdica = () => {
        if (props.narracao) {
            narradica[dica].audio.play();
        }
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
                    <button className='Narra' onClick={() => narraRepeat()}>Repetir Narra????o</button>
                </div>
            )
        }
        else {
            return (
                <div>{""}</div>
            )
        }
    }

    /* useEffect(() => {
             axios.get('https://62aa160c371180affbcf1820.mockapi.io/viloes')
                 .then(res => {
                   const fase = res.data;
                   setFases(fase);
                 })
                 .catch(error => console.log(error))
     }, [])*/

    const updateAPIData = async () => {
        await axios.put('https://62aa160c371180affbcf1820.mockapi.io/viloes/5', { "id": "5", "desbloqueado": true })
    }

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
        setVpv(7);
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
        let parabens;
        if (hwin) {
            charada = "Vencedor: Her??i";
            parabens = "Parab??ns por derrotar todos os vil??es! Obrigado por jogar!";
            updateAPIData();
        }
        else {
            if (vwin) {
                charada = "Vencedor: Vil??o";
            }
            else {
                charada = Questoes[questao];
            }
        }
        const vilao = "Vil??o";
        const heroi = "Her??i";

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
                        <div>{parabens}</div>
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
                    <div className='charada'>{"Quest??o " + (questao + 1) + ". " + charada}</div>
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

    //Para combater trapa??a
    // if(fases.length > 0){
    //   if(fases[4].desbloqueado){
    return render();
    //  }
    // }
    //return render();
}

const Questoes = [
    "Por qu?? os atores Cliente Registrado e Novo Cliente tem setas apontando para Cliente Web?",
    "Que tipo de rela????o o caso de uso Interna????o Ambulatorial tem com o caso de uso Interna????o de Paciente?",
    "Marque a alternativa correta com rela????o ao diagrama a seguir.",
    "Escolha a alternativa correta de acordo com a rela????o de generaliza????o entre o caso de uso Interna????o do Paciente e os casos de uso Interna????o Ambulatorial e Interna????o Hospitalar.",
    "O que se pode afirmar sobre os atores Cliente Registrado e Novo Cliente em rela????o ao ator Cliente Web?",
    "Qual o total de casos de uso no diagrama a seguir?",
    "Quantos casos de uso existem no diagrama a seguir?",
    "Quando o caso de uso Realizar Compra ocorre, quantos outros tamb??m ocorrem?",
    "Quando o caso de uso Registrar Paciente ocorre, quantos outros podem ou n??o ocorrer?",
    "Qual dos atores no diagrama a seguir realiza a maior quantidade de casos de uso?"
];

const Qimagens = [
    Qimg1_5_8,
    Qimg2,
    Qimg3_7_10,
    Qimg4_6_9,
    Qimg1_5_8,
    Qimg4_6_9,
    Qimg3_7_10,
    Qimg1_5_8,
    Qimg4_6_9,
    Qimg3_7_10
];

const alts = [
    "No diagrama est??o presentes um ret??ngulo com o nome de Compra Online, sete bonecos palito com os nomes de Cliente Web, Cliente Registrado, Novo Cliente, Autentica????o, Provedor de Identidade, Servi??o de Pagamento em Cr??dito e o ??ltimo ?? PayPal. Tamb??m h?? quatro elipses com os nomes de Visualisar Itens, Realizar Compra, Confirma????o e a ??ltima ?? Registro do Cliente. Cliente Registrado e Novo Cliente est??o ligados a Cliente Web por linhas simples com setas apontando para Cliente Web. Cliente Registrado est?? ligado a Visualisar Itens e a Realizar Compra. Novo Cliente est?? ligado a Visualisar Itens e a Registro de Cliente. Autentica????o est?? ligada a todas as elipses exceto a Realizar Compra. Provedor de Identidade est?? ligado a Visualisar Itens e a Confirma????o. PayPal e Servi??o de Pagamento em Cr??dito est??o ligados a Confirma????o. Por fim Realizar Compra est?? ligada a Visualisar Itens e a Confirma????o por meio de linhas tracejadas com setas apontando para elas e escrito <<include>>.",
    "No diagrama est??o presentes um ret??ngulo com o nome de Recp????o Hospitalar, um boneco palito com o nome de Recepcionista e nove elipses com os nomes de Agendar Consulta do Paciente, Agendar Interna????o do Paciente, Registrar Paciente, Interna????o de Paciente, Organizar Arquivos de Seguro, Arquivar Relat??rios M??dicos, Interna????o Ambulatorial, Interna????o Hospitalar e Cota de Cama. Recepcionista est?? ligado a todas as elipses com excess??o de Interna????o Ambulatorial, Interna????o Hospitalar e Cota de Cama. Registrar Paciente est?? ligada por linhas tracejadas a Agendar Consulta do Paciente e a Agendar Interna????o do Paciente tendo setas apontando para as duas elipses. Registrar Paciente est?? ligado por linha tracejada a Interna????o de Paciente tendo seta apontando para Registrar Paciente. Interna????o Ambulatorial e Interna????o Hospitalar est??o ligados a Interna????o de Paciente por linhas simples com seta apontando para Interna????o de Paciente. Por fim, Interna????o Hospitalar esta ligada a Cota de Cama por linha tracejada e com seta apontando para Cota de Cama.",
    "No diagrama est??o presentes um ret??ngulo com o nome de Restaurante, quatro bonecos palito com os nomes de Cliente, Anunciante, Fornecedor e Candidato. Tamb??m h?? seis elipses com os nomes de Refei????o, Almo??o, Jantar, Propaganda, Fornecer Suprimentos e Candidatar para o Trabalho. Cliente est?? ligado a Refei????o, Anunciante est?? ligado a Propaganda, Fornecedor est?? ligado a Fornecer Suprimentos e Candidato est?? ligado a Candidatar para o Trabalho. Por fim, Refei????o est?? ligada a Almo??o e a Jantar por linha simples com seta apontando para Refei????o.",
    "No diagrama est??o presentes um ret??ngulo com o nome de Recp????o Hospitalar, um boneco palito com o nome de Recepcionista e nove elipses com os nomes de Agendar Consulta do Paciente, Agendar Interna????o do Paciente, Registrar Paciente, Interna????o de Paciente, Organizar Arquivos de Seguro, Arquivar Relat??rios M??dicos, Interna????o Ambulatorial, Interna????o Hospitalar e Cota de Cama. Recepcionista est?? ligado a todas as elipses com excess??o de Interna????o Ambulatorial, Interna????o Hospitalar e Cota de Cama. Registrar Paciente est?? ligada por linhas tracejadas a Agendar Consulta do Paciente e a Agendar Interna????o do Paciente tendo setas apontando para as duas elipses e escrito <<extend>>. Registrar Paciente est?? ligado por linha tracejada a Interna????o de Paciente tendo seta apontando para Registrar Paciente e escrito <<include>>. Interna????o Ambulatorial e Interna????o Hospitalar est??o ligados a Interna????o de Paciente por linhas simples com seta apontando para Interna????o de Paciente. Por fim, Interna????o Hospitalar esta ligada a Cota de Cama por linha tracejada e com seta apontando para Cota de Cama e escrito <<include>>.",
    "No diagrama est??o presentes um ret??ngulo com o nome de Compra Online, sete bonecos palito com os nomes de Cliente Web, Cliente Registrado, Novo Cliente, Autentica????o, Provedor de Identidade, Servi??o de Pagamento em Cr??dito e o ??ltimo ?? PayPal. Tamb??m h?? quatro elipses com os nomes de Visualisar Itens, Realizar Compra, Confirma????o e a ??ltima ?? Registro do Cliente. Cliente Registrado e Novo Cliente est??o ligados a Cliente Web por linhas simples com setas apontando para Cliente Web. Cliente Registrado est?? ligado a Visualisar Itens e a Realizar Compra. Novo Cliente est?? ligado a Visualisar Itens e a Registro de Cliente. Autentica????o est?? ligada a todas as elipses exceto a Realizar Compra. Provedor de Identidade est?? ligado a Visualisar Itens e a Confirma????o. PayPal e Servi??o de Pagamento em Cr??dito est??o ligados a Confirma????o. Por fim Realizar Compra est?? ligada a Visualisar Itens e a Confirma????o por meio de linhas tracejadas com setas apontando para elas e escrito <<include>>.",
    "No diagrama est??o presentes um ret??ngulo com o nome de Recp????o Hospitalar, um boneco palito com o nome de Recepcionista e nove elipses com os nomes de Agendar Consulta do Paciente, Agendar Interna????o do Paciente, Registrar Paciente, Interna????o de Paciente, Organizar Arquivos de Seguro, Arquivar Relat??rios M??dicos, Interna????o Ambulatorial, Interna????o Hospitalar e Cota de Cama. Recepcionista est?? ligado a todas as elipses com excess??o de Interna????o Ambulatorial, Interna????o Hospitalar e Cota de Cama. Registrar Paciente est?? ligada por linhas tracejadas a Agendar Consulta do Paciente e a Agendar Interna????o do Paciente tendo setas apontando para as duas elipses e escrito <<extend>>. Registrar Paciente est?? ligado por linha tracejada a Interna????o de Paciente tendo seta apontando para Registrar Paciente e escrito <<include>>. Interna????o Ambulatorial e Interna????o Hospitalar est??o ligados a Interna????o de Paciente por linhas simples com seta apontando para Interna????o de Paciente. Por fim, Interna????o Hospitalar esta ligada a Cota de Cama por linha tracejada e com seta apontando para Cota de Cama e escrito <<include>>.",
    "No diagrama est??o presentes um ret??ngulo com o nome de Restaurante, quatro bonecos palito com os nomes de Cliente, Anunciante, Fornecedor e Candidato. Tamb??m h?? seis elipses com os nomes de Refei????o, Almo??o, Jantar, Propaganda, Fornecer Suprimentos e Candidatar para o Trabalho. Cliente est?? ligado a Refei????o, Anunciante est?? ligado a Propaganda, Fornecedor est?? ligado a Fornecer Suprimentos e Candidato est?? ligado a Candidatar para o Trabalho. Por fim, Refei????o est?? ligada a Almo??o e a Jantar por linha simples com seta apontando para Refei????o.",
    "No diagrama est??o presentes um ret??ngulo com o nome de Compra Online, sete bonecos palito com os nomes de Cliente Web, Cliente Registrado, Novo Cliente, Autentica????o, Provedor de Identidade, Servi??o de Pagamento em Cr??dito e o ??ltimo ?? PayPal. Tamb??m h?? quatro elipses com os nomes de Visualisar Itens, Realizar Compra, Confirma????o e a ??ltima ?? Registro do Cliente. Cliente Registrado e Novo Cliente est??o ligados a Cliente Web por linhas simples com setas apontando para Cliente Web. Cliente Registrado est?? ligado a Visualisar Itens e a Realizar Compra. Novo Cliente est?? ligado a Visualisar Itens e a Registro de Cliente. Autentica????o est?? ligada a todas as elipses exceto a Realizar Compra. Provedor de Identidade est?? ligado a Visualisar Itens e a Confirma????o. PayPal e Servi??o de Pagamento em Cr??dito est??o ligados a Confirma????o. Por fim Realizar Compra est?? ligada a Visualisar Itens e a Confirma????o por meio de linhas tracejadas com setas apontando para elas e escrito <<include>>.",
    "No diagrama est??o presentes um ret??ngulo com o nome de Recp????o Hospitalar, um boneco palito com o nome de Recepcionista e nove elipses com os nomes de Agendar Consulta do Paciente, Agendar Interna????o do Paciente, Registrar Paciente, Interna????o de Paciente, Organizar Arquivos de Seguro, Arquivar Relat??rios M??dicos, Interna????o Ambulatorial, Interna????o Hospitalar e Cota de Cama. Recepcionista est?? ligado a todas as elipses com excess??o de Interna????o Ambulatorial, Interna????o Hospitalar e Cota de Cama. Registrar Paciente est?? ligada por linhas tracejadas a Agendar Consulta do Paciente e a Agendar Interna????o do Paciente tendo setas apontando para as duas elipses e escrito <<extend>>. Registrar Paciente est?? ligado por linha tracejada a Interna????o de Paciente tendo seta apontando para Registrar Paciente e escrito <<include>>. Interna????o Ambulatorial e Interna????o Hospitalar est??o ligados a Interna????o de Paciente por linhas simples com seta apontando para Interna????o de Paciente. Por fim, Interna????o Hospitalar esta ligada a Cota de Cama por linha tracejada e com seta apontando para Cota de Cama e escrito <<include>>.",
    "No diagrama est??o presentes um ret??ngulo com o nome de Restaurante, quatro bonecos palito com os nomes de Cliente, Anunciante, Fornecedor e Candidato. Tamb??m h?? seis elipses com os nomes de Refei????o, Almo??o, Jantar, Propaganda, Fornecer Suprimentos e Candidatar para o Trabalho. Cliente est?? ligado a Refei????o, Anunciante est?? ligado a Propaganda, Fornecedor est?? ligado a Fornecer Suprimentos e Candidato est?? ligado a Candidatar para o Trabalho. Por fim, Refei????o est?? ligada a Almo??o e a Jantar por linha simples com seta apontando para Refei????o."
];

const alternativas = [
    "Porque eles t??m uma rela????o de inclus??o com ele",
    "Porque eles t??m uma rela????o de extens??o com ele",
    "Porque eles t??m uma rela????o de generaliza????o com ele",
    "Porque eles realizam o caso de uso Cliente Web",

    "Include",
    "Extend",
    "Generaliza????o",
    "Nenhuma",

    "Anunciante e Cliente possuem uma rela????o de generaliza????o",
    "Refei????o pode ser tanto um Almo??o quanto um Jantar",
    "Refei????o s?? ocorre se Fornecer Suprimentos ocorrer",
    "Jantar tem uma rela????o de extend com Refei????o",

    "Os dois s??o vers??es mais espec??ficas mas ainda s??o Interna????o de Paciente",
    "Funciona como um extend, os dois podem ou n??o ocorrer quando o caso de uso base ocorrer",
    "Funciona como um include, os dois sempre ocorrem quando o caso de uso base ocorrer",
    "Sempre que o caso de uso base ocorre, eles v??o revezando em qual deles ocorrer??",

    "Os dois tamb??m s??o um Cliente Web",
    "Cliente Registrado ?? tamb??m um Cliente Web, mas Novo Cliente n??o ?? um Cliente Web",
    "Novo Cliente ?? tamb??m um Cliente Web, mas Cliente Registrado n??o ?? um Cliente Web",
    "Nenhum dos dois ?? tamb??m um Cliente Web",

    "2",
    "6",
    "9",
    "10",

    "4",
    "5",
    "6",
    "7",

    "0",
    "1",
    "2",
    "3",

    "1",
    "2",
    "3",
    "4",

    "Cliente",
    "Anunciante",
    "Fornecedor",
    "Todos realizam a mesma quantidade"
];
const corretas = [2, 6, 9, 12, 16, 22, 26, 30, 33, 39]; //MUDAR O X DO CONFEREALTERNATIVA PARA CADA VIL??O
const dicas = [
    "Dica: Repare na apar??ncia da linha",
    "Dica: Interna????o Ambulatorial tamb??m ?? Interna????o de Paciente",
    "Dica: Lembre-se da rela????o de generaliza????o",
    "Dica: Na generaliza????o s??o feitos vers??es mais espec??ficas de uma mais gen??rica",
    "Dica: Lembre-se da rela????o de generaliza????o",
    "Dica: Os casos de uso s??o representados por elipses",
    "Dica: Os casos de uso s??o representados por elipses",
    "Dica: Lembre que os includes sempre ocorrem quando o caso de uso base ocorre",
    "Dica: Lembre que os extendes podem ou n??o ocorrer quando o caso de uso base ocorre",
    "Dica: Repare na quantidade de linhas saindo de cada um"
];

export default V5;