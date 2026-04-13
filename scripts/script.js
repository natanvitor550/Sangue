document.getElementById("FormSangue").addEventListener("submit", function (e) {
    e.preventDefault();
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let tipoS = document.getElementById("tipoS").value;
    let telefone = document.getElementById("telefone").value;
    let estado = document.getElementById("estado").value;
    let cidade = document.getElementById("cidade").value;


    alert("Cadastro realizado com sucesso! " + nome);
})