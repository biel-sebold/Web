document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnConsultar");
    const campo = document.getElementById("campoID");
    const resultado = document.getElementById("resultadoConsulta");

    if (!btn || !campo || !resultado || typeof consultarCadastroAPI !== "function") return;

    btn.addEventListener("click", function () {
        const id = campo.value.trim();
        if (id === "") {
            alert("Informe um ID");
            return;
        }
        consultarCadastroAPI(id)
            .then(data => {
                resultado.innerText = JSON.stringify(data, null, 2);
            })
            .catch(() => {
                resultado.innerText = "Erro na consulta.";
            });
    });
});
