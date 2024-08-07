

export default function Repeticao1() {

    const alunos = [
        'Ana', 'Maria', 'João', 'Bia'
    ]


    function renderizarLista() {
        
        return alunos.map( (nome, index )=> <li key={index}> {nome}</li>)
    }


    return (
            <ul>
                 {renderizarLista()}
            </ul>
           )
}



//olds
// function renderizarLista() {


//     const itens = [];
//     for (let i = 0; i < alunos.length; i++) {

//         itens.push(<li> {alunos[i]}</li>)
//     }
//     return (itens)
// }