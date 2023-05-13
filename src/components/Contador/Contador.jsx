import { useState, } from "react"
import './Contador.css'


const Contador = ({ stock, inicial, agregarAlCarrito }) => {
    const [contador, setContador] = useState(inicial);


    const aumentarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }
    const disminuirContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }


    return (
        <>
            <div>
                <button onClick={aumentarContador}> + </button>
                <strong> {contador} </strong>
                <button onClick={disminuirContador}> - </button>

                <button onClick={() => agregarAlCarrito(contador)}> Agregar al carrito </button>

            </div>
        </>
    )
}

export default Contador