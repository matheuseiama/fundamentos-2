const saudacao = "Opa!" // Contexto léxico 1

function exec() {
    const saudacao = "Faaala" // contexto léxico 2
    return saudacao
}

const cliente = {
    nome: "Matheus",
    idade: 25,
    peso: 70,
    endereco: {
        logradouro: "Rua Palestra Italia",
        numero: 16,
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)