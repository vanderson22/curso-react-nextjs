
import Filho from './Filho'

export default function Pai(props){

// ... operador spread.
    return (
        <div>
           <Filho nome="Pedro" familia={props.familia}/>
           <Filho nome="Joana"  familia={props.familia} />
           <Filho {...props}/>
              {/* sobrescrevendo nome que veio do pai */}
           <Filho {...props}  nome="Sobrescreve" />

           <Filho  nome="Não sobrescreve"  {...props} />

        </div>
    )
}