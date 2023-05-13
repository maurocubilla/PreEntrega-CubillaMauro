import { useState, useEffect } from 'react';
import { getProductos, getProductosPorCategoria } from '../../asyncmock';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../services/firebase/config';


const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();
  
  useEffect( () =>{
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)): collection(db, "productos");

    getDocs(misProductos)
       .then(res=> {
        const nuevosProductos = res.docs.map( doc => {
          const data = doc.data()
          return {id:doc.id, ...data}
        })
        setProductos(nuevosProductos);
       })
       .catch(error => console.log(error))
  }, [])
   /* useEffect(() => {

    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
        .then(response => setProductos(response))
        .catch(error => console.error(error))
  }, [idCategoria])  */
 
  return (
   <><h2 className='sub'> {greeting} Productos Destacados </h2><ItemList className='list' productos={productos} /></>
  )
}

export default ItemListContainer