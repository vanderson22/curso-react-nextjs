import React, { useState } from 'react';

export default function AlterarEstado() {
    const [valorX, setValorX] = useState('Parado');
    const [valorY, setValorY] = useState('Parado');

    function moverMouse(ev) {
        setValorX(`X: ${ev.clientX}`);
        setValorY(`Y: ${ev.clientY}`);
    }

    return (
        <div onMouseMove={moverMouse} style={{ height: '139vh' }}>
            Alterando o eixo: {valorX}
            <br ></br>
            Alterando o eixo: {valorY}
        </div>
    );
}