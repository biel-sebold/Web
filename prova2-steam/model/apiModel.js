function consultarCadastroAPI(id) {
    return fetch("https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/" + id)
        .then(response => response.json());
}
