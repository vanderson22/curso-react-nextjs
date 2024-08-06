import estilos from "../css/integracao2.module.css"


export default function jsx4() {

    const subTitle = "Estamos no javascript!";
    const maior = maiorValor(13, 31);

  const estilo=
        {
            color: maior > 31 ? 'green' : 'red',
        }
    
    return (
        <div>
            <h1>
                Integração JS e JSX
            </h1>
            <h2 className={estilos.vermelho}>
                Title: {subTitle}
            </h2>
            <h3>3² = {3 * 3}</h3>
            <h4 style={estilo} >Maior valor entre 31 e 13? {maior}</h4>
            <h4>Maior valor entre 31 e 13? {maiorValor(13, 31)}</h4>
        </div>
    )
}


function maiorValor(val1, val2) {
    return Math.max(val1, val2);
}