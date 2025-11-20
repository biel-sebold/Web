document.addEventListener("DOMContentLoaded", function () {
    const userStatus = document.getElementById("user-status");
    if (!userStatus) return;
    const login = carregarLogin();
    if (isUsuarioAutenticado() && login) {
        userStatus.innerHTML = `<a href="usuario.html"><img src="../media/user-icon.jpg" class="user-photo"><span class="user-name">${login}</span></a>`;
    } else {
        userStatus.textContent = "Usuário não autenticado";
    }
});


