import React, { Component } from 'react';
import Display from './Display';
import PassoForm from './PassoForm';
import Botoes from './Botoes';

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    setPasso = novoPasso => {
        this.setState({
            passo: +novoPasso.target.value
        });
    }

    render() {
        return (
            <div>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes incrementar={this.inc} decrementar={this.dec} />
            </div>
        )
    }
}