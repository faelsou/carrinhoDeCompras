//validar o campo do formulario, coletar dados
import {adicionarTarefa} from './tarefas.js';
import { exibirTarefas } from './exibicao.js';

$btnAdicionar.onclick = () => {
    let nomeTarefa = $tarefa.value.trim();
    if(nomeTarefa === ""){
        alert('Por favor, digite uma tarefa valida!');
        
    }
    else{
        adicionarTarefa(nomeTarefa);
        exibirTarefas();
    }
    $tarefa.value = '';
    $tarefa.focus();
}