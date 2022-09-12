import React, {useEffect, useState} from 'react';
import './V.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Alternativa from './components/Alternativa';
import Dica from './components/Dica';
import Qimg1 from './components/imgs/V3Q1(1).png';
import Qimg2 from './components/imgs/V3Q2.png';
import Qimg3_5 from './components/imgs/V3Q3e5(1).png';
import Qimg4 from './components/imgs/V3Q4.png';
import Qimg6_8 from './components/imgs/V3Q6e8.png';
import Qimg7 from './components/imgs/V3Q7.png';

function V3(){
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
        await axios.put('https://62aa160c371180affbcf1820.mockapi.io/viloes/4', {"id":"4","desbloqueado":true})
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
        if(fases[2].desbloqueado){
            return render();
        }
    }
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

const alternativas = [
    "Aplicativo Bancário","Terra dos Lanches","Terra dos Tapetes","Terra das Cadeiras",
    "Viajante","Viajante e Máquina de venda de Bilhetes","Viajante, Máquina de venda de Bilhetes e Banco","Viajante e Banco",
    "Comprar Tapete","Confirmar Venda","Confirmar o Despache do Produto","Rastrear Tapete",
    "<<include>>","<<generalization>>","<<extend>>","<<use_case>>",
    "Comprar Tapete","Confirmar Venda","Confirmar o Despache do Produto","Rastrear Tapete",
    "1","2","3","4",
    "<<include>>","<<generalization>>","<<extend>>","<<use_case>>",
    "1","2","3","4"
];
const corretas = [2,7,11,12,16,23,26,29]; //MUDAR O X DO CONFEREALTERNATIVA PARA CADA VILÃO
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