// Classificador de nível de Herói

let nomeHeroi = "Márcio";
let quantidadeXP = 5000 ;
let nivel;

if (quantidadeXP <= 1000){
    nivel = "Ferro";
    console.log("Se XP for menor ou igual a 1.000 = Ferro");
} else if (quantidadeXP >= 1001 && quantidadeXP <= 2000){
    nivel = "Bronze";
    console.log("Se XP for entre 1.001 e 2.000 = Bronze");    
} else if (quantidadeXP >= 2001 && quantidadeXP <= 5000){
    nivel = "Prata";
    console.log("Se XP for entre 2.001 e 5.000 = Prata");    
} else if (quantidadeXP >= 5001 && quantidadeXP <= 7000){
    nivel = "Ouro";
    console.log("Se XP for entre 5.001 e 7.000 = Ouro");    
} else if (quantidadeXP >= 7001 && quantidadeXP <= 8000){
    nivel = "Platina";
    console.log("Se XP for entre 7.001 e 8.000 = Platina");    
} else if (quantidadeXP >= 8001 && quantidadeXP <= 9000){
    nivel = "Ascendente";
    console.log("Se XP for entre 8.001 e 9.000 = Ascendente");    
} else if (quantidadeXP >= 9001 && quantidadeXP <= 10000){
    nivel = "Imortal";
    console.log("Se XP for entre 9.001 e 10.000 = Imortal");    
} else if (quantidadeXP >= 10001){
    nivel = "Radiante";
    console.log("Se XP for maior ou igual a 10.001 = Radiante");
}

console.log("O Herói de nome " + nomeHeroi + " tem " + quantidadeXP + " de XP e está no nível " + nivel);






