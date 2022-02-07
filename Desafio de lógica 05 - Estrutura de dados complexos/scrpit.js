 // Crie um array que receba 5 itens e exiba no console.
let n = ["Brenda","Edmundo","Helena","Heitor","Rita"]
console.log(n)

// Utilize um método para adicionar um nome ao inicio do array.
n.splice(0,0, "Vitor", "Eric")
console.log(n)

// Utilize um método para remover o último nome do array.
n.splice(6,1)
console.log(n)

// Utilize um método para adicionar dois nomes ao fim do array.
n.splice(6,2, "Eric","Bruna")
console.log(n)

// Utilize um método para remover o primeiro nome do array.
n.splice(0,1)
console.log(n)

// Utilize um método para organizar em ordem crescente o seguinte array:
// let numbers = [7,5,6,3,8,9,2,1,4]
let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort()
console.log(numbers)