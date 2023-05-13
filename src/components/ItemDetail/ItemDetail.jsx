import './ItemDetail.css'
import Contador from '../Contador/Contador'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'
import { collection, getDocs, where, query } from 'firebase/firestore';


const ItemDetail = ({ id, nombre, precio, detalle, img, stock }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);


  const manejarCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio, detalle };
    agregarProducto(item, cantidad);
  }
  return (
    <div className='contenedorItem' >
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <h3> ID: {id} </h3>
     
      <p> detalle: {detalle} </p>
      <img src={img} alt={nombre} />

      {
        agregarCantidad > 0 ? (<Link to="/cart" > Finalizar Compra</Link>) :
          (<Contador inicial={1} stock={stock} agregarAlCarrito={manejarCantidad} />)
      }


    </div>
  )
}

export default ItemDetail

