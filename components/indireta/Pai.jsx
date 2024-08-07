
import Filho from './Filho'

export default function Pai(props){

     
    function informarPai(e, valor = 'sem comunicado'){
        console.log('Informar ao Pai ' +  valor)
        console.log(e);
    }

    return (
        <div>
             <Filho funcao={informarPai} />
             
        </div>
    )
}