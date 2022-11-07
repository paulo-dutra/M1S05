export default class Personagem {
    nome
    percentualVida

    constructor(nome) {
        this.nome = nome
        this.percentualVida = 100
    }

    sofreuDano(percentualDano) {
        let vidaFinal = this.percentualVida - percentualDano
        if (vidaFinal < 0) {
            this.percentualVida = 0
        }
        else {
            this.percentualVida = vidaFinal
        }
    }

    usouKitMedico(){
        let vidaFinal = this.percentualVida + 10
        if (vidaFinal >= 100) {
            this.percentualVida = 100
        }
        else {
            this.percentualVida = vidaFinal
        }
    }
}