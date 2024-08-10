import React, { useState } from 'react';
import Contador from '../../components/Contador'
import SomaUm from '../../components/SomaUm'

export default function Contar() {
    
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
               
                <Contador contador={valorX} >
                     <SomaUm numero={valorX} />
                </Contador>
                <button onClick={update }>add</button>
                <button onClick={update }>minus</button>
                <button onClick={(evento ) =>{update(evento ,3) } }>multi</button>
            </div>
        </div>
    );


}
 