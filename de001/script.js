var agora = new Date()
var horas = agora.getHours()
var horastxt = window.document.querySelector("p#horas")
horastxt.innerHTML = `<p>Agora são ${horas} horas</p>`

if(horas > 4 && horas < 12){
    window.document.querySelector("img").src = "img/manha.png"
    window.document.body.style.backgroundColor = "#edd7c2"
}else if(horas < 19 && horas > 11){
    window.document.querySelector("img").src = "img/tarde.png"
    window.document.body.style.backgroundColor = "#c5d4df"
}else if(horas > 18 || horas < 5){
    window.document.querySelector("img").src = "img/noite.png"
    window.document.body.style.backgroundColor = "#242d46"
}
