let carrito = [];

function cargarProducto() {
    alert("Bienvenido al Shop de ReservaTuCancha \n Productos Disponibles \n Futbol: Pelota - Botines - Camiseta \n Padel: Paleta - Pelotas - Grip \n Ajedrez: Tablero y Piezas")
  const nuevoProducto = new producto();
  nuevoProducto.nombre = prompt("Ingrese Producto");
  nuevoProducto.precio = Number(prompt("Ingrese Valor en Pesos"));
  nuevoProducto.cantidad = prompt("Cuantos desea?");
  nuevoProducto.marca = prompt("La marca es: ");
  nuevoProducto.talle = Number(prompt("Que talle?"));

  return nuevoProducto;
}

const cargarLosProductos = () => { 
  let seguir;
  let nuevoProducto;
  do {
    nuevoProducto = cargarProducto();
    carrito.push(nuevoProducto);
    seguir = prompt("Desea continuar ingresando productos? si / no");
  } while (seguir == "si");
}

function resumenCarrito() {
    let ticket = '';
    let total = 0;
    carrito.forEach((producto) => {
      ticket = ticket +`Producto elegido: ${producto.nombre} \n Precio: ${producto.precio} \n Cantidad ${producto.cantidad} \n Marca: ${producto.marca} \n Talle: ${producto.talle} \n`;
    })
  
    total = carrito.reduce((total, producto) => {
      return total + producto.subTotal();
    }, 0);
  
    alert(ticket + `Total: ${total}`);
  }



cargarLosProductos();
resumenCarrito();