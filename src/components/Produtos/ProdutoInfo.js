import React, { Component } from 'react';

class ProdutoInfo extends Component {

    fInsereProduto(idProduto){
        this.props.insereProduto(this.props.produto.product.id);
    }

    render() {
        return (
            <div className="col s6 m3">
                <div className="icon-block">
                    <img className="item-photo" src={this.props.produto.product.images[0]}
                        alt={this.props.produto.product.name} ></img>
                    <p className="left title-product">{this.props.produto.product.name}</p>

                    <div className="price-installments">
                        <span className="prices">R$ {this.props.produto.product.price.value}</span>
                        <span className="installments">{this.props.produto.product.price.installments}x R$ {this.props.produto.product.price.installmentValue},00</span>
                    </div>
                    <button className="add-into-bag" onClick={this.fInsereProduto.bind(this)}>
                        Adicionar a minha Sacola
                    </button>
                </div>
            </div>
        );
    }
}

export default ProdutoInfo;