function main(){
    const numero1 = Number(document.querySelector("#numero1").value)
    const numero2 = Number(document.querySelector("#numero2").value)
    const operador = document.querySelector("#operadores")
    const operador_selecionado = operador.options[operador.selectedIndex].value;  // Aqui seleciona o valor selecionado do combobox
    const exibir_resultado = document.querySelector("#resultado")

    switch(operador_selecionado){
        case "soma":
            exibir_resultado.innerHTML = `${soma(numero1, numero2)}`
            break
        case "subtracao":
            exibir_resultado.innerHTML = `${subtracao(numero1, numero2)}`
            break
        case "multiplicacao":
            exibir_resultado.innerHTML = `${multiplicacao(numero1, numero2)}`
            break
        case "divisao":
            exibir_resultado.innerHTML = `${divisao(numero1, numero2)}`
            break
        case "potenciacao":
            exibir_resultado.innerHTML = `${potenciacao(numero1, numero2)}`
            break
        case "operador":
            alert("Selecione a operação")
    }
}

// FUNCTIONS
let resultado

function soma(numero1, numero2){
    resultado = numero1 + numero2
    return resultado
}
function subtracao(numero1, numero2){
    resultado = numero1 - numero2
    return resultado
}
function multiplicacao(numero1, numero2){
    resultado = numero1 * numero2
    return resultado
}
function divisao(numero1, numero2){
    resultado = numero1 / numero2
    return resultado
}
function potenciacao(numero1, numero2){
    resultado = numero1 ** numero2
    return resultado
}