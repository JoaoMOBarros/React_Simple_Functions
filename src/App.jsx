import React from 'react';
import './App.css'

import Primeiro from './component/Primeiro.jsx'
import ComParametro from './component/ComParamentro.jsx'
import ComFilhos from './component/ComFilhos.jsx'
import Repeticao from './component/Repeticao.jsx'
import Condicional from './component/Condicional.jsx'
import CondicionalIf from './component/CondicinalIf.jsx'

import Pai from './component/comunicacao/direta/Pai.jsx'
import Super from './component/comunicacao/indireta/Super.jsx'

import Input from './component/form/Input'
import InputBlock from './component/search/InputBlock'

import Login from './component/login'

import Card from './component/layout/Card'
import {Link} from 'react-router-dom'

export default(props)=>(
    <div>
        <div className="app">
        <Card>
            <Login/>
        </Card>

        <Card titulo="#10 - Search Function" color="#CC527A">
            <InputBlock/>
        </Card>

        <Card titulo="#09 - Input"  color="#E8175D">
            <Input/>
        </Card>

        <Card titulo="#08 - Comunicação Indireta" color="#474747">
            <Super/>
        </Card>

        <Card titulo="#07 - Comunicação Direta" color="#363636">
            <Pai regiao="Hyrule Castle"/>
        </Card>

        <Card titulo="#06 - Condicional com If tag" color="#A8A7A7">
            <CondicionalIf numero = {11}></CondicionalIf>
        </Card>
        
        <Card titulo="#05 - Condicional" color="#CC527A">
            <Condicional numero = {10}></Condicional>
        </Card>

        <Card titulo="#Bonus - Roteamento" color="#E8175D">
            <h1>This is Page 1</h1>
            <button>
                <Link to="/2">
                    Go To Page 2
                </Link>
            </button>
        </Card>
        
        <Card titulo="#04 - Repetição" color="#474747">
            <Repeticao/>
            
        </Card>

        <Card titulo="#03 - Terceiro Componente" color="#363636">
            <ComFilhos>
                <ul>
                    <li>Van Naboris</li>
                    <li>Van Medoh</li>
                    <li>Van Ruta</li>
                    <li>Van Rudania</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#02 - Segundo Componente" color="#A8A7A7">
            <ComParametro titulo="The Legend of Zelda" subtitulo="Respirada do Profundo"/>
        </Card>

        <Card titulo="#01 -  Primeiro Componente" color="#CC527A">
            <Primeiro />
        </Card>

    </div>,
    </div>
);