import Juros from './Juros.js'

const aplicacaoA = new Juros(10000, 0.07, 24);
console.log(aplicacaoA.calcularJurosSimples());
console.log(aplicacaoA.calcularJurosCompostos());

const aplicacaoB = new Juros(10000, 0.15, 10)
console.log(aplicacaoB.calcularJurosSimples());
console.log(aplicacaoB.calcularJurosCompostos());