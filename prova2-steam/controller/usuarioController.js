document.addEventListener("DOMContentLoaded", function () {
    if (!isUsuarioAutenticado()) {
        window.location.href = "login.html";
        return;
    }
    const login = carregarLogin();
    const campoLogin = document.getElementById("campo-login");
    const areaUsuario = document.getElementById("areaUsuario");
    if (campoLogin) campoLogin.value = login;
    if (areaUsuario) areaUsuario.innerHTML = `<a href="usuario.html"><img src="media/user-icon.jpg" class="user-photo"><span class="user-name">${login}</span></a>`;
});
