export default function SomaUm(props){

    // Não é possível alterar props. somente leitura
    // props.numero++;

     var valor =  props.numero + 1 
    return (
        <div>
            <h1>
                {++valor }
            </h1>
        </div>
    )
}