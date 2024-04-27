function autenticar () {
    const user = document.getElementById("login").value;
    const password = document.getElementById("password").value;
    const mensagem = document.getElementById("mensagem");
    mensagem.classList.remove("sucesso");
    mensagem.classList.remove("erro");

    if (user === "usuario" && password === "123") {
        mensagem.innerHTML = "Usuário Autenticado!";
        mensagem.classList.add("sucesso");
    } else {
        mensagem.innerHTML = "Falha na Autenticação!";
        mensagem.classList.add("erro");
    }
}