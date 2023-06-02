const data = new Date()
const dia = data.getDay()
let day_list = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
const time = [data.getHours(), data.getMinutes(), data.getSeconds()]

console.log(`Hora é: ${day_list[dia]}`)
console.log(`A hora atual é: ${time[0]} : ${time[1]} : ${time[2]}`)

