// FUNÇÕES - 1
let projetos = [];
let orcamentos = [];
let contador = 0;

function criarProjeto() {
    let projeto = prompt("Insira o nome do seu projeto: ");
    let orcamento = prompt("Insira o orçamento do seu projeto: ");

    projetos[contador] = projeto;
    orcamentos[contador] = orcamento;
    contador++;

    console.log("Projeto criado com sucesso ");
}
criarProjeto();

let valor = prompt("Selecione um valor desejado: ");
let opcoes = parseInt(prompt("Selecione\n 1 - Receita\n 2 - Despesa"));


function calculaReceitaDespesa(projeto, valor, opcoes) {
    for (let i = 0; i < projetos.length; i++) {
        if (projeto == projetos[i]) {
            if (opcoes == 1) {
                orcamentos[i] += valor;
            } else if (opcoes == 2 && valor > orcamentos[i]) {
                console.log("Valor não pode ser mais que o teu orçamento");
            } else {
                orcamentos[i] -= valor;
            }
            console.log("O saldo atual é de: " + orcamentos[i]);
        }
    }
}
calculaReceitaDespesa(projetos, valor, opcoes);

// 2-
let numero = prompt("Insira um número: ");
function calculaValorPerfeito(numero) {
    let somaDivisores = 0;

    for (let index = 1; index < numero; index++) {
        if (numero % index == 0) {
            somaDivisores += index
        }
        return somaDivisores == numero;
    }

}

// 3 - 
/*
let salarios = [];
let numeroFilhos = [];
let index = 0;

function coletarDados() {
    let salario = prompt("Insira o teu salario: ");
    let numFilho = prompt("Insira o número de filhos: ");
    
    salarios[index] = salario;
    numeroFilhos[index] = numFilho;
    index++;

    let desejaCadastrar = parseInt(prompt("Insira\n 1 - Cadastrar novamente\n 2 - Encerrar "));
    if(desejaCadastrar == 1) {
        coletarDados();
    } else {
        console.log("Thats ok.");
    }
}
coletarDados();
*/


function calculaMediaSalariio() {
    let salarios = [20, 10, 80, 50];
    let somaSalario = 0;
    for (let i = 0; i < salarios.length; i++) {
        somaSalario += salarios[i];
    }

    let media = somaSalario / salarios.length;
    console.log("A média dos salarios é: " + media.toFixed(2));
}

calculaMediaSalariio();

function calculaMediaFilhos() {
    let numeroFilhos = [2, 3, 1, 2, 2, 2, 3, 2, 1];
    let somaFilhos = 0;
    for (let j = 0; j < numeroFilhos.length; j++) {
        somaFilhos += numeroFilhos[j];
    }

    let mediaFilhos = somaFilhos / numeroFilhos.length;
    console.log("A média dos filhos é: " + mediaFilhos.toFixed(2));
}

calculaMediaFilhos();

function calculaMaiorSalario() {
    let maiorSalario = 0;
    let salarios = [20, 10, 80, 50];
    for (let a = 0; a < salarios.length; a++) {
        if (salarios[a] > maiorSalario) {
            maiorSalario = salarios[a];
        }
    }
    console.log("O maior salario é: " + maiorSalario);
}

calculaMaiorSalario();


function calcularPorcentagem() {
    let porcentagem
    let soma = 0;
    let salarios = [200, 1200, 1000, 4000, 8000, 7500, 1600, 1700, 2800, 100000];
    for (let x = 0; x < salarios.length; x++) {
        if (salarios[x] < 1500) {
            soma++;
        }
    }

    porcentagem = soma / salarios.length;
    console.log("A média dos sálarios abaixo de R$1500 é: " + (porcentagem * 100) + "%");
}

calcularPorcentagem();
