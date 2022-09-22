import React, {/*useEffect, */useState} from 'react';
import './V.css';
import {Link} from 'react-router-dom';
//import axios from 'axios';
import Alternativa from './components/Alternativa';
import Dica from './components/Dica';
import Qimg1_3_5_7 from './components/imgs/V4Q1e3e5e7(1).png';
import Qimg2_6 from './components/imgs/V4Q2e6.png';
import Qimg4_8_9 from './components/imgs/V4Q4e8e9.png';
import Correct from './components/correct.mp3';
import Incorrect from './components/incorrect.mp3';
import Victory from './components/victory.mp3';
import Lose from './components/lose.mp3';
import HeR from './components/HeR';

function V4(props){
    const [questao, setQuestao] = useState(0);
    const [alternativa, setAlternativa] = useState(0);
    const [dica, setDica] = useState(0);
    const [vpv, setVpv] = useState(6);
    const [hpv, setHpv] = useState(4);
    const [hwin, setHwin] = useState(false);
    const [vwin, setVwin] = useState(false);
    const [usouh, setUsouh] = useState(false);
    const [desativah, setDesativah] = useState(false);
    const [hcor, setHcor] = useState('#DEDEDE');
    const [victory] = useState({audio: new Audio(Victory)});
    const [lose] = useState({audio: new Audio(Lose)});
    //const [fases, setFases] = useState([]);

   /* useEffect(() => {
            axios.get('https://62aa160c371180affbcf1820.mockapi.io/viloes')
                .then(res => {
                  const fase = res.data;
                  setFases(fase);
                })
                .catch(error => console.log(error))
    }, [])*/

    /*const updateAPIData = async () => {
        await axios.put('https://62aa160c371180affbcf1820.mockapi.io/viloes/5', {"id":"5","desbloqueado":true})
    }*/

    const Habilidade = () => {
        if(hpv <= 2 && desativah === false){
            setUsouh(true);
        }
    }

    const pausar = () => {
        victory.audio.pause();
        lose.audio.pause();
    }

    const jogarNovamente = () => {
        victory.audio.pause();
        victory.audio.currentTime = 0;
        lose.audio.pause();
        lose.audio.currentTime = 0;
        setQuestao(0);
        setAlternativa(0);
        setDica(0);
        setVpv(6);
        setHpv(4);
        setVwin(false);
        setHwin(false);
        setUsouh(false);
        setDesativah(false);
        setHcor('#DEDEDE');
    }

    function confereAlternativa(i){
        let certo = false;
        if(vpv > 0 && hpv > 0){
            for(let x = 0; x < corretas.length; x++){
                if(i + alternativa === corretas[x]){
                    certo = true;
                }
            }

            if(certo){
                if(props.acertarErrar){
                    let audio = new Audio(Correct);
                    audio.play();
                }
                if(vpv > 1){
                    setVpv(vpv - 1)
                    setQuestao(questao + 1)
                    setAlternativa(alternativa + 4)
                    setDica(dica + 1)
                    if(usouh){
                        setDesativah(true)
                        setUsouh(false)
                    }
                }
                else{
                    setVpv(vpv - 1)
                    setHwin(true)
                    if(usouh){
                        setDesativah(true)
                        setUsouh(false)
                    }                
                }
            }
            else{
                if(props.acertarErrar){
                    let audio = new Audio(Incorrect);
                    audio.play();
                }
                if(hpv > 1){
                    setHpv(hpv - 1)
                    setQuestao(questao + 1)
                    setAlternativa(alternativa + 4)
                    setDica(dica + 1)
                    if(usouh){
                        setDesativah(true)
                        setUsouh(false)
                    }

                }
                else{
                    setHpv(hpv - 1)
                    setVwin(true)
                    if(usouh){
                        setDesativah(true)
                        setUsouh(false)
                    }                
                }
            }
        }
    }

    function renderAlternativa(i){
        return <Alternativa value={alternativas[alternativa + i]} indice={i} onClick={() => confereAlternativa(i)}/>
    }

    function render(){
        let charada;
        if(hwin){
            charada = "Vencedor: Herói";
            if(!props.v5){
                props.alteraV5();
            }
        }
        else{
            if(vwin){
                charada = "Vencedor: Vilão";
            }
            else{
                charada = Questoes[questao];
            }
        }
        const vilao = "Vilão PV: " + vpv;
        const heroi = "Herói PV: " + hpv;

        if(hwin === true || vwin === true){
            if(hwin && props.ganharPerder){
                victory.audio.play();
            }
            else if(vwin && props.ganharPerder){
                lose.audio.play();
            }
            return(
                <div className='vcontainer'>
                <div className='pvs'>
                    <div className='vpv'>{vilao}</div>
                    <div className='hpv'>{heroi}</div>
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
                <div className='alternativas'>
                <div className='alternativasR1'>
                    {renderAlternativa(0)}
                    {renderAlternativa(1)}
                </div>
                <div className='alternativasR2'>
                    {renderAlternativa(2)}
                    {renderAlternativa(3)}
                </div>
                </div>
            </div>
            );
        }
        if(!desativah && hpv <= 2 && hcor === '#DEDEDE'){
            setHcor('#4791FF');
        }
        if(desativah && hcor === '#4791FF'){
            setHcor('#DEDEDE');
        }
        return(
            <div className='vcontainer'>
                <div className='pvs'>
                    <div className='vpv'>{vilao}</div>
                    <div className='hpv'>{heroi}</div>
                </div>
                <div className='charadasImg'>
                    <div>{charada}</div>
                    <div><img className='Qimg' src={Qimagens[questao]} alt={alts[questao]} /></div>
                </div>
                <HeR
                vwin={vwin}
                hwin={hwin}
                hcor={hcor}
                Habilidade={Habilidade} 
                />
                <div className='dicas'><Dica 
                dic={dicas[dica]} 
                usou={usouh} 
                pv={hpv}
                desativou={desativah}
                /></div>
                
                <div className='alternativas'>
                <div className='alternativasR1'>
                    {renderAlternativa(0)}
                    {renderAlternativa(1)}
                </div>
                <div className='alternativasR2'>
                    {renderAlternativa(2)}
                    {renderAlternativa(3)}
                </div>
                </div>
            </div>
        );
    }

    //Para combater trapaça
    //if(fases.length > 0){
       // if(fases[3].desbloqueado){
            return render();
      //  }
    //}
    //return render();
}

const Questoes = [
    "Qual dos casos de uso a seguir pode ou não ocorrer quando o caso de uso Comprar Produtos ocorrer?",
    "Qual dos atores no diagrama de casos de uso a seguir realiza a maior quantidade de casos de uso?",
    "No diagrama de casos de uso a seguir, além do ator Funcionário existe algum outro ator que também pode ser considerado como Funcionário?",
    "Qual(quais) caso(s) de uso sempre ocorre(m) quando o caso de uso Autorizar e Capturar ocorre?",
    "Qual dos casos de uso a seguir sempre ocorre quando o caso de uso Comprar Produtos ocorrer?",
    "Qual dos atores no diagrama de casos de uso a seguir realiza a menor quantidade de casos de uso?",
    "Quando o caso de uso Validar Usuário ocorre no exemplo a seguir?",
    "Qual dos atores realiza a maior quantidade de casos de uso no diagrama a seguir?",
    "Qual dos atores realiza a menor quantidade de casos de uso no diagrama a seguir?"
];

const Qimagens = [
    Qimg1_3_5_7,
    Qimg2_6,
    Qimg1_3_5_7,
    Qimg4_8_9,
    Qimg1_3_5_7,
    Qimg2_6,
    Qimg1_3_5_7,
    Qimg4_8_9,
    Qimg4_8_9
];

const alts = [
    "No diagrama estão presentes um retângulo com o nome de Site de vendas, três bonecos palito com os nomes de Cliente, Funcionário e Gerente. Também há seis elipses com os nomes de Comprar Produtos, Pendurar Conta, Validar Usuário, Solicitar Reembolso, Inicializar Sistema e Manter Usuários. Gerente está ligado por linhas simples às elipses Inicializar Sistema e Manter Usuários, além disso ele está ligado ao boneco palito Funcionário por meio de uma linha simples com uma seta apontando para Funcionário. Funcionário está ligado por uma linha simples à elipse Solicitar Reembolso. Cliente está ligado às elipses Comprar Produtos e Solicitar Reembolso por meio de linhas simples. Pendurar conta está ligada a Comprar Produtos por uma linha tracejada apontado para Comprar Produtos e com <<extend>> escrito em cima. Todas as elipses, com excessão de Pendurar Conta, estão ligadas a Validar Usuário por uma linha tracejada com uma seta apontando para Validar Usuário e com <<include>> escrito em cima.",
    "No diagrama estão presentes um retângulo com o nome de Caixa Bancário, três bonecos palito com os nomes de Cliente, Banco e Técnico. Além disso há cinco elipses com os nomes de Checar Saldo, Depositar, Sacar Dinheiro, Transferência Bancária e Manutenção. Cliente está ligado por linhas simples a Checar Saldo, Depositar, Sacar Dinheiro e Transferência Bancária. Técnico está ligado por linha simples a Manutenção. Por fim, Banco está ligado por linhas simples a todas as elipses.",
    "No diagrama estão presentes um retângulo com o nome de Site de vendas, três bonecos palito com os nomes de Cliente, Funcionário e Gerente. Também há seis elipses com os nomes de Comprar Produtos, Pendurar Conta, Validar Usuário, Solicitar Reembolso, Inicializar Sistema e Manter Usuários. Gerente está ligado por linhas simples às elipses Inicializar Sistema e Manter Usuários, além disso ele está ligado ao boneco palito Funcionário por meio de uma linha simples com uma seta apontando para Funcionário. Funcionário está ligado por uma linha simples à elipse Solicitar Reembolso. Cliente está ligado às elipses Comprar Produtos e Solicitar Reembolso por meio de linhas simples. Pendurar conta está ligada a Comprar Produtos por uma linha tracejada apontado para Comprar Produtos e com <<extend>> escrito em cima. Todas as elipses, com excessão de Pendurar Conta, estão ligadas a Validar Usuário por uma linha tracejada com uma seta apontando para Validar Usuário e com <<include>> escrito em cima.",
    "No diagrama estão presentes um retângulo com o nome de Gateway de pagamento com cartão de crédito, três bonecos palito com os nomes de Maquininha do Vendedor, Banco do Vendedor e Banco do Cliente. Também têm cinco elipses com nomes de Autorizar e Capturar, Verificar, Capturar, Autorizar e por fim Crédito. Maquininha do Vendedor está ligado a todas as elipses por linhas simples. Banco do vendedor está ligado a Capturar e a Crédito por linhas simples. Banco do Cliente está ligado a todas as elipses com excessão da Autorizar e Capturar. Por fim, Autorizar e Capturar está ligada à elipse Capturar e à elipse Autorizar, ambas por linhas tracejadas com setas apontando para elas e com <<include>> escrito por cima da linha.",
    "No diagrama estão presentes um retângulo com o nome de Site de vendas, três bonecos palito com os nomes de Cliente, Funcionário e Gerente. Também há seis elipses com os nomes de Comprar Produtos, Pendurar Conta, Validar Usuário, Solicitar Reembolso, Inicializar Sistema e Manter Usuários. Gerente está ligado por linhas simples às elipses Inicializar Sistema e Manter Usuários, além disso ele está ligado ao boneco palito Funcionário por meio de uma linha simples com uma seta apontando para Funcionário. Funcionário está ligado por uma linha simples à elipse Solicitar Reembolso. Cliente está ligado às elipses Comprar Produtos e Solicitar Reembolso por meio de linhas simples. Pendurar conta está ligada a Comprar Produtos por uma linha tracejada apontado para Comprar Produtos e com <<extend>> escrito em cima. Todas as elipses, com excessão de Pendurar Conta, estão ligadas a Validar Usuário por uma linha tracejada com uma seta apontando para Validar Usuário e com <<include>> escrito em cima.",
    "No diagrama estão presentes um retângulo com o nome de Caixa Bancário, três bonecos palito com os nomes de Cliente, Banco e Técnico. Além disso há cinco elipses com os nomes de Checar Saldo, Depositar, Sacar Dinheiro, Transferência Bancária e Manutenção. Cliente está ligado por linhas simples a Checar Saldo, Depositar, Sacar Dinheiro e Transferência Bancária. Técnico está ligado por linha simples a Manutenção. Por fim, Banco está ligado por linhas simples a todas as elipses.",
    "No diagrama estão presentes um retângulo com o nome de Site de vendas, três bonecos palito com os nomes de Cliente, Funcionário e Gerente. Também há seis elipses com os nomes de Comprar Produtos, Pendurar Conta, Validar Usuário, Solicitar Reembolso, Inicializar Sistema e Manter Usuários. Gerente está ligado por linhas simples às elipses Inicializar Sistema e Manter Usuários, além disso ele está ligado ao boneco palito Funcionário por meio de uma linha simples com uma seta apontando para Funcionário. Funcionário está ligado por uma linha simples à elipse Solicitar Reembolso. Cliente está ligado às elipses Comprar Produtos e Solicitar Reembolso por meio de linhas simples. Pendurar conta está ligada a Comprar Produtos por uma linha tracejada apontado para Comprar Produtos e com <<extend>> escrito em cima. Todas as elipses, com excessão de Pendurar Conta, estão ligadas a Validar Usuário por uma linha tracejada com uma seta apontando para Validar Usuário e com <<include>> escrito em cima.",
    "No diagrama estão presentes um retângulo com o nome de Gateway de pagamento com cartão de crédito, três bonecos palito com os nomes de Maquininha do Vendedor, Banco do Vendedor e Banco do Cliente. Também têm cinco elipses com nomes de Autorizar e Capturar, Verificar, Capturar, Autorizar e por fim Crédito. Maquininha do Vendedor está ligado a todas as elipses por linhas simples. Banco do vendedor está ligado a Capturar e a Crédito por linhas simples. Banco do Cliente está ligado a todas as elipses com excessão da Autorizar e Capturar. Por fim, Autorizar e Capturar está ligada à elipse Capturar e à elipse Autorizar, ambas por linhas tracejadas com setas apontando para elas e com <<include>> escrito por cima da linha.",
    "No diagrama estão presentes um retângulo com o nome de Gateway de pagamento com cartão de crédito, três bonecos palito com os nomes de Maquininha do Vendedor, Banco do Vendedor e Banco do Cliente. Também têm cinco elipses com nomes de Autorizar e Capturar, Verificar, Capturar, Autorizar e por fim Crédito. Maquininha do Vendedor está ligado a todas as elipses por linhas simples. Banco do vendedor está ligado a Capturar e a Crédito por linhas simples. Banco do Cliente está ligado a todas as elipses com excessão da Autorizar e Capturar. Por fim, Autorizar e Capturar está ligada à elipse Capturar e à elipse Autorizar, ambas por linhas tracejadas com setas apontando para elas e com <<include>> escrito por cima da linha."
];

const alternativas = [
    "Solicitar Reembolso",
    "Validar Usuário",
    "Pendurar Conta",
    "Inicializar Sistema",
    
    "Cliente",
    "Banco",
    "Técnico",
    "Caixa",
    
    "Sim, o ator Gerente",
    "Sim, o ator Cliente",
    "Não, apenas o próprio ator Funcionário",
    "Sim, o ator Gerente mas apenas quando o caso de uso Pendurar Conta ocorrer",
    
    "Autorizar",
    "Capturar",
    "Autorizar e Verificar",
    "Capturar e Autorizar",
    
    "Solicitar Reembolso",
    "Validar Usuário",
    "Pendurar Conta",
    "Inicializar Sistema",
    
    "Cliente",
    "Banco",
    "Técnico",
    "Caixa",
    
    "Apenas quando ocorrer o caso de uso Comprar Produtos ou o Solicitar Reembolso",
    "Apenas quando os casos de uso que o incluem ocorrerem simultaneamente",
    "Apenas quando ocorrer o caso de uso Comprar Produtos",
    "Apenas quando algum dos casos de uso que o incluem ocorrer",
    
    "Maquininha do vendedor",
    "Banco do vendedor",
    "Banco do cliente",
    "Todos realizam a mesma quantidade",
    
    "Maquininha do vendedor",
    "Banco do vendedor",
    "Banco do cliente",
    "Todos realizam a mesma quantidade"
];
const corretas = [2,5,8,15,17,22,27,28,33]; //MUDAR O X DO CONFEREALTERNATIVA PARA CADA VILÃO
const dicas = [
    "Dica: Isso é característico de um extend",
    "Dica: Repare na quantidade de linhas saindo de cada ator",
    "Dica: Isso acontece quando há uma relação de generalização",
    "Dica: Isso é característico de um include",
    "Dica: Isso é característico de um include",
    "Dica: Repare na quantidade de linhas saindo de cada ator",
    "Dica: Lembre que os includes sempre ocorrem quando um caso de uso base ao qual estão incluidos ocorre",
    "Dica: Repare na quantidade de linhas saindo de cada ator",
    "Dica: Repare na quantidade de linhas saindo de cada ator"
];
export default V4;