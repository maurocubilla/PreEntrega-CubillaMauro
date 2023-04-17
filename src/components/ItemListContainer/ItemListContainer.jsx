import { useState, useEffect } from 'react'
import { getProducts, getProductosPorCategoria } from '../../asyncmock'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  const {idCategoria} = useParams();
  
  useEffect(() => {

    const funcionProductos = idCategoria ? getProductosPorCategoria : getProducts;

    funcionProductos(idCategoria)
        .then(response => setProducts(response))
        .catch(error => console.error(error))
  }, [idCategoria])

  return (
   <><h2 className='sub'> {props.greeting} Productos Destacados </h2><ItemList className='list' products={products} /></>
  )
}

export default ItemListContainer