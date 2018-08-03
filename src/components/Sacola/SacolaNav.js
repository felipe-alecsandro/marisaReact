import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SacolaNav extends Component {
    render() {
        return (
            <nav className="white shop-list">
                <div className="nav-wrapper container">
                    <a id="logo-container" href="" className="brand-logo center">
                        <img src="https://images2.marisa.com.br/medias/sys_master/images/images/h16/hcc/9898321838110/logo-marisa.svg"
                            alt="Logotipo da marisa"></img>
                    </a>
                    <Link to="/" data-target="nav-mobile" className="sidenav-back">
                        <i className="material-icons dp48">replay</i>
                    </Link>
                    <div className="back-step">SACOLA DE COMPRAS</div>
                </div>
            </nav>
        );
    }
}

export default SacolaNav;