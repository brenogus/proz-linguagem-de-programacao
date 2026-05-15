function assarPizza() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {

            let chanceDeQueimar = Math.random();

            if (chanceDeQueimar < 0.5) {
                resolve("Pizza de Calabresa Quentinha !");
            }
            else {
                reject("ERRO: O gás acabou e a pizza queimou!");
            }
        },3000)
    })
}

async function irAPizzaria() {
    try {
        console.log("1. Eu: Olá, quero pedir uma pizza.");
        console.log("2. Atendente: Pedido anotado, aguarde enquanto sua pizza fica pronta.");

        let meuLanche = await assarPizza();

        console.log(`3.O pedido esta pronto, aqui esta ${meuLanche}`);
    } catch(erro) {
        
        console.log(`3. Atendente: Peço mil desculpas, mas tivemos um problema... ${erro}`);

    } finally {
        console.log("-> Eu: Ok vou para a casa, obrigado.");
    }
}

irAPizzaria();
console.log("Eu: Enquanto isso vou mexer no instagram");