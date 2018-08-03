import React, { Component } from 'react';

class SacolaProdutoInfo extends Component {

    addProduct() {
        console.log('entrou')
        this.props.addProduto(this.props.item.id);
    }

    rmProduct() {
        this.props.rmProduto(this.props.item.id);
    }

    deleteProduct() {
        this.props.deleteProduto(this.props.item.id);
    }

    render() {
        return (
            <div className="row">
                <div className="row unset">
                    <div className="col s4 m4 car-product-photo">
                        <img src={this.props.item.images} alt={this.props.item.name}></img>
                    </div>

                    <div className="col s6 m4">
                        <div className="car-title-product ">
                            <p>{this.props.item.name}</p>
                        </div>
                        <div className="car-control-product center">
                            <span className="car-more" onClick={this.rmProduct.bind(this)}>
                                <i className="material-icons dp48">remove</i>
                            </span>
                            <span className="car-number-product">{this.props.item.qtd}</span>
                            <span className="car-less" onClick={this.addProduct.bind(this)}>
                                <i className="material-icons dp48">add</i>
                            </span>
                        </div>
                    </div>

                    <div className="col s2 m4" onClick={this.deleteProduct.bind(this)}>
                        <i className="material-icons dp48 right icons-car-delete">delete</i>
                    </div>
                </div>
                <div className="row ">
                    <div className="col s5 m2">
                        <span className="price-product right">Unitário: R$ {this.props.item.price.value}</span>
                        <span className="installment-product right">ou {this.props.item.price.installments}x R$ {this.props.item.price.installmentValue},00</span>
                    </div>
                    <div className="car-total-unit col s5 m2 offset-s2 offset-m8 ">
                        <span className="right">Total: R$ {this.props.item.subTotalItem}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default SacolaProdutoInfo;