import estilo from "../pages/css/tabuleiro.module.css"

export default function criarColunas( ) {

    const rows = 8;
    const cols = 8;


    var key=0;

    const array = Array.from({ length: rows }, () => Array.from({ length: cols }, (_, j) => j + 1));

    console.log(array);

    return Array.from({ length: array.length }, (_, index) => (
        <>
            <span key={key++}>
                {criarLinhas(index + 1, array[index] )}
            </span>
            <br></br>
        </>
    ));
}


function criarLinhas(linha, casas ) {

    var key=0;
    return Array.from({ length: casas.length }, (_, index) => (
        <>
            <span className={ estilo.quadrado} key={linha+key++} style={
                {
                    backgroundColor: (linha + index) % 2 == 0 ? 'black' : 'white'
                }
                
            }>
            </span>
        </>
    ));
}