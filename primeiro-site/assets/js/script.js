/* O DOM pode ser acessado de três maneiras:

- Por Tag: getElementByTagName()
- Por Id: getElementById()
- Por nome: getElementByName()
- por Classe:getElementByClassName()
- por Seletor: querySelector()     --> melhor prática pra acessar elementos atualmente em JS

O JS é Case Sensitive, ou seja, reconhece letras maiúsculas e minúsculas */

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let msg = document.querySelector('#msg')
let mapa = document.querySelector('#mapa')
let nomeOk = false
let emailOk = false
let msgOk = false

/*pode chamar com o 'window' ou apenas pelo 'document'*/
/* nesse exemplo de seletor 'email', usamos a hashtag pois o seletor é um id. 
Caso fosse uma classe, 
usaria o '.' para se referir ao input em questão.*/

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length <= 2) {
        txt.innerHTML = 'Nome inválido, o campo precisa ter pelo menos 3 caracteres'
    } else {
        txt.innerHTML = 'Nome válido'
        nomeOk = true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "E-mail inválido"
    } else {
        txtEmail.innerHTML = "E-mail válido"
        emailOk = true
    }
}

function validaMsg() {
    let txtMsg = document.querySelector('#txtMsg')
    if (msg.value.length >= 150) {
        txtMsg.innerHTML = 'Capacidade máxima do campo é de 150 caracteres'
        txtMsg.style.display = 'block'
    } else {
        txtMsg.style.display = 'none'
        msgOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && msgOk == true) {
        alert("Mensagem enviada com sucesso!")
    } else {
        alert("Preencha os campos corretamente para enviar")
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}