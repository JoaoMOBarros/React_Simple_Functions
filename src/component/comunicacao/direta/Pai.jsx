import React from "react";
import Filho from "./Filho";

function Pai(props) {
    return (
        <div>
            <h3>Regiões Hyrule</h3>
            <Filho regiao="Gerudo Valley"></Filho>
            <Filho regiao="Zora Domain"></Filho>
            <Filho regiao="Goron City"></Filho>
            <Filho regiao="Rito Village"></Filho>
            <Filho {...props}></Filho>
        </div>
    );
}

export default Pai;
