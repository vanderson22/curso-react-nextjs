import React, { useState } from 'react';
import Produto from '../../model/produto'

export default function Contador() {
    
    const [valorX, setValorX] = useState(0);

    function update(e, multiplicador) {
        const operation = e.target.textContent
        let incremento = valorX
     
        if(operation === 'add'){
             incremento++
        }
        if(operation === 'minus'){
            incremento--
        }

        if(operation === 'multi'){
            incremento *= multiplicador 
        }
        setValorX(incremento);
    }

    return (
        <div >
            <div>
                <h1>Contador</h1>
                <p>N#: {valorX}</p>

                <button onClick={update }>add</button>
                <button onClick={update }>minus</button>
                <button onClick={(evento ) =>{update(evento ,3) } }>multi</button>
            </div>
        </div>
    );


}
 