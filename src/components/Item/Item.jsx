import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardproducto'>
        <img className='imgproducto' src={img} alt={nombre} />
        <p>nombre: {nombre} </p>
        <p>precio: {precio} </p>
        <p>ID: {id} </p>
        <Link className='btnproducto' to={`/item/${id}`} > ver detalles </Link>

         {/* <button className='btnproducto' > ver detalles</button>  */}

    </div>
  )
}

export default Item