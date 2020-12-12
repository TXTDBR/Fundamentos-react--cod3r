import React, { useState } from 'react';
import './input.css';

export default props => {
    const [valor, setValor] = useState('Inicial');

    function quandoMudar(e) {
        setValor(e.target.value);
    }

    return (
        <div className="input">
            <h2>{ valor }</h2>
            <div>
                <input type="text" value={valor} onChange={quandoMudar} />
                <input type="text" value={valor} readOnly />
            </div>
        </div>
    )
}