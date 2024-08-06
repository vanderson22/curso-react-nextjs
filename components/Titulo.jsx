//Maiusculo pois não é uma URL.
export default function Titulo(propriedades){

    // propredades - contem as propriedades 
    // <Titulo  principal="Página de cadastro" 
    // subtitulo= "Incluir, alterar e excluir"/>

    return (
        <>
         <h1>{propriedades.principal}</h1>
         <h2>{propriedades.subtitulo}</h2>
        </>
    )

}