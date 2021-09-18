console.log("Mercado")

const bebidas = new Array(
    `cerveja`,
    `corote`,
    `Whisk`,
    `Vodka`
)
const maiorDeIdade = 16
const estaAcompanhado = false

if(maiorDeIdade >= 18 || estaAcompanhado == true){
    console.log("Ok, você pode compra uma bebida alcolica")
    bebidas.splice(3,1)//removendo item
} else{
    console.log("Você não pode compra uma bebida, pois não esta acompanhado e é menor de idade")
}

console.log(bebidas)