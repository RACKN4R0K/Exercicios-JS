console.log(`Trbalhando com listas`)

const salvador = `Salvador`
const saoPaulo = `São Paulo`
const rioDejaneiro= `Rio de Janeiro `

const ListasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro `
)

ListasDeDestinos.push(`Curitiba`)// adicionando um item na lista

console.log("Destinos possíveis:")
//console.log(salvador, saoPaulo, rioDejaneiro)
console.log(ListasDeDestinos)

ListasDeDestinos.splice(1,1)// ele ira retirar o 1 da lista e so ira eleminar o 1º contagem começa no 0,1,2... 
console.log(ListasDeDestinos)
console.log(ListasDeDestinos[1])