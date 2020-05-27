import React from 'react'
import If from './If'

function Condicional(props){
    return(
    <div>
        <h2>O numero {props.numero} é</h2>
        <If test={props.numero % 2 === 0}> 
        <h3>Par</h3>
        </If>
        <If test={props.numero % 2 === 1}> 
        <h3>Impar</h3>
        </If>
    </div>
    )
}

export default Condicional