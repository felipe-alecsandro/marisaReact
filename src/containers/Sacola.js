import React, { Component } from 'react';
import MarisaApi from '../stores/MarisaApi';
import { connect } from 'react-redux';

import ButtonBuy from '../components/Sacola/ButtonBuy';
import SacolaNav from '../components/Sacola/SacolaNav';
import SacolaProdutoInfo from '../components/Sacola/SacolaProdutoInfo';
import SubTotalInfo from '../components/Sacola/SubTotalInfo';

class Sacola extends Component {

    componentDidMount() {
        this.props.getListaSacola();
    }

    render() {
        return (
            <div>
                <SacolaNav></SacolaNav>
                <div className="container car-section roboto">
                    <ButtonBuy></ButtonBuy>
                    <div className="section">
                        {
                            this.props.sacolaItens.length !== 0 ? this.props.sacolaItens.subTotalProdutos.map(item => <SacolaProdutoInfo key={item.id} item={item} {...this.props}></SacolaProdutoInfo>) : ""
                        }
                    </div>
                    <SubTotalInfo subTotal={this.props.sacolaItens.totalBag}></SubTotalInfo>
                    <ButtonBuy></ButtonBuy>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        sacolaItens: state.sacolaListaReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListaSacola: () => dispatch(MarisaApi.listaSacolaApi()),
        addProduto: idProduto => dispatch(MarisaApi.addProdutoSacola(idProduto)),
        rmProduto: idProduto => dispatch(MarisaApi.rmProdutoSacola(idProduto)),
        deleteProduto: idProduto => dispatch(MarisaApi.deleteProdutoSacola(idProduto)),
    }
}

const SacolaContainer = connect(mapStateToProps, mapDispatchToProps)(Sacola)
export default SacolaContainer;

