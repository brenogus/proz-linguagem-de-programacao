const prompt = require('prompt-sync')();

async function buscarEndereco() {
    
    let cepDigitado = prompt("Digite o CEP (apenas números): ");
    console.log("\n Viajando pela internet até o servidor... Aguarde.");

    try {
        let resposta = await fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`);

        let dados = await resposta.json();

        if (dados.erro) {
            console.log("Poxa, esse CEP não existe no mapa. Tente novamente.");
            return;
        }

        console.log("Bingo! Endereço encontrado");
        console.log(`Rua: ${dados.logradouro}`);
        console.log(`Bairro: ${dados.bairro}`);
        console.log(`Cidade: ${dados.localidade} - ${dados.uf}`);
    } catch (erro) {
        console.log("ERRO DE CONEXÃO: Verifica sua internet ou se não digitou algum caracter");
    } finally {
        console.log("Obrigado por usar nosso sistema!");
    }
}

buscarEndereco();
