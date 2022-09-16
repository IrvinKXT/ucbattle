import React from 'react';
import '../V.css';
import { Link } from 'react-router-dom';

function HeR(props) {
    if (props.vwin || props.hwin) {
        return (
            <div className='hEr'>
                <button className='botaohEr' style={{ backgroundColor: props.hcor }} tabIndex={-1}>Habilidade</button>
                <button className='botaohEr' style={{ backgroundColor: '#FF0000' }} tabIndex={-1}>Render-se</button>
            </div>
        );
    }
    else {
        return (
            <div className='hEr'>
                <button className='botaohEr' style={{ backgroundColor: props.hcor }} onClick={props.Habilidade}>Habilidade</button>
                <Link to="/" tabIndex={-1} className='Link'>
                    <button className='botaohEr' style={{ backgroundColor: '#FF0000' }}>Render-se</button>
                </Link>
            </div>
        );
    }
}

export default HeR;