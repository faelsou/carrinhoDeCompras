
export class ContatoError extends Error{
    constructor(mensagem){
        super();
        this.message = mensagem;
    }
}