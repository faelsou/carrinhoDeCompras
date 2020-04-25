import { adicionarContato } from "../controller/ContatoController.js";
import { listarContatosTabela } from "./tabela.js";
import { ContatoError } from "../model/ContatoError.js";

btnSalvar.addEventListener('click', () => {
    try{
        let nome = inputNome.value.trim();
        let telefone = inputTelefone.value.trim();
        adicionarContato(nome, telefone);
        listarContatosTabela();//listar tabelas
        inputNome.value = ''; //limpar os campos
        inputTelefone.value = '';
    } catch(error){ 
        if (error instanceof ContatoError) {
            alert(error.message);
            
        }
        else{
            throw error;
        }

    }
})

