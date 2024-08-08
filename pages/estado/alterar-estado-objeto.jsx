import React, { useState } from 'react';
import Produto from '../../model/produto'

export default function AlterarEstado() {
   let v = 1;
    const [valorX, setValorX] = useState(new Produto(1, 'old', 1));

    function updateProduto(ev, oldProduto) {
        let newProduto = new Produto(oldProduto.id + 1, 'old'+ oldProduto.id+ 1  , oldProduto.id + 1)
        setValorX(newProduto);
        console.log(ev)
    }

    return (
        <div >
            <div>
                <h1>Produto Info</h1>
                <p>ID: {valorX.id}</p>
                <p>Name: {valorX.nome}</p>
                <p>Price: {valorX.preco}</p>
                <button onClick={(event) => updateProduto(event, valorX)}>Update Produto</button>
            </div>
        </div>
    );


}


// const [valorX, setValorX] = useState(new Produto(0, '', 0));

// return (
//     <div>
//         <h1>Produto Info</h1>
//         <p>ID: {valorX.id}</p>
//         <p>Name: {valorX.name}</p>
//         <p>Price: {valorX.price}</p>
//         <button onClick={updateProduto}>Update Produto</button>
//     </div>
// );

// function updateProduto() {
//     const newProduto = new Produto(1, 'New Product', 100);
//     setValorX(newProduto);
// }
