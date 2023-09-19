let nomes = [];
let precos = [];
let avaliacoes = [];
let contador = 0;
let ids = [];
let contadorId = 1;

// 1 -
function CadastrarProduto() {
    var id = contador + 1;
    let nome = prompt("Digite o nome do produto: ");
    let preco = parseFloat(prompt("Diigite o preço do produto: "));
    let avaliacao = parseInt(prompt("Insira a avaliação do seu produto: "));


    nomes[contador] = nome;
    precos[contador] = preco;
    avaliacoes[contador] = avaliacao;
    ids[contador] = id;
    contador++;

    console.log("Produto cadastrado com sucesso.");

    /*let desejaCadastrar = parseInt(prompt("Deseja continuar?\n 1 - Sim\n 2 - Não"));
    if (desejaCadastrar == 1) {
        CadastrarProduto();
    } else {
        console.log("No problem");
    }*/
}

// 2 -
function BuscarProdutoPeloId(ids) {
    let numId = Number(prompt("Insira um ID para pesquisar o produto: "));
    for (let i = 0; i < ids.length; i++) {
        if (numId == ids[i]) {
            console.log(`Id: ${numId}, produto: ${nomes[i]}, preço: R$${precos[i]}, avaliação: ${avaliacoes[i]}`);
        }
    }
}

// 3 - 
function BuscarProdutoPeloNome(nomes, ids) {
    let nomeBuscar = prompt("Digite o nome do produto que gostaria de saber o ID: ");
    for (let j = 0; j < nomes.length; j++) {
        if (nomeBuscar == nomes[j]) {
            console.log(`Produto: ${nomeBuscar} e ID: ${ids[j]}`);
        }
    }
}
// 4 - 

// 5 - 
//CHAAATGPT
function OrdenaDecrescente(avaliacoes) {
    let sortedArray = [];
    for (let i = 0; i < avaliacoes.length; i++) {
        for (let j = 0; j < avaliacoes.length - 1 - i; j++) {
            if (avaliacoes[j] < avaliacoes[j + 1]) {
                let temp = avaliacoes[j];
                avaliacoes[j] = avaliacoes[j + 1];
                avaliacoes[j + 1] = temp;
            }
        }
    }
    sortedArray = avaliacoes.slice(); // Make a copy of the sorted array
    console.log("Array arrumado: " + sortedArray);
}

/*
function OrdenaDecrescenteAvaliacoes(avaliacoes) {
    let arraySup = [];
    let contadorSup = 0;
    for (let i = 0; i < avaliacoes.length; i++) {
        let organizar = avaliacoes[i];
        for (let j = 0; j < avaliacoes.length - 1 - i; j++) {
            if (organizar < avaliacoes[j + 1]) {
                arraySup[contadorSup] = avaliacoes[j + 1];
                avaliacoes[j] = avaliacoes[j + 1];
                avaliacoes[j + 1] = organizar;
            }

        }
    }
    console.log("Array arrumado: " + arraySup);
}*/

function AtualizaPreco(ids, precos) {
    let idAtualizar = prompt("Qual ID tu deseja atualizar o preço? ");
    let novoValor = parseFloat(prompt("Insira o valor desejado para atualizar "));

    for (let i = 0; i < ids.length; i++) {
        if (idAtualizar == ids[i]) {
            precos[i] = novoValor;

        }
    }
    console.log("Novo valor do ID: " + idAtualizar + ", é: " + novoValor);
}

function DeletaProduto(nomes, precos, avaliacoes, ids) {
    let excluir = prompt("Qual nome do produto que tu deseja excluir: ");
    let nomesSup = [];
    let precosSup = [];
    let avaliacoesSup = [];
    let idsSup = [];
    let contadorSsup = 0;
    for (let j = 0; j < nomes.length; j++) {
        if(excluir != nomes[j]) {
            nomesSup[contadorSsup] = nomes[j];
            precosSup[contadorSsup] = precos[j];
            avaliacoesSup[contadorSsup] = avaliacoes[j];
            idsSup[contadorSsup] = ids[j];
            contadorSsup++;
        } else {
            console.log("Produto excluído com maestria ");
        }
    }

    nomes = nomesSup;
    precos = precosSup;
    avaliacoes = avaliacoesSup;
    ids = idsSup;
}
// CHAAATGPGT
/*
function DeletaProduto(nomes, precos, avaliacoes, ids) {
    let excluir = prompt("Qual nome do produto que tu deseja excluir: ");
    let nomesSup = [];
    let precosSup = [];
    let avaliacoesSup = [];
    let idsSup = [];
    let contadorSsup = 0;
    for (let j = 0; j < nomes.length; j++) {
        if(excluir != nomes[j]) {
            nomesSup[contadorSsup] = nomes[j];
            precosSup[contadorSsup] = precos[j];
            avaliacoesSup[contadorSsup] = avaliacoes[j];
            idsSup[contadorSsup] = ids[j];
            contadorSsup++;
        } else {
            console.log("Produto excluído com maestria ");
        }
    }

    return {
        nomes: nomesSup,
        precos: precosSup,
        avaliacoes: avaliacoesSup,
        ids: idsSup
    };
}

// Uso da função e atualização dos arrays
let resultado = DeletaProduto(nomes, precos, avaliacoes, ids);
nomes = resultado.nomes;
precos = resultado.precos;
avaliacoes = resultado.avaliacoes;
ids = resultado.ids;
*/

let continuar = true;

while(continuar) {
    let opcoes = parseInt(prompt("Digite:\n 0 - Encerrar programa\n1 - Cadastrar novamente\n 2 - Buscar produto pelo ID\n 3 - Buscar produto pelo nome\n 4 - Ordenar avaliações\n 5 - Atualizar preço\n 6 - Deletar produto"));

    switch (opcoes) {
        case 0:
            continuar = false;
            break;
        case 1:
            CadastrarProduto();
            break;
        case 2:
            BuscarProdutoPeloId(ids);
            break;
        case 3:
            BuscarProdutoPeloNome(nomes, ids);
            break;
        case 4:
            OrdenaDecrescenteAvaliacoes(avaliacoes);
            break;
        case 5:
            AtualizaPreco(ids, precos);
            break;
        case 6:
            DeletaProduto(nomes, precos, avaliacoes, ids);
            break;
        default:
            console.log("Opção invalida");
            break;
    }
}