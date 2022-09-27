import React, { useState } from 'react';
import '../V.css';
import Correct from './correct.mp3';
import Incorrect from './incorrect.mp3';

function Alternativa(props) {
    const [acor0, setAcor0] = useState(props.acor)
    const [acor1, setAcor1] = useState(props.acor)
    const [acor2, setAcor2] = useState(props.acor)
    const [acor3, setAcor3] = useState(props.acor)
    const [clicou, setClicou] = useState(false);
    //setClicou(props.clicou);
    console.log("clicou: ", + clicou);
    console.log("props.clicou: ", + props.clicou);

    function delay(n) {
        return new Promise(function (resolve) {
            setTimeout(resolve, n * 1000);
        });
    }

    /*const reset = async () => {
        await delay(2);
        if (acor0 !== '#6DF030') {
            setAcor0('#6DF030');
        }
        if (acor1 !== '#6DF030') {
            setAcor1('#6DF030');
        }
        if (acor2 !== '#6DF030') {
            setAcor2('#6DF030');
        }
        if (acor3 !== '#6DF030') {
            setAcor3('#6DF030');
        }
        setClicou(false);
    }*/



    let cor = '#FF0000'



    const mudaCor = async (i) => {
        for (let x = 0; x < props.corretas.length; x = x + 1) {
            if (i + props.alternativa === props.corretas[x]) {
                cor = '#4791FF'

            }
        }
        if (!clicou) {
            if (cor === '#4791FF') {
                if (props.acertarErrar) {
                    let audio = new Audio(Correct);
                    audio.play();
                }

            }
            else if (cor === '#FF0000') {
                if (props.acertarErrar) {
                    let audio = new Audio(Incorrect);
                    audio.play();
                }
            }

            if (i === 0) {
                setAcor0(cor);
                setClicou(true);
                await delay(1);
                setAcor0('#6DF030');
                props.onClick(i);
                setClicou(false);
            }
            else if (i === 1) {
                setAcor1(cor);
                setClicou(true);
                await delay(1);
                setAcor1('#6DF030');
                props.onClick(i);
                setClicou(false);
            }
            else if (i === 2) {
                setAcor2(cor);
                setClicou(true);
                await delay(1);
                setAcor2('#6DF030');
                props.onClick(i);
                setClicou(false);
            }
            else {
                setAcor3(cor);
                setClicou(true);
                await delay(1);
                setAcor3('#6DF030');
                props.onClick(i);
                setClicou(false);
            }
            //props.mudaClicou();            
        }

    }



    if (props.vwin || props.hwin) {
        return (
            <div className='alternativas'>
                <div className='alternativasR1'>
                    <button className='botao_alternativa' style={{ backgroundColor: acor0 }} tabIndex={-1}>
                        {props.value0}
                    </button>
                    <button className='botao_alternativa' style={{ backgroundColor: acor1 }} tabIndex={-1}>
                        {props.value1}
                    </button>
                </div>
                <div className='alternativasR2'>
                    <button className='botao_alternativa' style={{ backgroundColor: acor2 }} tabIndex={-1}>
                        {props.value2}
                    </button>
                    <button className='botao_alternativa' style={{ backgroundColor: acor3 }} tabIndex={-1}>
                        {props.value3}
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className='alternativas'>
            <div className='alternativasR1'>
                <button className='botao_alternativa' style={{ backgroundColor: acor0 }} onClick={() => mudaCor(0)}>
                    {props.value0}
                </button>
                <button className='botao_alternativa' style={{ backgroundColor: acor1 }} onClick={() => mudaCor(1)}>
                    {props.value1}
                </button>
            </div>
            <div className='alternativasR2'>
                <button className='botao_alternativa' style={{ backgroundColor: acor2 }} onClick={() => mudaCor(2)}>
                    {props.value2}
                </button>
                <button className='botao_alternativa' style={{ backgroundColor: acor3 }} onClick={() => mudaCor(3)}>
                    {props.value3}
                </button>
            </div>
        </div>

    );
}

export default Alternativa;