
function acao1() {
    console.log('acao1');
}

//recuperando evento.
function acaE(e) {
    console.log(e.nativeEvent);
    console.log(e);
}

export default function botao() {


    return <div>
        <input type="text" onChange={e => { console.log(e.target.value) }} ></input>
        <button onClick={acaE} > click</button>
    </div>
}