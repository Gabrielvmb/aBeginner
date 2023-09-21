let produtosCarrinho = [];
let quantidades = [];


function AddProdutosCarrinho(nome, quantidade) {
    let produtoExistente = false;
    for (let i = 0; i < produtos.length; i++) {
        if (nome == produtos[i]) {
            quantidade[i] += quantidade;
            produtoExistente = true;
            i = produtos.length + 1;
        }

        if (!produtoExistente) {
            produtos[produtos.length] = nome;
            quantidade[quantidade.length] += quantidade;
            i++;
        }
    }
    console.log("Produto adicionado ao carrinho!!");
}


function DeletarProdutosCarrinho(nome, quantidade) {
    let produtoSup = [];
    let quantiSup = [];
    let contSup = 0;
    for (let i = 0; i < nomes.length; i++) {
        if(nome == produtosCarrinho[i]) {
            quantidades[i] -= quantidade; 
        }   
    }

    for (let j = 0; j < nomes.length; j++) {
        if(quantidades[i] = 0) {
            console.log("produto excluído do carrinho");
        } else {
            produtoSup[contSup] = produtosCarrinho[i];
            quantiSup[contSup] = quantidades[i];
            contSup++;
        }
    }

    produtosCarrinho = produtoSup;
    quantidades = quantiSup;
}

function ValorTotal() {
    let valorTotal = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (produtosCarrinho[i] = nomes[j]) {
                ValorTotal += quantidades[i] * precos[j]
                
            }
        }     
    }
    return valorTotal;
}

function ExibirProdutos() {
    for (let i = 0; i < produtosCarrinho.length; i++) {
    console.log(produtosCarrinho[i], quantidades[i] + "unidades");
    }

    console.log("valor total: " + ValorTotal());
}


let continuar2 = true;
while (continuar2) {
    let opcao = parseInt(prompt("escolha uma opção no carrinho: \n1 - add produto \n 2 - deletar produto \n3 - Exibir resumo \n4 - encerrar programa"));
    switch (opcao) {
        case 1:
            let nomeAdd =  prompt("digite o nome do produto que deseja no carrinho: ");
            let qtAdd = parseInt(prompt("digite a quantidade"));
            AddProdutosCarrinho(nomeAdd, qtAdd);
            break;
        case 2:
            let nomeDelete = prompt("digite o nome que deseja deletar do carrinho");
            let qtDelete = parseInt(prompt("digite a quantidade"));
            DeletarProdutosCarrinho(nomeDelete, qtDelete);
            break;
        case 3:
            ExibirProdutos();
        case 4:
            continuar2 = false;
            break;
        default:
            console.log("opcao inválida");
            break;
    }    
}