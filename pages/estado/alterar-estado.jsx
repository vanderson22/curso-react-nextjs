import { useState } from 'react';


export default function AlterarEstado() {

    const arrayX = useState('Parado');
    let valorx = arrayX[0];
    const alterarX = arrayX[1];

    function moverMouse(ev) {

        alterarX('movendo ...' + ev.clientX);
    }


    return (
        <div onMouseMove={moverMouse}>

            Altrando o eixo X : {valorx}
        </div>
    )
}