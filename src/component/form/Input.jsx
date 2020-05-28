import React, { useState } from "react";
import If from "../If"

function Input(drops) {
    const [nome, setNome] = useState("");

    return (
        <div>
            <h2>Qual o nome do protagonista de Zelda?</h2>

            {nome === "Link" ?  <h3 style={{ color: "#598234" }}>{nome}</h3>: <h3 style={{ color: "#000000" }}>{nome}</h3>}
            <If test={nome === "Zelda"}>
            <h3 style={{ color: "#FB6542" }}>Get out of here, your piece of s***!</h3>
            </If>
            <input
                type="text"
                onChange={(e) => setNome(e.target.value)}
                value={nome}
            />

            
        </div>
    );
}

export default Input;
