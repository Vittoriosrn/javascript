if(true){
    const num = 20;
    console.log(num)
}
// Variaveis const nao podem ser chamadas fora do bloco
// O mesmo se repete para let

if(true){
    let num = 20
    num = 50
    //                               Variaveis let podem ser reatribuidas. 
    console.log(num)
}
if (true){
    const num = 20
    // num = 50                     Variaveis const nao podem ser reatribuidas. 
    //                              Apenas se for objetos
    console.log(num)
}

