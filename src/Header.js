import React from 'react'
import Logo from './robinhood.svg'
import './Header.css'


function Header() {
    return (
        <div className="header__wrapper">
            
            {/*Logo */}
            <div className="header_logo">
                <img src ={Logo} width={20}/>
            </div>
            {/*Search */}
            <div className="header__search">
                <div className="header__searchContainer">
                    <input placeholder="Search" type="test"/>
                </div>
            </div>
            {/*munuitems */}
            <div className="header__menuitems">
            <a href="#">Free Stocks</a>
            <a href="#">Portfolio</a>
            <a href="#">Cash</a>
            <a href="#">Messages</a>
            <a href="#">Account</a>

            </div>
        </div>
    )
}

export default Header
