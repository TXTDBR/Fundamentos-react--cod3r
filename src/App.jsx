import React from 'react';
import './app.css';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComponeteComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatório from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repetição/ListaAlunos';
import ListaProdutos from './components/repetição/ListaProdutos';
import ParOrImpar from './components/condicional/ParOrImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

export default () => {
    return (
        <div className="app">
            <h1>Fundamentos React</h1>
            <div className="cards">
                <Card titulo="#13 - Mega Sena" color="#006400">
                    <Mega qtd={6} />
                </Card>
                <Card titulo="#12 - Componente de Classe" color="#424242">
                    <Contador numeroInicial={10} />
                </Card>
                <Card titulo="#11 - Componente Controlado(input)" color="#FF8C00">
                    <Input />
                </Card>
                <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                    <IndiretaPai />
                </Card>
                <Card titulo="#9 - Comunicação Direta" color="#59323C">
                    <DiretaPai />
                </Card>
                <Card titulo="#8 - Condicional" color="#FF00FF">
                    <ParOrImpar numero={Math.floor(Math.random(5) * 10)}/>
                    <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                    <UsuarioInfo usuario={{ email: 'Fer@oi.com' }} />
                    <UsuarioInfo usuario={{}} />
                </Card>
                <Card titulo="#7 - Repetição Exercício" color="#FF423E">
                    <ListaProdutos/>
                </Card>
                <Card titulo="#6 - Repetição" color="#FF4C65">
                    <ListaAlunos/>
                </Card>
                <Card titulo="#5 - Componentes com Filhos" color="#00C8F8">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />   
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>
                </Card>
                <Card titulo="#4 - Exemplo Card" color="#FA6900">
                    <Aleatório min={40} max={60} />
                </Card>
                <Card titulo="#3 - Exemplo Card" color="#E94C6F">
                    <Fragmento />
                </Card>
                <Card titulo="#2 - Exemplo Card" color="#E8B71A">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Pedro Silva"
                        nota={8.6} />
                </Card>
                <Card titulo="#1 - Exemplo Card" color="#58BC73">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}