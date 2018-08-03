
//HELPERS METHODS - FLUX PATTERN
export function listarProdutos(produtos) {
    return { type: 'LISTA_PRODUTOS', produtos }
}

export function insereSacola(totalSacola) {
    return { type: 'INSERE_SACOLA', totalSacola }
}

export function totalSacola(totalSacola) {
    return { type: 'TOTAL_SACOLA', totalSacola }
}

export function listaSacola(lista) {
    return { type: 'LISTA_SACOLA', lista }
}

