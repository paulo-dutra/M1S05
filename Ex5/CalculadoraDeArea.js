export default class CalculadoraDeArea {
    tipo
    base
    altura

    constructor(tipo, base, altura) {
        this.tipo = tipo
        this.base = Number(base)
        this.altura = Number(altura)
    }

    get calcular() {
        let area = this.base * this.altura
        switch (this.tipo) {
            case "triangulo":
                return area / 2;
                break;
            case "quadrado":
                return area;
                break;
            default:
                return 0;
        }
    }
}