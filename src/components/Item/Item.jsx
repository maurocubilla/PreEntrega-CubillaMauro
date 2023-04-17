import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardproducto'>
        <img className='imgproducto' src={img} alt={nombre} />
        <h3>nombre: {nombre} </h3>
        <p>precio: {precio} </p>
        <p>ID: {id} </p>
        <Link to={`/item/${id}`} > ver detalles </Link>

        {/*  <button className='btnproducto' > ver detalles</button>  */}

    </div>
  )
}

export default Item