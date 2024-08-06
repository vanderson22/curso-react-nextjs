

export default function Jsx4() {
    return (
      <div>
        {criarLista(10)}
      </div>
    );
  }
  
  function criarLista(qtd) {
    return Array.from({ length: qtd }, (_, index) => (
      <span key={index}>
        {index + 1}
        {index < qtd - 1 && <>,<br /></>}
      </span>
    ));
  }
  