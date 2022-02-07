// Crie um objeto que receba ao menos três propriedades sobre você.
let pessoa = 
    {
        nome: "Eric",
        idade: 26,
        EstiloDeMusica: "Rap"
    }

    //Mostre no console todas as propriedades desse objeto.
console.log(pessoa)

// Adicione uma nova propriedade sem alterar seu objeto inicial.

 pessoa.Sobrenome = "Alves"
 console.log(pessoa)

// Remova uma propriedade desse objeto.

 delete pessoa.EstiloDeMusica
 console.log(pessoa)



// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = [
    {
        nome: "João",
        idade: 15,
        telefone: 75988035969,
        amigos: ["Matheus", "João", "Eric", "Vitor"]
    },

    {
        nome: "Maria",
        idade: 15,
        telefone: 75988035969,
        amigos: ["Matheus", "João", "Eric", "Vitor"]
    },

    {
        nome: "Brenda",
        idade: 15,
        telefone: 75988035969,
        amigos: ["Matheus", "João", "Eric", "Vitor"]
    },

    {
        nome: "Pedro",
        idade: 30,
        telefone: 75988035969,
        amigos: ["Matheus", "João", "Eric", "Vitor"]
    },

    {
        nome: "Rita",
        idade: 15,
        telefone: 75988035969,
        amigos: ["Matheus", "João", "Eric", "Vitor"]
    },
    {
        nome: "José",
        idade: 15,
        telefone: 75988035969,
        amigos: ["Matheus", "João", "Eric", "Vitor", "Rose"]
    }
]

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos[0], cadastro[1].amigos[1], cadastro[2].amigos[2], cadastro[3].amigos[3], cadastro[5].amigos[4])