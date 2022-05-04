import React from 'react'
import '../assets/css/MenuButton.css'

const MenuButton = ({ toggle, isOpen }) => {

    return (
        <div className={isOpen ? "menu-btn open" : "menu-btn"} onClick={toggle}>
            <div className="menu-btn__burger"></div>
        </div>
    )
}

export default MenuButton