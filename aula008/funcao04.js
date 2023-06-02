function fatorial(x){
    var fat = 1
    for(var i = x; i > 1; i--){
        fat *= i
    }
    return fat
}
console.log(fatorial(10))