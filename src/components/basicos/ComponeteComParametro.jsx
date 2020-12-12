import React from 'react';

export default function (props) {
    console.log(props);
    const estado = props.nota >= 7 ? 'Aprovado' : 'Recuperação';
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p><strong>Aluno(a): </strong>{props.aluno}</p>
            <p><strong>Nota:</strong> {props.nota}</p>
            <p><strong>Conclusão:</strong> {estado} </p>
        </div>
    )
}