import React, {useEffect, useState} from 'react';
import './V.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Alternativa from './components/Alternativa';
import Dica from './components/Dica';
import Qimg1_3_5_7 from './components/imgs/V4Q1e3e5e7(1).png';
import Qimg2_6 from './components/imgs/V4Q2e6.png';
import Qimg4_8_9 from './components/imgs/V4Q4e8e9.png';

function V4(){
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
    const [fases, setFases] = useState([]);

    useEffect(() => {
        const get = () => {
            axios.get('https://62aa160c371180affbcf1820.mockapi.io/viloes')
                .then(res => {
                  const fase = res.data;
                  setFases(fase);
                })
                .catch(error => console.log(error))
        }
        get()
    }, [])

    const updateAPIData = async () => {
        await axios.put('https://62aa160c371180affbcf1820.mockapi.io/viloes/5', {"id":"5","desbloqueado":true})
    }

    const Habilidade = () => {
        if(hpv <= 2 && desativah === false){
            setUsouh(true);
        }
    }

    const jogarNovamente = () => {
        window.location.reload();
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
                    <button className='botaohEr' style={{backgroundColor: hcor}} onClick={() => Habilidade()}>Habilidade</button>
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
                    <div><img className='Qimg' src={Qimagens[questao]} alt='AINDA TEM QUE FAZER' /></div>
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
    if(fases.length > 0){
        if(fases[3].desbloqueado){
            return render();
        }
    }
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

const alternativas = [
    "Solicitar Reembolso","Validar Usuário","Pendurar Conta","Inicializar Sistema",
    "Cliente","Banco","Técnico","Caixa",
    "Sim, o ator Gerente","Sim, o ator Cliente","Não, apenas o próprio ator Funcionário","Sim, o ator Gerente mas apenas quando o caso de uso Pendurar Conta ocorrer",
    "Autorizar","Capturar","Autorizar e Verificar","Capturar e Autorizar",
    "Solicitar Reembolso","Validar Usuário","Pendurar Conta","Inicializar Sistema",
    "Cliente","Banco","Técnico","Caixa",
    "Apenas quando ocorrer o caso de uso Comprar Produtos ou o Solicitar Reembolso","Apenas quando os casos de uso que o incluem ocorrerem simultaneamente","Apenas quando ocorrer o caso de uso Comprar Produtos","Apenas quando algum dos casos de uso que o incluem ocorrer",
    "Maquininha do vendedor","Banco do vendedor","Banco do cliente","Todos realizam a mesma quantidade",
    "Maquininha do vendedor","Banco do vendedor","Banco do cliente","Todos realizam a mesma quantidade"
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