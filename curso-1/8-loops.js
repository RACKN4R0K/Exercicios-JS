console.log(`\n Trbalhando com Loops`)
const ListasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro `
)

const idadeComprador = 49
const estaAcompanhada = false
let temPassagemComprada = false
const destino = "Salvador"

console.log("\n Destinos possíveis:")
console.log(ListasDeDestinos)

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true

let contador = 0
let destinoExiste = false
while(contador<3){
   if(ListasDeDestinos[contador] == destino){
       destinoExiste = true
       break
   }
    contador += 1
}

console.log("Dsstino existe:", destinoExiste)

if(podeComprar && destinoExiste){
console.log("Boa Viagem")
}else{
    console.log("Desculpe tivemos um erro")
}

for(let i = 0 ;i < 3  ; i++){
    if(ListasDeDestinos[contador] == destino){
        destinoExiste = true
    }
 }