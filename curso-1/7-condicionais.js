console.log(`Trbalhando com condicionais`)
const ListasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro `
)

ListasDeDestinos.push(`Curitiba`)

const idadeComprador = 17
const estaAcompanhada = false
const temPassagemComprada = true

console.log("Destinos possíveis:")
console.log(ListasDeDestinos)

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de iadede")
//     ListasDeDestinos.splice(1, 1)//removendo item
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado")
//     ListasDeDestinos.splice(1, 1)//removendo item
// } else {
//     console.log("Não é maior de idade não posso vender")
// }

if ( idadeComprador >= 18 || estaAcompanhada == true){
    console.log("Boa Viagem!!")
    ListasDeDestinos.splice(2,1) //removendo um item 
} else{
    console.log("Não é maior de idade não posso vender")
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem")
} else{
    console.log("Você não pode embarcar")
}


console.log(ListasDeDestinos)

// console.log(idadeComprador > 18)
// console.log(idadeComprador < 18)
// console.log(idadeComprador >= 18)
// console.log(idadeComprador <= 18)
// console.log(idadeComprador == 18)
