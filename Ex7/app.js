import Time from "./Time.js"
import Partida from "./Partida.js"

let times = []
let partidas = []

//Instanciamento de times
const TimeA = new Time("Atlético Mineiro", "CAM")
times.push(TimeA)
const TimeB = new Time("Cruzeiro", "CRU")
times.push(TimeB)
const TimeC = new Time("São Paulo", "SPFC")
times.push(TimeC)

//Instanciamento de partidas
const Partida1 = new Partida("CAM", 2, "CRU", 2)
partidas.push(Partida1)
const Partida2 = new Partida("CAM", 0, "SPFC", 2)
partidas.push(Partida2)
const Partida3 = new Partida("CRU", 2, "SPFC", 1)
partidas.push(Partida3)

//Passsa todas as partidas para o metodo computarPartida() de cada time
times.forEach(time => {
    partidas.forEach((partida) => time.computarPartida(partida))
});

//Resultados
console.log(TimeA.exibirSituacao())
console.log(TimeA.numeroDeJogos)
console.log(TimeA.numeroDePontos)

console.log(TimeB.exibirSituacao())
console.log(TimeB.numeroDeJogos)
console.log(TimeB.numeroDePontos)

console.log(TimeC.exibirSituacao())
console.log(TimeC.numeroDeJogos)
console.log(TimeC.numeroDePontos)