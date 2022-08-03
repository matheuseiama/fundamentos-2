const pessoa = {
    nome: "Matheus",
    idade:20,
    endereco: {
        logradouro: "Rua ABCD",
        numero:450
    }
}
console.log(pessoa)
const { nome, idade } = pessoa
console.log(nome, idade)
const { nome: n, idade: i } = pessoa
console.log(n, i)

