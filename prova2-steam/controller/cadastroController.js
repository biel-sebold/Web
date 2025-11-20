document.addEventListener("DOMContentLoaded", () => {
    const btnConsultar = document.getElementById("btnConsultar");
    const inputId = document.getElementById("inputId");
    const divResultado = document.getElementById("resultado");

    async function deletarCadastro(id) {
        try {
            const response = await fetch(`https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro na requisição DELETE:', error);
            return { status: 'Erro', mensagem: 'Erro ao processar a exclusão. Tente novamente.' };
        }
    }

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
                <div id="message"></div>  <!-- Elemento para exibir a mensagem do DELETE -->
            `;

        } catch {
            divResultado.innerHTML = "<p>Erro na requisição.</p>";
        }
    });

    divResultado.addEventListener("click", async (event) => {
        if (event.target.id === "btnExcluir") {
            const id = inputId.value.trim();
            if (!id || isNaN(id) || id <= 0) {
                alert('Por favor, informe um ID válido.');
                return;
            }

            const messageDiv = document.getElementById("message");
            messageDiv.style.display = 'none';
            messageDiv.style.backgroundColor = '';
            messageDiv.textContent = '';
            const result = await deletarCadastro(id);
            messageDiv.textContent = result.mensagem;
            messageDiv.style.display = 'block';
            if (result.status === 'Ok') {
                messageDiv.style.backgroundColor = 'green';
            } else if (result.status === 'Erro') {
                messageDiv.style.backgroundColor = 'red';
            } else {
                messageDiv.style.backgroundColor = 'yellow';
                messageDiv.style.color = 'black';
            }
        }
    });
});

