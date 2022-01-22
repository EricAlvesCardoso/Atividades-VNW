//1 - crie uma função que exiba uma mensagem no console
function mensagem (){
   console.log("Mensagem")
}

mensagem()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function nome (nome){
    
    console.log(`Meu nome é ${nome}`)
}

nome("Eric")
//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function dados (usuario, idade, estiloMusical){
    console.log(`Nome do Usuário é ${usuario}, a idade é ${idade} e o estilo musical preferido é ${estiloMusical}`)
}

dados("Eric", 26, "Rap")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function gosto(filme, musica){
    console.log(`Filme escolhido é ${filme} e a música selecionada é ${musica} `)
}

gosto("Eu sou a Lenda", "Negro Drama - RacionaisMcs")

//*Bônus:

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function numero(num){
    return num * 3
}

console.log(numero(5))
