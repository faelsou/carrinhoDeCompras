import Produto from '../model/Produto.js'


const listaProdutos = JSON.parse(sessionStorage.getItem('carrinhoProdutos')) || [];


//JSDOC********
/**
 * Funcao que adiciona um produto no carrinho de compras da aplicação
 * @param {strinf} nomeProduto Nome do produto a ser adicionado no carrinho
 * @param {number} precoUnitario preço do produto em formato numerico (float)
 * @param {number} quantidade Quantidade do produto em formato numerico (integer) 
 */

//lOGICA PARA ADD ITENS NO CARRINHO
export function adicionarProduto(nomeProduto, precoUnitario, quantidade) {
    const produto = new Produto(nomeProduto, quantidade, precoUnitario);
    validarProduto(produto);
    listaProdutos.push(produto);
    sessionStorage.setItem('carrinhoProdutos', JSON.stringify(listaProdutos));
    console.log(listaProdutos);
    console.log(getTotal());
}

/**
 * Função oque exclui produto do carrinho de compras da aplicação
 * @param {number} indice pasoção do item a ser excluido 
 */

export function excluirProduto(indice) {
    listaProdutos.splice(indice, 1);
    sessionStorage.setItem('carrinhoProdutos', JSON.stringify.produto);
}

/**
 * 
 * @typedef {object} produto 
 */

/**
 * 
 * @param {objeto} produto produto 
 */
//Valida os dados do produto pra saber se estão no formulario

function validarProduto(produto) {
    if (produto instanceof Produto === false) {
        throw new Error('Dados informados precisam ser do tipo "produto"!');
    }

    if (!produto.nome) {
        throw new Error('Nome do produto é obrigatório');
    }

    if (produto.quantidade < 1 || isNaN(produto.quantidade)) {
        throw new Error('Quantidade invalida! Informe um numero igual ou maior que 1');

    }

    if (produto.preco < 0 || isNaN(produto.preco)) {
        throw new Error('Preco invalido! Informe um numero igual ou maior que 0!');
    }
}

//Retorna todos os itens da lista de produtos
export function getProdutos() {
    return listaProdutos;

}

//Retorna o total da compra do carrinho
export function getTotal() {
    return listaProdutos.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);
    //let total = 0;
    //listaProdutos.forEach(produto => {
    //total += produto.preco * produto.quantidade;

    // });
} 