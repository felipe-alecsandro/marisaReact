import React, { Component } from 'react';

class SubTotalInfo extends Component {

    render() {
        return (
            <div className="section full-subtotal ">
                <div className="car-subtotal">subtotal</div>
                <div className="car-subtotal-isntallments">5x R$ {this.props.subTotal !== undefined ? this.props.subTotal.totalIntallment : ""}</div>
                <div className="car-subtotal-in-cash">ou R$ {this.props.subTotal !== undefined ? this.props.subTotal.totalItens : ""} à vista</div>
            </div>
        );
    }
}

export default SubTotalInfo;