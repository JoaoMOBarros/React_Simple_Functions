import React from 'react'
import '../data/produtos'
import produtos from '../data/produtos'

function Repeticao(props){

    function getProdutos(){
        return produtos.map(prod=>{
            return(
            <li key={prod.id }>{prod.id} - {prod.nome} -> {prod.preco} Rupias</li>
            )
        })
    }

    return(
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutos()}
            </ul>
        </div>
    )
}

export default Repeticao