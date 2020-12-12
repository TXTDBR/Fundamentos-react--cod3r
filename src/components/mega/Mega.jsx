import React, { useState } from 'react';
import './mega.css';

export default props => {
    const numerosInciais = Array(props.qtd || 6).fill(0);
    const [numeros, setNumeros] = useState(numerosInciais);

    function aleatorio(max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function gerarNumero(qtd) {
        const array = [];
    
        do {
            const numero = aleatorio(1, 60);
            if(!array.includes(numero)){
                array.push(numero);
            }
        } while(array.length  < qtd);

        array.sort();

        setNumeros(array);
    }

    return (
        <div>
            <h2>Resultado</h2>
            {numeros.map((n, index) => {
                return <span className="numero" key={index}>{n} </span>                
            })}
            <br/>
            <button onClick={ _ => gerarNumero(props.qtd)}>Sortear Agora!</button>
        </div>
    )
}
