class producto {
    constructor() {
      this.nombre = '';
      this.precio = 0;
      this.cantidad = 0;
      this.marca = '';
      this.talle = 0;
    }
    
    subTotal() {
      return this.precio * this.cantidad;
    }
  }