
import { getContatos, excluirContato } from "../controller/ContatoController.js";
import { ContatoError } from "../model/ContatoError.js";

listarContatosTabela();

export function listarContatosTabela() {
    const contato = getContatos();
    let linhasTabela = "";
    

    contato.forEach((contato, indice) => {
    linhasTabela += `
        <tr>
            <td>${contato.nome}</td>
            <td>${contato.telefone}</td>
            <td>
                <button data-indice="${indice}" class="btn btn-danger">
                    <i style="pointer-events: none;" class="fas fa-times"></i>
                </button>
            </td>
        </tr>
        `
    });
    tabelaContatos.innerHTML = linhasTabela;
}

tabelaContatos.addEventListener('click', event =>{
    try{
        let indice =event.target.dataset.indice;
        if (indice !== undefined) {
            excluirContato(indice);
            listarContatosTabela();
        }
    }
    catch(erro){
        if(erro instanceof ContatoError){
            alert(error.message);
        }
        else{
            throw error;
        }
    }
})
