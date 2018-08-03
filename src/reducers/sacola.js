export function sacolaNotificaReducer(state = '', action){

    if (action.type === 'INSERE_SACOLA' || action.type === 'TOTAL_SACOLA') {
        return action.totalSacola;
    }

    return state;

}

export function sacolaListaReducer(state = [], action){

    if (action.type === 'LISTA_SACOLA') {
        return action.lista;
    }
 
    return state;

}