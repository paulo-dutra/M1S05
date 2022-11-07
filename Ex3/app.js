import Personagem from "./Personagem.js"

const alyx = new Personagem("Alyx");

console.log(alyx.percentualVida); // 100

alyx.sofreuDano(50);

console.log(alyx.percentualVida); // 50

alyx.usouKitMedico();

console.log(alyx.percentualVida); // 60

alyx.sofreuDano(80);

console.log(alyx.percentualVida); // 0

for (let i =0; i<12; i++){
    alyx.usouKitMedico();
    console.log(alyx.percentualVida); //Aumenta de 10 em 10 até chegar em 100
}