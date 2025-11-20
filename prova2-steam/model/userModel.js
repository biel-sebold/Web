function salvarUsuario(login) {
    localStorage.setItem("login", login);
    localStorage.setItem("autenticado", "true");
}

function carregarLogin() {
    return localStorage.getItem("login");
}

function isUsuarioAutenticado() {
    return localStorage.getItem("autenticado") === "true";
}

function deslogarUsuario() {
    localStorage.removeItem("login");
    localStorage.removeItem("autenticado");
}
