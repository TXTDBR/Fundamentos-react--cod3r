import React from 'react';
import If from './If';

export default props => {
    const  usuario  = props.usuario || {};
    return (
        <div>
            <If test={ usuario && usuario.nome }>
                Seja Bem vindo(a) <strong>{ usuario.nome }</strong>!
            </If>
            <If test={ usuario || !usuario.nome }>
                Seja Bem vindo(a) <strong>Amigão</strong>!
            </If>
        </div>
    )
}