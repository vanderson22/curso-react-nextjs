import React, { useState } from 'react';


export default function Formulario(){

         const [valor, setValor] = useState("inicial");

         //primeiro o estado altera para depois alterar na interface.
         function changeText(e){
            let novo  = e.target.value
            setValor(novo)
            console.log(novo)
         }

    return (
        <div style={{display : "flex" , flexDirection : "column"}}>
            <span>{valor}</span>
            <input type="text" value={valor}  onChange={(e) =>{ changeText(e)}} />
        </div>
    )
}