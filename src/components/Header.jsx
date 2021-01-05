import React from 'react';
import '../assets/styles/components/Header.scss'

const Header = () => (
    <header className="header">
        <img className="header__img" src="../assets/img/pngegg.png" alt="HeaderImg"/>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src="../assets/img/coffee-5132832_1920.jpg" alt="imgperfil"/>
                <p>Perfil</p>
            </div>
            <ul>
                <li> <a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>
        </div>

    </header>

)

export default Header