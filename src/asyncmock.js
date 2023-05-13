const productos = [
    {id: "1", nombre: "soporte celular", precio: 4000, stock: 20, img: "../img/accesorios/soportesp1.jpg", idCat: "1"},
    {id: "2", nombre: "parlante", precio: 23000, stock: 10, img: "../img/parlantes/ROCKFORDFOSGATEPRIMER169X3.jpg", idCat: "2"},
    {id: "3", nombre: "multimedia", precio: 100000, stock: 19, img: "../img/estereos/estereohilux.jpg", idCat: "3"},
    {id: "4", nombre: "pomo", precio: 7000, stock: 30, img: "../img/accesorios/pomosparco1.jpg", idCat: "1"},
    {id: "5", nombre: "alarma", precio: 34000, stock: 20, img: "../img/alarmas/CYBERFX360US.png", idCat: "4"},
    {id: "6", nombre: "sensor", precio: 9000, stock: 50, img: "../img/accesorios/SENSORDEESTACIONAMIENTOPS220.png", idCat: "4"},
    
    

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

export const getUnproducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })

}
