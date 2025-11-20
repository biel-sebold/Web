document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btn-autenticar");
    const loginInput = document.getElementById("login");
    const senhaInput = document.getElementById("senha");
    if (!btn || !loginInput || !senhaInput) return;
    btn.addEventListener("click", function () {
        const login = loginInput.value.trim();
        const senha = senhaInput.value.trim();
        if (login !== "" && senha !== "") {
            salvarUsuario(login);
            window.location.href = "inicio.html";
        } else {
            alert("Preencha ambos os campos antes de autenticar.");
        }
    });
});
