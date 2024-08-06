


export default function jsx4(){

    const subTitle = "Estamos no javascript!";
    return (
        <div>
            <h1>
                Integração JS e JSX 
            </h1>
            <h2>
                Title: {subTitle}
            </h2>
            <h3>3² = {3 * 3}</h3>
            <h4>Maior valor entre 31 e 13? {Math.max(13, 31)}</h4>
            <h4>Maior valor entre 31 e 13? {maiorValor(13, 31)}</h4>
        </div>
    )
}


  function maiorValor(val1 , val2){
        return Math.max(val1, val2);
  }