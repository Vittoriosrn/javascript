let num = [5, 6, 3, 1, 2]

num.push(4) // Adiciona [4] na ultima posição do vetor
num.sort() // Coloca o vetor na ordem crescente

console.log(num)
console.log(`\nO vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

// Retornar cada posição do vetor
for(var i = 0; i < num.length; i++){
    console.log(num[i])
}
console.log("\n")

// For otimizado para arrays e objetos
for(var i in num){
    console.log(num[i])
} 
console.log("\n")

// Buscar um valor detro do vetor
var i = num.indexOf(5)

if(i == -1){ // Retorna -1 se não for encontrado
    console.log(`Valor não foi encontrado`)
}else{       // Retorna o indice/posição se for encontrado
    console.log(`Valor está na posição ${i}`)
}