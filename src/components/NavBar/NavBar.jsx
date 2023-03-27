import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>Tienda Electronica Online</h1>

        <nav>
            <ul>
                <li>Multimedia</li>
                <li>Parlantes</li>
                <li>Accesorios</li>
                <li>Alarmas</li>
                <li>Cajas acusticas</li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar