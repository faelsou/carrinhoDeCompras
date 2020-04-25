import * as CarrinhoController from '../controller/CarrinhoController.js';
import { formataMoeda } from '../utils/formataMoeda.js';

$produtosTabela.addEventListener('click', event =>{
    let indice = event.target.dataset.indice;
    if (indice !== undefined) {
        //excluir o produto do carrinho
        CarrinhoController.excluirProduto(indice);
        listarProdutos();
    }
})

listarProdutos();
export function listarProdutos()
{
    const listaProdutos = CarrinhoController.getProdutos();
    let totalCarrinho = CarrinhoController.getTotal();
    let linhasTabela = '';

    listaProdutos.forEach((produto, indice) => {
        linhasTabela +=`
        <tr>
            <td>${produto.nome}</td>
            <td>${formataMoeda(produto.preco)}</td>
            <td>${produto.quantidade}</td>
            <td>${formataMoeda(produto.quantidade * produto.preco)}</td>
            <td>
            <button data-indice="${indice}" class="btn btn-danger">
                X
            </button>
        </td>
        
    `;
    });
    $produtosTabela.innerHTML = linhasTabela;
    $totalCompra.innerHTML = formataMoeda(totalCarrinho);
}