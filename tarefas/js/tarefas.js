//criar a lista, adicionar a lista, retornar lista, retornar item da lista

let listaTarefas = [];

export function adicionarTarefa(tarefa){
    let tarefaJaExiste = listaTarefas.find(tarefaNaLista => {
        return tarefaNaLista.localeCompare(tarefa, undefined, { sensitivity: 'base'}) === 0;
    });

    //se a funcao find() retornoi algo diferente de undefined, então a variavel
    // tarefaJaExiste possui alguma informação, LOGO a tarefa digitada ja existe na lista
    if(tarefaJaExiste !=undefined) {
        alert('Essa tarefa já existe na sua lista');

    }
    else{
        listaTarefas.push(tarefa);
        alert('Tarefa adicionada com sucesso');
    }
}

export function excluirTarefa(posicao)
{
    if (posicao < 0 ){
        alert('Posiçao fornecida com sucesso');

    }
    else{
        listaTarefas.splice(posicao, 1);
        alert('Tarefa remolvida com sucesso!');
    }
}

export function getTarefas()
{
    return listaTarefas;
}