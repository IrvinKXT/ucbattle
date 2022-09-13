import React, {useState} from 'react';
import './V.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Alternativa from './components/Alternativa';
import Dica from './components/Dica';

function V1(){
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

    const updateAPIData = async () => {
        await axios.put('https://62aa160c371180affbcf1820.mockapi.io/viloes/2', {"id":"2","desbloqueado":true})
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
        setVpv(3);
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
    "Um boneco palito","Uma elipse","Um retângulo","Um triângulo",
    "Uma funcionalidade do sistema","Um botão","Uma interação do ator com o sistema","Um diagrama",
    "Sempre ocorre quando o caso de uso base ocorre","Pode ou não ocorrer quando o caso de uso base ocorre","Sempre acontece imediatamente após o caso de uso base","Sempre acontece imediatamente antes do caso de uso base",
    "Um retângulo","Um triângulo","Um boneco palito","Uma elipse",
    "Sempre ocorre quando o caso de uso base ocorre","Se ele ocorrer, o caso de uso ocorrerá","Pode ou não ocorrer quando o caso de uso base ocorrer","Se ele ocorrer, o caso de uso base pode ou não ocorrer",
    "Um triângulo","Uma elipse","Um boneco palito","Um retângulo"
];
const corretas = [0,6,9,15,16,23]; //MUDAR O X DO CONFEREALTERNATIVA PARA CADA VILÃO
const dicas = [
    "Dica: Lembra uma pessoa",
    "Dica: Está relacionado a interação",
    "Dica: Característica principal é ser opcional",
    "Dica: Tem zero arestas",
    "Dica: Característica principal é não ser opcional",
    "Dica: Tem quatro ângulos de 90 graus"
];

export default V1;