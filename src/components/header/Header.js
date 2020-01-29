import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/site/chibilogo.png';
import './_header.scss';

class Header extends Component {
    render() {

        return (
            <header className="c_header">
                <div className="c_header__inner">
                    <Link to="/" className="c_header__logo">
                        <h1>Momo 
                            <img src={Logo} alt="Momo og Sana-logo" />
                            Sana
                        </h1>
                        <h2>Hur många hundar i hissen?</h2>
                    </Link>
                </div>
            </header>
        );
    }
}

export default Header;