const products = [
    {id:"1", nombre: "soporte celular", precio: 60000,  img: "../img/accesorios/soportesp1.jpg", idCat:"1"},
    {id:"2" , nombre: "parlante", precio: 23000,  img: "../img/parlantes/ROCKFORDFOSGATEPRIMER169X3.jpg", idCat:"2"},
    { id:"3", nombre: "multimedia", precio: 100000,  img: "../img/estereos/estereohilux.jpg", idCat:"3"},
    { id:"4", nombre: "pomo", precio: 7000,  img: "../img/accesorios/pomosparco1.jpg", idCat:"1"},
    { id:"5", nombre: "alarma", precio: 34000,  img: "../img/alarmas/CYBERFX360US.png", idCat:"4"},
    {id:"6", nombre: "sensor", precio: 9000,  img: "../img/accesorios/SENSORDEESTACIONAMIENTOPS220.png", idCat:"4"},

]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout( () => {
            resolve(products);
        }, 1000)
    })
}

export const getUnproducto = (id) => {
    return new Promise( resolve =>{
        setTimeout( ()=> {
         const producto = products.find(prod => prod.id === id);
         resolve(producto);
        }, 100)
    } )
}

export const getProductosPorCategoria = (idCatregoria) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const productosCategoria = products.filter(prod => prod.idCat === idCatregoria);
            resolve(productosCategoria); 
        },100)
    })

}