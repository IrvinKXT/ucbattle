import React, {/*useEffect, */useState } from 'react';
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
import Q1 from './components/audios/V2Q1.m4a'
import Q2 from './components/audios/V2Q2.m4a'
import Q3 from './components/audios/V2Q3.m4a'
import Q4 from './components/audios/V2Q4.m4a'
import Q5 from './components/audios/V2Q5.m4a'
import Q6 from './components/audios/V2Q6.m4a'
import Q7 from './components/audios/V2Q7.m4a'

function V2(props) {
    const [questao, setQuestao] = useState(0);
    const [alternativa, setAlternativa] = useState(0);
    const [dica, setDica] = useState(0);
    const [vpv, setVpv] = useState(4);
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

    const narracao = [
        q1,
        q2,
        q3,
        q4,
        q5,
        q6,
        q7
    ];

    const narradica = [
        q1,
        q2,
        q3,
        q4,
        q5,
        q6,
        q7
    ];

    const playdica = () => {
        narradica[dica].audio.play();
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
        await axios.put('https://62aa160c371180affbcf1820.mockapi.io/viloes/3', {"id":"3","desbloqueado":true})
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
        setVpv(4);
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
            if (!props.v3) {
                props.alteraV3();
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
                        Habilidade={() => Habilidade()}
                    />
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
                <div className='charadas'>
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

    //Para combater trapaça
    // if(fases.length > 0){
    // if(fases[1].desbloqueado){
    return render();
    //}
    //}
    //return render();
}

const Questoes = [
    "Para o cenário do caso de uso de uma compra online a seguir, qual alternativa poderia preencher o passo que falta? \n" +
    //" \n" +
    "1. O cliente folheia o catálogo e seleciona itens para comprar \n" +
    "2. O cliente fecha a compra \n" +
    "3. O cliente escolhe a forma de entrega \n" +
    "4. O sistema apresenta o preço total \n" +
    "5. O cliente fornece os dados do cartão de crédito\n" +
    "6. O sistema autoriza a compra \n" +
    "7. O sistema confirma na tela a compra \n" +
    "8. _________________________________",
    //-------------------------------------------------------
    "Quantos cenários um caso de uso pode ter?",
    //---------------------------------------------------------
    "Para o cenário do caso de uso de inserir dinheiro numa máquina de bilhetes a seguir, qual alternativa poderia preencher o passo que falta?\n" +
    //" \n" +
    "1. ______________________________________________________\n" +
    "2. O Sistema mostra uma mensagem informando para o Cliente aguardar alguns instantes\n" +
    "3. O Sistema valida a nota de papel-moeda inserida\n" +
    "4. O Sistema adiciona o valor ao saldo disponível\n" +
    "5. O Sistema informa que a nota de papel-moeda foi aceita\n" +
    "6. O sistema informa o saldo atual",
    //--------------------------------------------------------
    "De que outro jeito pode ser chamado o Cenário Principal de Sucesso de um caso de uso?",
    //------------------------------------------------------------
    "Para o cenário do caso de uso de uma compra de tapetes a seguir, qual alternativa poderia preencher o passo que falta?\n" +
    //" \n" +
    "1.	Cliente busca o(s) tapete(s) que deseja por meio da barra de pesquisa e/ou os filtros disponíveis \n" +
    "2.	Sistema retorna todos os tapetes que atendem ao que foi buscado \n" +
    "3.	Cliente escolhe o(s) tapete(s) que deseja clicando em '+ carrinho' \n" +
    "4.	Sistema adiciona cada produto selecionado pelo cliente ao carrinho \n" +
    "5.	Cliente clica em 'carrinho' para visualizar o carrinho com os produtos adicionados \n" +
    "6.	Sistema mostra todos os produtos armazenados no carrinho \n" +
    "7.	Cliente clica em 'confirmar compra' para fazer o pedido \n" +
    "8.	Sistema armazena as informações dos produtos pedidos e o valor total e em seguida pede informações do cliente (Nome, Sexo, e-mail, telefone, endereço, CPF) \n" +
    "9.	Cliente preenche as lacunas com as informações requisitadas \n" +
    "10. Sistema avalia as informações recolhidas \n" +
    "11. Sistema armazena as informações recolhidas \n" +
    "12. Sistema pede para cliente escolher um método de pagamento (Débito, Crédito) \n" +
    "13. Cliente escolhe um método de pagamento \n" +
    "14. Sistema armazena o método de pagamento escolhido e pede para cliente preencher os dados do método de pagamento escolhido (número do cartão, senha) \n" +
    "15. Cliente preenche os dados requisitados \n" +
    "16. _______________________________________ \n" +
    "17. Sistema usa os dados recolhidos do método de pagamento para de fato cobrar o cliente por meio do banco do cartão informado e, assim, efetuar o pagamento \n" +
    "18. Sistema reconhece que foi feito o pagamento e retorna o recibo da compra para o cliente \n" +
    "19. Sistema atualiza status do pedido para aguardando aprovação do vendedor e envia-lhe uma notificação da compra",
    //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    "Qual das alternativas não é um possível ator de um caso de uso?",
    //---------------------------------------------------------------
    "Ao final de um fluxo alternativo é correto afirmar:"
];
const alternativas = [
    "O cliente envia um e-mail confirmando a compra",
    "O banco envia um e-mail confirmando a compra",
    "O gerente envia um e-mail confirmando a compra",
    "O sistema envia um e-mail confirmando a compra",

    "Apenas 1",
    "Menos que 10",
    "Mais que 10",
    "Quantos forem necessários",

    "O Cliente pega a carteira",
    "O Cliente insere uma nota de papel-moeda na máquina",
    "O Cliente escolhe a opção de imprimir bilhete",
    "O Cliente insere uma moeda na máquina",

    "Fluxo de Exceção",
    "Fluxo Principal",
    "Fluxo Alternativo",
    "Cenário Alternativo",

    "Sistema avalia as informações recolhidas",
    "Cliente avalia as informações recolhidas",
    "Sistema retorna as informações preenchidas",
    "Banco avalia as informações recolhidas",

    "Um Cliente",
    "Um Outro Caso de Uso",
    "Um Gerente",
    "Um Outro Sistema",

    "Sempre informa que voltará para o primeiro passo do fluxo principal",
    "Sempre informa que voltará para o último passo do fluxo principal",
    "Caso volte ao fluxo principal, informa para qual passo irá retornar",
    "Nunca retorna ao fluxo principal"
];
const corretas = [3, 7, 9, 13, 16, 21, 26]; //MUDAR O X DO CONFEREALTERNATIVA PARA CADA VILÃO
const dicas = [
    "Dica: No cenário só estão presentes o Cliente e o Sistema",
    "Dica: Varia para cada um",
    "Dica: Repare no passo 3",
    "Dica: Tem uma palavra em comum",
    "Dica: O passo 10 é um tanto curioso",
    "Dica: Alguns possíveis atores são pessoas ou até mesmo outros sistemas",
    "Dica: Depende do que estiver escrito"
];

export default V2;