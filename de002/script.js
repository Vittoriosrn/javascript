var img = document.createElement('img')
img.setAttribute('id', 'foto')

function verificador(){
    var ano_atual = new Date()
    var ano_user = window.document.querySelector("input#ano_nascimento")
    var idade = (ano_atual.getFullYear() - Number(ano_user.value))
    var check_sexo = document.getElementsByName("radio_sex")
    var resultado_area = document.querySelector("div#resultado_area")

    if(check_sexo[1].checked && ano_user.value <= ano_atual.getFullYear() && idade < 120){
        if(idade >= 18 && idade < 60){              //Checando se é adulto
            img.setAttribute('src', 'img/mulher_adulta.png')
        }else if(idade < 18 && idade >= 12){        //Checando se é adolescente
            img.setAttribute('src', 'img/mulher_adolenscente.png')
        }else if(idade < 12 && idade >= 3){         //Checando se é criança
            img.setAttribute('src', 'img/mulher_crianca.png')
        }else if(idade < 3){                        //Checando se é bebê
            img.setAttribute('src', 'img/mulher_bebe.png')
        }else{                                      // Se não, é idoso
            img.setAttribute('src', 'img/mulher_idosa.png')
        }
        document.querySelector("p#txt_edit").innerHTML = `Você é uma mulher com ${idade} anos`
    }
    else if(check_sexo[0].checked && ano_user.value <= ano_atual.getFullYear() && idade < 120){
        if(idade >= 18 && idade < 60){              //Checando se é adulto
            img.setAttribute('src', 'img/homem_adulto.png')
        }else if(idade < 18 && idade >= 12){        //Checando se é adolescente
            img.setAttribute('src', 'img/homem_adolescente.png')
        }else if(idade < 12 && idade >= 3){         //Checando se é criança
            img.setAttribute('src', 'img/homem_crianca.png')
        }else if(idade < 3){                        //Checando se é bebê
            img.setAttribute('src', 'img/homem_bebe.png')
        }else{                                      // Se não, é idoso
            img.setAttribute('src', 'img/homem_idoso.png')
        }
        document.querySelector("p#txt_edit").innerHTML = `Você é um homem com ${idade} anos`
    }
    else{
        document.querySelector("p#txt_edit").innerHTML = `Informe seu ano de nascimento corretamente`
    }
    resultado_area.appendChild(img)
}