import {listarProdutos, insereSacola, totalSacola, listaSacola } from '../action/actionCreator';

class MarisaApi {

    static listaProdutos() {
        return dispatch => {
            fetch('http://localhost:8080/api/lista/produtos')
                .then(response => response.json())
                .then(produtos => {
                    dispatch(listarProdutos(produtos));
                    return produtos; 
                });
        }
    }
    
    static totalSacolaApi() {
        return dispatch => {
            fetch(`http://localhost:8080/api/total/sacola`)
                .then(response => response.json())
                .then(sacola => {
                    dispatch(totalSacola(sacola));
                    return sacola; 
                });
        }
    }

    static insereProdutoSacola(idProduto) {
        return dispatch => {
            fetch(`http://localhost:8080/api/sacola/insert/${idProduto}`,{method: "PUT"})
                .then(response => response.json())
                .then(totalSacola => {
                    dispatch(insereSacola(totalSacola));
                    return totalSacola; 
                });
        }
    }

    static addProdutoSacola(idProduto) {
        return dispatch => {
            fetch(`http://localhost:8080/api/sacola/add/${idProduto}`,{method: "PUT"})
                .then(response => response.json())
                .then(lista => {
                    console.log(lista);
                    dispatch(listaSacola(lista));
                    return lista; 
                });
        }
    }

    static rmProdutoSacola(idProduto) {
        return dispatch => {
            fetch(`http://localhost:8080/api/sacola/rm/${idProduto}`,{method: "PUT"})
                .then(response => response.json())
                .then(lista => {
                    dispatch(listaSacola(lista));
                    return lista; 
                });
        }
    }

    static listaSacolaApi() {
        return dispatch => {
            fetch('http://localhost:8080/api/lista/sacola')
                .then(response => response.json())
                .then(lista => {
                    dispatch(listaSacola(lista));
                    return lista; 
                });
        }
    }

    static deleteProdutoSacola(idProduto) {
        return dispatch => {
            fetch(`http://localhost:8080/api/sacola/${idProduto}`,{method: 'DELETE'})
                .then(response => response.json())
                .then(lista => {
                    dispatch(listaSacola(lista));
                    return lista; 
                });
        }
    }

}

export default MarisaApi;