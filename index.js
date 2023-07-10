alert("Bienvenido a nuestra tienda");
alert("A continuacion se le mostrara nuestros productos en stock");

let numeroIngresado;
let precio=0;
let agregar;
let cantidadProductos=0;

function mostrarMenuProductos(){

    while(numeroIngresado!="SALIR"){
        
        numeroIngresado=prompt("Que producto desea comprar, ingrese una opcion: \n -1: Campera Puffer $34000 \n -2: Buzo Palace $15250 \n -3: Buzo Currentrly $13542 \n -4: Chaleco Puffer $23433\n Ingrese SALIR para ir al carrito de compras");
        
        if(numeroIngresado!="SALIR"){
            agregar=prompt("Desea agregarlo a su carrito de comprar? \n Ingrese si para confirmar\n Ingrese no para volver a visualizar los productos en stock");
            cantidadProductos++;
            if(agregar=="si"){
                switch(numeroIngresado){
                    case "1":
                        precio+=34000;
                        alert("Producto agregado al carrito");
                        break;
                    case "2":
                        precio+=15250;
                        alert("Producto agregado al carrito");
                        break;
                    case "3":
                        precio+=13542;
                        alert("Producto agregado al carrito");
                        break;
                    case "4":
                        precio+=23433;
                        alert("Producto agregado al carrito");
                        break;
                    default: alert("El valor ingresado es incorrecto");
                }
            }
       
        }
       
    }

}

function calcularCuotas(precio,cuotas){
    alert("El precio a pagar es "+(precio/cuotas)+" en "+cuotas+" cuotas");
}

function mostrarCarrito(precio){

    let pago=prompt("El total del monto a pagar es: "+precio+"\nIndique forma de pago:\n -1: Pago total en efectivo\n -2: 3 cuotas\n -3: 6 cuotas \n -4: 12 cuotas");

    
    if(pago=="2"){
        calcularCuotas(precio,3);
    }else if(pago=="3"){
        calcularCuotas(precio,6);
    }else if(pago="4"){
        calcularCuotas(precio,12);
    }else{
        alert("El precio a pagar es $"+precio);
    }

}

mostrarMenuProductos();
if(cantidadProductos>0){
    mostrarCarrito(precio);
}else{
    alert("No ha agregado ningun producto al carrito de compras");
}

alert("Muchas gracias por pasarse por nuestra tienda para volver a comprar debe recargar la pagina");

