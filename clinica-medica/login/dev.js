
function entrar(){

    let user = document.getElementById('user-id')
    let password = document.getElementById('pass-id')

    if (user.value == "medico" && password.value == "12345") {
            window.location.href = "../menu/index.html"
    } else if (user.value == "atendente" && password.value == "12345") {
        window.location.href = "../../clinica-medica-atendente/menu/index.html"
    } else {
       alert("Desculpe! usuário ou senha incorretos.")
    }
}

