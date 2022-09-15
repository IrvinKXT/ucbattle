import React, {useEffect, useState} from 'react';
import './V.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Alternativa from './components/Alternativa';
import Dica from './components/Dica';
import Correct from './components/correct.mp3';
import Incorret from './components/incorrect.mp3';
import Victory from './components/victory.mp3';
import Lose from './components/lose.mp3';

function V2(){
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
    //const [fases, setFases] = useState([]);

    /*useEffect(() => {
            axios.get('https://62aa160c371180affbcf1820.mockapi.io/viloes')
                .then(res => {
                  const fase = res.data;
                  setFases(fase);
                })
                .catch(error => console.log(error))
    }, [])*/

    const updateAPIData = async () => {
        await axios.put('https://62aa160c371180affbcf1820.mockapi.io/viloes/3', {"id":"3","desbloqueado":true})
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
        setVpv(4);
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
                    <button className='botaohEr' style={{backgroundColor: hcor}}>Habilidade</button>
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
    "Qual desses não é um possível ator de um caso de uso?",
    //---------------------------------------------------------------
    "Ao final de um fluxo alternativo é correto afirmar:"
];
const alternativas = [
    "O cliente envia um e-mail confirmando a compra","O banco envia um e-mail confirmando a compra","O gerente envia um e-mail confirmando a compra","O sistema envia um e-mail confirmando a compra",
    "Apenas 1","Menos que 10","Mais que 10","Quantos forem necessários",
    "O Cliente pega a carteira","O Cliente insere uma nota de papel-moeda na máquina","O Cliente escolhe a opção de imprimir bilhete","O Cliente insere uma moeda na máquina",
    "Fluxo de Exceção","Fluxo Principal","Fluxo Alternativo","Cenário Alternativo",
    "Sistema avalia as informações recolhidas","Cliente avalia as informações recolhidas","Sistema retorna as informações preenchidas","Banco avalia as informações recolhidas",
    "Um Cliente","Um Outro Caso de Uso","Um Gerente","Um Outro Sistema",
    "Sempre informa que voltará para o primeiro passo do fluxo principal","Sempre informa que voltará para o último passo do fluxo principal","Caso volte ao fluxo principal, informa para qual passo irá retornar","Nunca retorna ao fluxo principal"
];
const corretas = [3,7,9,13,16,21,26]; //MUDAR O X DO CONFEREALTERNATIVA PARA CADA VILÃO
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