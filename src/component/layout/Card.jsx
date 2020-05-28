import React from "react";
import "./Card.css";
function Card(props) {
    return (
        <div className="card">
            <div className="conteudo">{props.children}</div>
            <div
                className="footer"
                style={{ backgroundColor: props.color || "#000 " }}
            >
                {props.titulo}
            </div>
        </div>
    );
}
export default Card;
