// Função que demora

function assarPizza() {
    return new Promise(resolve => {
        setTimeout(() => {
            // Depois de 3 segundos, o forno "devolve" a pizza pronta
            resolve("Pizza de calabresa quentinha!");
        },3000)
    });
}

// =============================
// 2. A FUNÇÃO  PRINCIPAL (Onde o aluno deve focar)
// ==============================

async function irAPizzaria() {
    console.log("1. Eu: Olá, quero pedir uma pizza.");
    console.log("2. Atendente: Pedido anotado, aguarde enquanto sua pizza fica pronta.");

    let meuLanche = await assarPizza();

    console.log(`3.O pedido esta pronto, aqui esta ${meuLanche}`);
}

// MUNDO REAL, a mensagem abaixo de irAPizzaria irá aparecer primeiro
irAPizzaria();
console.log("Vou mexer no instagram enquanto isso")