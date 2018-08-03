// import {List} from 'immutable';

//REDUCER
export function produtosReducer(state = [], action) {

    if (action.type === 'LISTA_PRODUTOS') {
        return action.produtos;
    }

    return state;
}