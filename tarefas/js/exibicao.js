//mostrar a lsta de tarefa html da pagina
import { getTarefas, excluirTarefa } from "./tarefas.js";


export function exibirTarefas()
{
   let tarefas = getTarefas();
   let listaItenHtml = '';

   tarefas.forEach((tarefa, indice) => {
    listaItenHtml +=`
        <li>  
            ${tarefa}
            <button data-posicao = "${indice}">
                Excluir
            </button>
        </li>  
    `;
   });
   listaItenHtml =  `
    Sua lista de tarefas possui os seguintes itens: <br>
    <ul>
        ${listaItenHtml}
    </ul>
    `;
    if(tarefas.length === 0){
        listaItenHtml  = 'Nenhuma tarefa foi adicionada ainda :( ';

    }

    $listarTarefas.innerHTML = listaItenHtml;

}

$listarTarefas.onclick = ({target:{tagName, dataset: {posicao}}}) => {
    if (event.target.tagName === 'BUTTON') {
        excluirTarefa(posicao);
        exibirTarefas();
    }      

/*$listarTarefas.onclick = (event) => {
    if (event.target.tagName === 'BUTTON') {
        let posicao = event.target.dataset.posicao;
        excluirTarefa(posicao);
        exibirTarefas();
    }*/
}

