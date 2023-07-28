alert("Bienvenido a nuestra tienda");
alert("A continuacion se le mostrara nuestros productos en stock");

class Producto{

    constructor(id,categoria,nombre,precio=0,stock=0){
        this.id=id;
        this.categoria=categoria;
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
    }
    setPrecio(precio){
        this.precio=precio;
    }
    setPrecio(nombre){
        this.nombre=nombre;
    }
    setPrecio(stock){
        this.stock=stock;
    }
    toString() {
        return "IdProducto: " + this.id + "\nNombre :" + this.nombre + "\nPrecio: $" + this.precio +"\nStock: " + this.stock;
    }

    calcularCuotas(cuotas){
        alert("El precio a pagar es "+(this.precio/cuotas)+" en "+ cuotas +" cuotas");
    }

}
let productos = [
    new Producto(1,"Camperas","Campera Puffer", 34000, 5),
    new Producto(2,"Camperas","Campera Rompe Viento", 23000, 5),
    new Producto(3,"Camperas","Campera de Cuero", 27800, 5),
    new Producto(4,"Buzos","Buzo Palace", 15250, 2),
    new Producto(5,"Buzos","Buzo Currentrly", 13542, 3),
    new Producto(6,"Buzos","Buzo Oversize", 13542, 3),
    new Producto(7,"Chalecos","Chaleco Puffer negro", 23433, 1),
    new Producto(8,"Chalecos","Chaleco Puffer azul oscuro", 23433, 1),
    new Producto(9,"Chalecos","Chaleco Puffer rojo", 23433, 1)
  ];

let carrito = [];

function mostrarProductos(arregloProductos,categoria){
    console.clear();
    console.log("Productos");

  arregloProductos.sort((a, b) => {
    if (a.nombre > b.nombre) {
      return 1;
    } else if (a.nombre < b.nombre) {
      return -1;
    } else {
      return 0;
    }
  });

  if(categoria !== "carrito"){
    let productoPorCategoria = arregloProductos.filter(producto => producto.categoria === categoria);
    productoPorCategoria.forEach( producto => console.log(producto.toString()));
  }else{
    arregloProductos.forEach(producto => console.log(producto.toString()));
  }
  
  
};



function mostrarMenuProductos(categoria){

    mostrarProductos(productos,categoria);

    do{
      idProductoIngresado = prompt("Que producto desea comprar, ingrese id del Producto o ingrese Volver para ir al menu de categorias");
        
      let producto = productos.find(producto => producto.id === parseInt(idProductoIngresado));
      
      if(idProductoIngresado.toUpperCase() != "VOLVER" && producto.categoria === categoria){

          const confirmacion = confirm(`Estas seguro que deseas agregar el producto ${producto.nombre} al carrito?`)
            
          if(confirmacion){

                carrito.push(producto);

                alert(`Producto ${producto.nombre} agregado al carrito`);

          }
        
        }else if(idProductoIngresado.toUpperCase() != "VOLVER"){
          alert("Por favor ingrese una opcion correcta");
        }

    }while(idProductoIngresado.toUpperCase() != "VOLVER");
    
}

function eliminardelcarrito(idProducto){

  let indice = carrito.findIndex((producto) => producto.id === idProducto);

  if (indice === -1) {
    return alert(`El producto no existe en el carrito`);
  }else{

    const confirmacion = confirm(`Estas seguro que deseas eliminar el producto ${carrito.nombre} del carrito?`)

    if(confirmacion) {
      carrito = carrito.filter( producto => producto.id !== idProducto); 
    } else {
      alert("Eliminación cancelada")
    }

  }

}

function mostrarCarrito(){
   
    let encendido = true;   

    alert("Estos son los productos que agrego al carrito");

    

    do{

      mostrarProductos(carrito,"carrito");

      let opcion = prompt("Ingrese\n 1 - Para eliminar 1 producto del carrito\n 2- Para seguir comprando\n 3- Para ir a pagar");

      switch(opcion){
        case "1":
          let idProducto = parseInt(prompt("Ingrese el id del producto a eliminar"));
          eliminardelcarrito(idProducto);
          break;
        case "2":
          mostrarMenuCategorias();
          return;
          break;
        case "3":
          encendido = false;
          break;
      }
    }while(encendido === true);

    let precio = carrito.reduce((contador,producto) => contador + producto.precio,0);

    alert(`Debe abonar $${precio}`);

}



function mostrarMenuCategorias(){
  
    let encendido = true;

   do{
    let opcion = prompt("Ingrese\n 1 - Para ir a la seccion Camperas\n 2 - Para ir a la seccion Buzos\n 3- Para ir a la seccion Chalecos\n SALIR para ir al carrito");
        switch (opcion.toUpperCase()) {
            case "1":
              mostrarMenuProductos("Camperas");
              break;
            case "2":
              mostrarMenuProductos("Buzos");
              break;
            case "3":
              mostrarMenuProductos("Chalecos");
              break;
            case "SALIR":
              encendido = false;
              break;
            default:
              alert("Inserte una opción correcta");
        }
    } while(encendido === true);
    
    if(carrito.length >  0){
      mostrarCarrito();
    }else{
      alert("No ha agregado ningun producto al carrito de compras");
    }
}


mostrarMenuCategorias();


alert("Muchas gracias por pasarse por nuestra tienda para volver a comprar debe recargar la pagina");

