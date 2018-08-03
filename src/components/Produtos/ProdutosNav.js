import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProdutosNav extends Component {
    
    render() {
        return (
            <nav className="white vitrine">
                <div className="nav-wrapper container">
                    <a id="logo-container" href="" className="brand-logo">
                        <img src="https://images2.marisa.com.br/medias/sys_master/images/images/h16/hcc/9898321838110/logo-marisa.svg" alt="Logotipo da marisa"></img>
                    </a>
                    <ul className="right shopping-bag ">
                        <li>
                            <Link to="/sacola">
                                <img src="https://images2.marisa.com.br/_ui/responsive/theme-marisa/img/shopping-bag-icon.png" alt="Icone de Sacola"></img>
                                <span className="mini-badge">{this.props.container.totalSacola.totalSacola}</span>
                            </Link>
                        </li>
                    </ul>

                    <ul id="nav-mobile" className="sidenav">
                        <li>
                            <a href="">Navbar Link Mobile</a>
                        </li>
                    </ul>
                    <a href="" data-target="nav-mobile" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <form name="search_form_SearchBox" method="get" action="">
                        <div className="input-group">
                            <input type="text" id="search-input" className="" name="search-input" value="" placeholder="O que você procura?"></input>
                            <button className="" type="submit">
                                <i className="material-icons dp48">search</i>
                            </button>
                        </div>
                    </form>
                </div>
            </nav>
        );
    }
}

export default ProdutosNav;