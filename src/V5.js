import React, {useEffect, useState} from 'react';
import './V.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Alternativa from './components/Alternativa';
import Dica from './components/Dica';
import Qimg1_5_8 from './components/imgs/v5q1e5e8.png';
import Qimg2 from './components/imgs/v5q2.png';
import Qimg3_7_10 from './components/imgs/v5q3e7e10.png';
import Qimg4_6_9 from './components/imgs/v5q4e6e9.png';
import Correct from './components/correct.mp3';
import Incorret from './components/incorrect.mp3';
import Victory from './components/victory.mp3';
import Lose from './components/lose.mp3';

function V5(){
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
    //const [fases, setFases] = useState([]);

   /* useEffect(() => {
            axios.get('https://62aa160c371180affbcf1820.mockapi.io/viloes')
                .then(res => {
                  const fase = res.data;
                  setFases(fase);
                })
                .catch(error => console.log(error))
    }, [])*/

    const updateAPIData = async () => {
        await axios.put('https://62aa160c371180affbcf1820.mockapi.io/viloes/5', {"id":"5","desbloqueado":true})
    }

    const Habilidade = () => {
        if(hpv <= 2 && desativah === false){
            setUsouh(true);
        }
    }

    const jogarNovamente = () => {
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

    function confereAlternativa(i){
        let certo = false;
        if(vpv > 0 && hpv > 0){
            for(let x = 0; x < corretas.length; x++){
                if(i + alternativa === corretas[x]){
                    certo = true;
                }
            }

            if(certo){
                let audio = new Audio(Correct);
                audio.play();
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
                let audio = new Audio(Incorret);
                audio.play();
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
            updateAPIData();
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
            if(hwin){
                let audio = new Audio(Victory);
                audio.play();
            }
            else if(vwin){
                let audio = new Audio(Lose);
                audio.play();
            }
            return(
                <div className='vcontainer'>
                <div className='pvs'>
                    <div className='vpv'>{vilao}</div>
                    <div className='hpv'>{heroi}</div>
                </div>
                <div className='charadas'>
                    <div>{charada}</div>
                </div>
                <div className='hEr'>
                    <button className='botaohEr' style={{backgroundColor: hcor}} >Habilidade</button>
                    <button className='botaohEr' style={{backgroundColor: '#FF0000'}}>Render-se</button>
                </div>
                <div className='botoesOpcoes'>
                    <Link to="/" tabIndex={-1} className='Link'>
                    <button className='botaoMeJ'>Menu Principal</button>
                    </Link>
                    <button className='botaoMeJ' onClick={() => jogarNovamente()}>Jogar Novamente</button>
                </div>
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
            setHcor('#0367FD');
        }
        if(desativah && hcor === '#0367FD'){
            setHcor('#DEDEDE');
        }
        return(
            <div className='vcontainer'>
                <div className='pvs'>
                    <div className='vpv'>{vilao}</div>
                    <div className='hpv'>{heroi}</div>
                </div>
                <div className='charadas'>
                    <div>{charada}</div>
                    <div><img className='Qimg' src={Qimagens[questao]} alt={alts[questao]} /></div>
                </div>
                <div className='dicas'><Dica 
                dic={dicas[dica]} 
                usou={usouh} 
                pv={hpv}
                desativou={desativah}
                /></div>
                <div className='hEr'>
                    <button className='botaohEr' style={{backgroundColor: hcor}} onClick={() => Habilidade()}>Habilidade</button>
                    <Link to="/" tabIndex={-1} className='Link'>
                    <button className='botaohEr' style={{backgroundColor: '#FF0000'}}>Render-se</button>
                    </Link>
                </div>
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
   // if(fases.length > 0){
     //   if(fases[4].desbloqueado){
            return render();
      //  }
   // }
    //return render();
}

const Questoes = [
    "Por quê os atores Cliente Registrado e Novo Cliente tem setas apontando para Cliente Web?",
    "Que tipo de relação o caso de uso Internação Ambulatorial tem com o caso de uso Internação de Paciente?",
    "Marque a alternativa correta com relação ao diagrama a seguir.",
    "Escolha a alternativa correta de acordo com a relação de generalização entre o caso de uso Internação do Paciente e os casos de uso Internação Ambulatorial e Internação Hospitalar.",
    "O que se pode afirmar sobre os atores Cliente Registrado e Novo Cliente em relação ao ator Cliente Web?",
    "Qual o total de casos de uso no diagrama a seguir?",
    "Quantos casos de uso existem no diagrama a seguir?",
    "Quando o caso de uso Realizar Compra ocorre, quantos outros também ocorrem?",
    "Quando o caso de uso Registrar Paciente ocorre, quantos outros podem ou não ocorrer?",
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
    "No diagrama estão presentes um retângulo com o nome de Compra Online, sete bonecos palito com os nomes de Cliente Web, Cliente Registrado, Novo Cliente, Autenticação, Provedor de Identidade, Serviço de Pagamento em Crédito e o último é PayPal. Também há quatro elipses com os nomes de Visualisar Itens, Realizar Compra, Confirmação e a última é Registro do Cliente. Cliente Registrado e Novo Cliente estão ligados a Cliente Web por linhas simples com setas apontando para Cliente Web. Cliente Registrado está ligado a Visualisar Itens e a Realizar Compra. Novo Cliente está ligado a Visualisar Itens e a Registro de Cliente. Autenticação está ligada a todas as elipses exceto a Realizar Compra. Provedor de Identidade está ligado a Visualisar Itens e a Confirmação. PayPal e Serviço de Pagamento em Crédito estão ligados a Confirmação. Por fim Realizar Compra está ligada a Visualisar Itens e a Confirmação por meio de linhas tracejadas com setas apontando para elas e escrito <<include>>.",
    "No diagrama estão presentes um retângulo com o nome de Recpção Hospitalar, um boneco palito com o nome de Recepcionista e nove elipses com os nomes de Agendar Consulta do Paciente, Agendar Internação do Paciente, Registrar Paciente, Internação de Paciente, Organizar Arquivos de Seguro, Arquivar Relatórios Médicos, Internação Ambulatorial, Internação Hospitalar e Cota de Cama. Recepcionista está ligado a todas as elipses com excessão de Internação Ambulatorial, Internação Hospitalar e Cota de Cama. Registrar Paciente está ligada por linhas tracejadas a Agendar Consulta do Paciente e a Agendar Internação do Paciente tendo setas apontando para as duas elipses. Registrar Paciente está ligado por linha tracejada a Internação de Paciente tendo seta apontando para Registrar Paciente. Internação Ambulatorial e Internação Hospitalar estão ligados a Internação de Paciente por linhas simples com seta apontando para Internação de Paciente. Por fim, Internação Hospitalar esta ligada a Cota de Cama por linha tracejada e com seta apontando para Cota de Cama.",
    "No diagrama estão presentes um retângulo com o nome de Restaurante, quatro bonecos palito com os nomes de Cliente, Anunciante, Fornecedor e Candidato. Também há seis elipses com os nomes de Refeição, Almoço, Jantar, Propaganda, Fornecer Suprimentos e Candidatar para o Trabalho. Cliente está ligado a Refeição, Anunciante está ligado a Propaganda, Fornecedor está ligado a Fornecer Suprimentos e Candidato está ligado a Candidatar para o Trabalho. Por fim, Refeição está ligada a Almoço e a Jantar por linha simples com seta apontando para Refeição.",
    "No diagrama estão presentes um retângulo com o nome de Recpção Hospitalar, um boneco palito com o nome de Recepcionista e nove elipses com os nomes de Agendar Consulta do Paciente, Agendar Internação do Paciente, Registrar Paciente, Internação de Paciente, Organizar Arquivos de Seguro, Arquivar Relatórios Médicos, Internação Ambulatorial, Internação Hospitalar e Cota de Cama. Recepcionista está ligado a todas as elipses com excessão de Internação Ambulatorial, Internação Hospitalar e Cota de Cama. Registrar Paciente está ligada por linhas tracejadas a Agendar Consulta do Paciente e a Agendar Internação do Paciente tendo setas apontando para as duas elipses e escrito <<extend>>. Registrar Paciente está ligado por linha tracejada a Internação de Paciente tendo seta apontando para Registrar Paciente e escrito <<include>>. Internação Ambulatorial e Internação Hospitalar estão ligados a Internação de Paciente por linhas simples com seta apontando para Internação de Paciente. Por fim, Internação Hospitalar esta ligada a Cota de Cama por linha tracejada e com seta apontando para Cota de Cama e escrito <<include>>.",
    "No diagrama estão presentes um retângulo com o nome de Compra Online, sete bonecos palito com os nomes de Cliente Web, Cliente Registrado, Novo Cliente, Autenticação, Provedor de Identidade, Serviço de Pagamento em Crédito e o último é PayPal. Também há quatro elipses com os nomes de Visualisar Itens, Realizar Compra, Confirmação e a última é Registro do Cliente. Cliente Registrado e Novo Cliente estão ligados a Cliente Web por linhas simples com setas apontando para Cliente Web. Cliente Registrado está ligado a Visualisar Itens e a Realizar Compra. Novo Cliente está ligado a Visualisar Itens e a Registro de Cliente. Autenticação está ligada a todas as elipses exceto a Realizar Compra. Provedor de Identidade está ligado a Visualisar Itens e a Confirmação. PayPal e Serviço de Pagamento em Crédito estão ligados a Confirmação. Por fim Realizar Compra está ligada a Visualisar Itens e a Confirmação por meio de linhas tracejadas com setas apontando para elas e escrito <<include>>.",
    "No diagrama estão presentes um retângulo com o nome de Recpção Hospitalar, um boneco palito com o nome de Recepcionista e nove elipses com os nomes de Agendar Consulta do Paciente, Agendar Internação do Paciente, Registrar Paciente, Internação de Paciente, Organizar Arquivos de Seguro, Arquivar Relatórios Médicos, Internação Ambulatorial, Internação Hospitalar e Cota de Cama. Recepcionista está ligado a todas as elipses com excessão de Internação Ambulatorial, Internação Hospitalar e Cota de Cama. Registrar Paciente está ligada por linhas tracejadas a Agendar Consulta do Paciente e a Agendar Internação do Paciente tendo setas apontando para as duas elipses e escrito <<extend>>. Registrar Paciente está ligado por linha tracejada a Internação de Paciente tendo seta apontando para Registrar Paciente e escrito <<include>>. Internação Ambulatorial e Internação Hospitalar estão ligados a Internação de Paciente por linhas simples com seta apontando para Internação de Paciente. Por fim, Internação Hospitalar esta ligada a Cota de Cama por linha tracejada e com seta apontando para Cota de Cama e escrito <<include>>.",
    "No diagrama estão presentes um retângulo com o nome de Restaurante, quatro bonecos palito com os nomes de Cliente, Anunciante, Fornecedor e Candidato. Também há seis elipses com os nomes de Refeição, Almoço, Jantar, Propaganda, Fornecer Suprimentos e Candidatar para o Trabalho. Cliente está ligado a Refeição, Anunciante está ligado a Propaganda, Fornecedor está ligado a Fornecer Suprimentos e Candidato está ligado a Candidatar para o Trabalho. Por fim, Refeição está ligada a Almoço e a Jantar por linha simples com seta apontando para Refeição.",
    "No diagrama estão presentes um retângulo com o nome de Compra Online, sete bonecos palito com os nomes de Cliente Web, Cliente Registrado, Novo Cliente, Autenticação, Provedor de Identidade, Serviço de Pagamento em Crédito e o último é PayPal. Também há quatro elipses com os nomes de Visualisar Itens, Realizar Compra, Confirmação e a última é Registro do Cliente. Cliente Registrado e Novo Cliente estão ligados a Cliente Web por linhas simples com setas apontando para Cliente Web. Cliente Registrado está ligado a Visualisar Itens e a Realizar Compra. Novo Cliente está ligado a Visualisar Itens e a Registro de Cliente. Autenticação está ligada a todas as elipses exceto a Realizar Compra. Provedor de Identidade está ligado a Visualisar Itens e a Confirmação. PayPal e Serviço de Pagamento em Crédito estão ligados a Confirmação. Por fim Realizar Compra está ligada a Visualisar Itens e a Confirmação por meio de linhas tracejadas com setas apontando para elas e escrito <<include>>.",
    "No diagrama estão presentes um retângulo com o nome de Recpção Hospitalar, um boneco palito com o nome de Recepcionista e nove elipses com os nomes de Agendar Consulta do Paciente, Agendar Internação do Paciente, Registrar Paciente, Internação de Paciente, Organizar Arquivos de Seguro, Arquivar Relatórios Médicos, Internação Ambulatorial, Internação Hospitalar e Cota de Cama. Recepcionista está ligado a todas as elipses com excessão de Internação Ambulatorial, Internação Hospitalar e Cota de Cama. Registrar Paciente está ligada por linhas tracejadas a Agendar Consulta do Paciente e a Agendar Internação do Paciente tendo setas apontando para as duas elipses e escrito <<extend>>. Registrar Paciente está ligado por linha tracejada a Internação de Paciente tendo seta apontando para Registrar Paciente e escrito <<include>>. Internação Ambulatorial e Internação Hospitalar estão ligados a Internação de Paciente por linhas simples com seta apontando para Internação de Paciente. Por fim, Internação Hospitalar esta ligada a Cota de Cama por linha tracejada e com seta apontando para Cota de Cama e escrito <<include>>.",
    "No diagrama estão presentes um retângulo com o nome de Restaurante, quatro bonecos palito com os nomes de Cliente, Anunciante, Fornecedor e Candidato. Também há seis elipses com os nomes de Refeição, Almoço, Jantar, Propaganda, Fornecer Suprimentos e Candidatar para o Trabalho. Cliente está ligado a Refeição, Anunciante está ligado a Propaganda, Fornecedor está ligado a Fornecer Suprimentos e Candidato está ligado a Candidatar para o Trabalho. Por fim, Refeição está ligada a Almoço e a Jantar por linha simples com seta apontando para Refeição."
];

const alternativas = [
    "Porque eles têm uma relação de inclusão com ele",
    "Porque eles têm uma relação de extensão com ele",
    "Porque eles têm uma relação de generalização com ele",
    "Porque eles realizam o caso de uso Cliente Web",

    "Include",
    "Extend",
    "Generalização",
    "Nenhuma",

    "Anunciante e Cliente possuem uma relação de generalização",
    "Refeição pode ser tanto um Almoço quanto um Jantar",
    "Refeição só ocorre se Fornecer Suprimentos ocorrer",
    "Jantar tem uma relação de extend com Refeição",

    "Os dois são versões mais específicas mas ainda são Internação de Paciente",
    "Funciona como um extend, os dois podem ou não ocorrer quando o caso de uso base ocorrer",
    "Funciona como um include, os dois sempre ocorrem quando o caso de uso base ocorrer",
    "Sempre que o caso de uso base ocorre, eles vão revezando em qual deles ocorrerá",

    "Os dois também são um Cliente Web",
    "Cliente Registrado é também um Cliente Web, mas Novo Cliente não é um Cliente Web",
    "Novo Cliente é também um Cliente Web, mas Cliente Registrado não é um Cliente Web",
    "Nenhum dos dois é também um Cliente Web",

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
const corretas = [2,6,9,12,16,22,26,30,33,39]; //MUDAR O X DO CONFEREALTERNATIVA PARA CADA VILÃO
const dicas = [
    "Dica: Repare na aparência da linha",
    "Dica: Internação Ambulatorial também é Internação de Paciente",
    "Dica: Lembre-se da relação de generalização",
    "Dica: Na generalização são feitos versões mais específicas de uma mais genérica",
    "Dica: Lembre-se da relação de generalização",
    "Dica: Os casos de uso são representados por elipses",
    "Dica: Os casos de uso são representados por elipses",
    "Dica: Lembre que os includes sempre ocorrem quando o caso de uso base ocorre",
    "Dica: Lembre que os extendes podem ou não ocorrer quando o caso de uso base ocorre",
    "Dica: Repare na quantidade de linhas saindo de cada um"
];

export default V5;