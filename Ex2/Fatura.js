export default class Fatura {
    id
    descricao
    quantia
    preco

    constructor(id, descricao, quantia, preco) {
        quantia = Number(quantia)
        preco = Number(preco)
        if (quantia < 0 || isNaN(quantia)){
            quantia = 0
        }
        if (preco < 0 || isNaN(preco)){
            preco = 0
        }
        this.id = id
        this.descricao = descricao
        this.quantia = quantia
        this.preco = preco
    }

    get valorTotal(){
        return this.quantia*this.preco
    }

    // obterValorTotal(){
    //     return this.quantia*this.preco
    // }
}
