 
import listaProdutosData from "../../../data/listaProdutosData"


 export default function listaRepeticao2(){


    function renderizarLista() {
        return listaProdutosData.map((produto, index) => {
            return <li key={index}>{produto.nome}</li>;
        });
    }
    


       return   <div>
                    {renderizarLista()}
                </div>
     
 }