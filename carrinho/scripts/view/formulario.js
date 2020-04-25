import { formataMoeda } from "../utils/formataMoeda.js";
import * as CarrinhoController from '../controller/CarrinhoController.js';
import * as Tabela from './tabela.js'

//logica do seletor de produto no formulário
$produto.addEventListener('change', () => {
    let indice = $produto.selectedIndex;
    let preco = $produto.options[indice].dataset.preco;
    console.log(preco);

    if (preco !== undefined) {
        $valorUnitario.value = formataMoeda(preco);
    }
    else {
        $valorUnitario.value = 'R$ 0,00';
    }
});

//Logica do formulario para adicionar produtos ao carrinho
$btnForm.addEventListener('click', () => {
    let nomeProduto = $produto.value.trim();
    let precoUnitario = parseFloat($valorUnitario.value.trim().replace(/(R\$ ?|\.)/g, '').replace(',', '.'));
    let quantidade = parseInt($quantidade.value.trim());

    //tratar error
    try {
        CarrinhoController.adicionarProduto(nomeProduto, precoUnitario, quantidade);
        Tabela.listarProdutos();
        $produto.value = '';
        $quantidade.value = 1;
        $valorUnitario.value = 'R$ 0,00';
        $msgErro.classList.add('d-none');
    }
    catch (error) {
        $msgErro.textContent = error.message;
        $msgErro.classList.remove('d-none');
    }


});