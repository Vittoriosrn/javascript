let indice = 0; // Indice para controlar a adição de ids das tarefas
const list_area = document.querySelector("#lista")


function adicionar(){
    const vazio = document.querySelector("#vazio")
    const nova_tarefa = document.querySelector("#nova_tarefa_txt").value

    if(nova_tarefa != '' && nova_tarefa[0] != ' '){
        const li = document.createElement("li")
        const input = document.createElement("input")
        const label = document.createElement("label")
        const remove = document.createElement("p")

        input.setAttribute('type','checkbox')
        li.setAttribute('id', `t${indice}`)
        input.setAttribute('name', `t${indice}`)
        input.setAttribute('id', `t${indice}`)
        label.setAttribute('for', `t${indice}`)
        label.innerHTML = `${nova_tarefa}`
        remove.innerHTML = `Remover`
        li.style.display = 'flex'
        li.style.justifyContent = 'space-between'

        list_area.appendChild(li)
        li.appendChild(input)
        li.appendChild(label)
        li.appendChild(remove)
        if(indice == 0){
            list_area.removeChild(vazio)
        }
        indice++
    }else{
        alert("Informe o nome da tarefa")
    }
}

function remover(id){
    alert(`t${id}`)
    const li = document.querySelector(`li#t${id}`)
    list_area.removeChild(li)
}
list_area.li.remove.addEventListener('click', remover(this.id))