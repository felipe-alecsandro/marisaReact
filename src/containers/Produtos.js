import React, { Component } from 'react';
import { connect } from 'react-redux';
import MarisaApi from '../stores/MarisaApi';

import ProdutoInfo from '../components/Produtos/ProdutoInfo';
import BreadcrumbsProduto from '../components/Produtos/BreadcrumbsProduto';
import ProdutosNav from '../components/Produtos/ProdutosNav';

class Produtos extends Component {

    componentDidMount() {
        this.props.getProdutos();
        this.props.getTotalSacola();
    }

    render() {
        return (
            <div>
                <ProdutosNav container={this.props}></ProdutosNav>
                <div className="container">
                    <BreadcrumbsProduto></BreadcrumbsProduto>
                    <div className="section">
                        <div className="row">
                            {
                                this.props.listaProdutos.map(produto => <ProdutoInfo key={produto.product.id} produto={produto} insereProduto={this.props.insereProduto}></ProdutoInfo>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        listaProdutos: state.produtosReducer,
        totalSacola: state.sacolaNotificaReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProdutos: () => dispatch(MarisaApi.listaProdutos()),
        insereProduto: idProduto => dispatch(MarisaApi.insereProdutoSacola(idProduto)),
        getTotalSacola: () => dispatch(MarisaApi.totalSacolaApi())
    }
}

const ProdutosContainer = connect(mapStateToProps, mapDispatchToProps)(Produtos)
export default ProdutosContainer;
