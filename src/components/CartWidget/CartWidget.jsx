import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://www.pngitem.com/pimgs/m/364-3641456_transparent-carrito-de-compras-png-carrito-de-compras.png"
    
    
  return (
    <div>
        <img className='imgCarrito' src = {imgCarrito} alt="carrito" />
        <strong>2</strong>
    </div>
  )
}

export default CartWidget