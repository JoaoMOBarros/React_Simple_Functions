import React from "react";
import "./App.css";

import Primeiro from "./component/Primeiro.jsx";
import ComParametro from "./component/ComParamentro.jsx";
import ComFilhos from "./component/ComFilhos.jsx";
import Repeticao from "./component/Repeticao.jsx";
import Card from "./component/layout/Card";
import { Link } from "react-router-dom";

import ResultBlock from "./component/search/ResultBlock";

export default (props) => (
    <div>
        <div className="app">
            <Card>
                <ResultBlock/>
            </Card>
            <Card>
                <h1>This is page 2</h1>
                <button>
                    <Link to="/">Go To Page 1</Link>
                </button>
            </Card>
            <Card titulo="#04 - Repetição">
                <Repeticao />
            </Card>

            <Card titulo="#03 - Terceiro Componente">
                <ComFilhos>
                    <ul>
                        <li>Van Naboris</li>
                        <li>Van Medoh</li>
                        <li>Van Ruta</li>
                        <li>Van Rudania</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="#02 - Segundo Componente">
                <ComParametro
                    titulo="The Legend of Zelda"
                    subtitulo="Respirada do Profundo"
                />
            </Card>

            <Card titulo="#01 -  Primeiro Componente">
                <Primeiro />
            </Card>
        </div>
        ,
    </div>
);
