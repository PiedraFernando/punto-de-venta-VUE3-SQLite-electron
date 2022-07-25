class Producto{
  constructor(id, nombre, descripcion, precioCompra, precioVenta, codigo, codigoBarras, cantidad, cantidadAviso){
    this.id = id,
    this.nombre = nombre,
    this.descripcion = descripcion,
    this.precioCompra = precioCompra,
    this.precioVenta = precioVenta,
    this.codigo = codigo,
    this.codigoBarras = codigoBarras,
    this.cantidad = cantidad
    this.cantidadAviso = cantidadAviso
  }
  limpiarProducto(){
    this.id = ''
    this.nombre = ''
    this.descripcion = ''
    this.precioCompra = ''
    this.precioVenta = ''
    this.codigo = ''
    this.codigoBarras = ''
    this.cantidad = ''
    this.cantidadAviso = ''
  }
  copiarProducto(producto){
    this.id = producto.id
    this.nombre = producto.nombre
    this.descripcion = producto.descripcion
    this.precioCompra = producto.precioCompra
    this.precioVenta = producto.precioVenta
    this.codigo = producto.codigo
    this.codigoBarras = producto.codigoBarras
    this.cantidad = producto.cantidad
    this.cantidadAviso = producto.cantidadAviso
  }
}

export default Producto