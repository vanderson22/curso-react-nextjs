

export default class Produto {

    //#id - significa atributo privado
    #id
    #nome
    #preco

    
    constructor(id, nome, preco) {
        this.#id = id;
        this.#preco = preco;
        this.#nome = nome;
    }

    get id() {
        return this.#id;
    }

    get preco() {
        return this.#preco;
    }

    get nome() {
        return this.#nome;
    }

}