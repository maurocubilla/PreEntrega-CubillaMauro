import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
        <h1>AUDIO CAR ONLINE</h1>

        <nav>
            <ul>
                <li><NavLink to={`/`} >Home</NavLink></li>
                <li> <NavLink to={`/categoria/3`} >Multimedia</NavLink> </li>
                <li><NavLink to={`/categoria/2`} >Parlantes</NavLink></li>
                <li><NavLink to={`/categoria/1`} >Accesorios</NavLink></li>
                <li><NavLink to={`/categoria/4`} >Alarmas</NavLink></li>
                
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar