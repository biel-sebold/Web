document.addEventListener("DOMContentLoaded", () => {
    const loginInput = document.getElementById("login");
    const senhaInput = document.getElementById("senha");
    const btnAutenticar = document.getElementById("btn-autenticar");
    const userStatus = document.getElementById("user-status");

    const usuarioAutenticado = localStorage.getItem("autenticado");
    const usuarioNome = localStorage.getItem("usuario");

    if (usuarioAutenticado && usuarioNome) {
        userStatus.innerHTML = `<a href="usuario.html">
                                    <img src="media/user-icon.jpg" alt="Usuário" class="user-photo">
                                    ${usuarioNome}
                                </a>`;
    }

    btnAutenticar.addEventListener("click", () => {
        const loginValue = loginInput.value.trim();
        const senhaValue = senhaInput.value.trim();

        if (loginValue && senhaValue) {
            localStorage.setItem("usuario", loginValue);
            localStorage.setItem("autenticado", "true");
            window.location.href = "inicio.html";
        } else {
            alert("Preencha ambos os campos antes de autenticar.");
        }
    });
});
