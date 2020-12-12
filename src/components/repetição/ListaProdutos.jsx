import React from 'react';
import produtos from '../../data/produtos';

export default props => {

    const listaProdutos = produtos.map(p => {
        return (
            <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.nome}</td>
                <td>{ p.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</td>
            </tr>
        )
    })

    return (
        <table>
            <tbody>
                <tr>
                    <td>ID</td>
                    <td>Nome</td>
                    <td>Preço</td>
                </tr>
                {listaProdutos}
            </tbody>
        </table>
    )
}