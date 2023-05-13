
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const CartWidget = () => {
  const { carrito } = useContext(CarritoContext);

  const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
  const imgCarrito = "https://www.pngitem.com/pimgs/m/364-3641456_transparent-carrito-de-compras-png-carrito-de-compras.png"


  return (
    <Link to='/cart'>
      <img className='imgCarrito' src={imgCarrito} alt="carrito" />
      {
        totalCantidad
      }
    </Link>
  )
}

export default CartWidget


