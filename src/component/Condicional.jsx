import React from 'react'

function Condicional(props){
    return(
    <div>
        <h2>O numero {props.numero} é</h2>
        { props.numero % 2 === 0 ? <h3>Par</h3>:<h3>Impar</h3>}
    </div>
    )
}

export default Condicional