import './index.css'
import React from 'react';
import ReactDOM from 'react-dom'

import Primeiro from './component/Primeiro.jsx'
import ComParametro from './component/ComParamentro.jsx'
import ComFilhos from './component/ComFilhos.jsx'

ReactDOM.render(
    <div>
        <Primeiro />
        <ComParametro titulo="The Legend of Zelda" subtitulo="Respirada do Profundo"/>
        <ComFilhos>
            <ul>
                <li>Van Naboris</li>
                <li>Van Medoh</li>
                <li>Van Ruta</li>
                <li>Van Rudania</li>
            </ul>
        </ComFilhos>
    </div>,
    document.getElementById('root')
    
)