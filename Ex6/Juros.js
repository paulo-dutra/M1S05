export default class Juros {
    capitalInicial
    taxaAplicada
    tempo

    constructor(capitalInicial, taxaAplicada, tempo) {
        this.capitalInicial = capitalInicial
        this.taxaAplicada = taxaAplicada
        this.tempo = tempo
    }

    calcularJurosSimples() {
        let juros = this.capitalInicial * this.taxaAplicada * this.tempo
        return juros
    }

    calcularJurosCompostos() {
        let juros = this.capitalInicial * (1 + this.taxaAplicada) ** this.tempo
        return juros - this.capitalInicial
    }

}
