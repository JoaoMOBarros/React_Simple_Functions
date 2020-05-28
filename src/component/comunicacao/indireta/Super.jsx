import React, {useState} from "react";
import Sub from "./Sun";

function Super(props) {

    const [numero, setNumero] = useState(0)

    function GeradorDeRupia(valor){
        setNumero(valor, () => {
            alert("SEU PREMIO FOI " + numero + " RUPIAS!!!");
        });
    }

    return (
        <div>
            <h1>{numero}</h1>
            <Sub gr={GeradorDeRupia}></Sub>
        </div>
    );
}

export default Super;
