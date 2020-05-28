import React from "react";

function Sub(props) {

    function GeradorDeNumero(){
        props.gr(Math.ceil(Math.random()*1000))
    }

   return(
    <div>
        <h2>Gerador de rupias</h2>
        <button onClick={GeradorDeNumero}>Teste sua sorte</button>
    </div>
   )
}

export default Sub;
