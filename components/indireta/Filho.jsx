

export default function Filho(props){

    console.log('chamando filho')
    console.log(props.funcao)
    
    return (
        <div>
           <h1>Filho</h1>
           {/* passando o evento click ou parametro ao realizar evento click. */}
           <button onClick={props.funcao} >Passando evento</button>
           <br />
           <br />
           <button onClick={ (e) => { props.funcao(e, ':Passando no enem'  ) }} >Filho passando para o pai.</button>
        </div>
    )
}