document.addEventListener("DOMContentLoaded", () => {
    const btnConsultar = document.getElementById("btnConsultar");
    const inputId = document.getElementById("inputId");
    const divResultado = document.getElementById("resultado");

    btnConsultar.addEventListener("click", async () => {
        const id = inputId.value.trim();

        if (id === "") {
            divResultado.innerHTML = "<p>Informe um ID válido.</p>";
            return;
        }

        try {
            const resp = await fetch("https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/" + id);

            if (!resp.ok) {
                divResultado.innerHTML = "<p>ID não encontrado.</p>";
                return;
            }

            const dados = await resp.json();

            divResultado.innerHTML = `
                <p><strong>ID:</strong> ${dados.id}</p>
                <p><strong>Nome:</strong> ${dados.nome}</p>
                <p><strong>Departamento:</strong> ${dados.departamento}</p>
                <p><strong>Endereço:</strong> ${dados.endereco}</p>
                <p><strong>Email:</strong> ${dados.email}</p>
                <button id="btnExcluir">Exclusão</button>
            `;

        } catch {
            divResultado.innerHTML = "<p>Erro na requisição.</p>";
        }
    });
});

