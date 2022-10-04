
function saludar(usuario){
  let nombre = prompt("Bienvenido, ingrese su nombre")
  alert("Hola "+ nombre) 

let producto = prompt("Ingrese el producto que desea comprar: \nvela aromatica $ 250 \nperfumina $500 \nesencia de vainilla $380 \no salir para finalizar");
alert("El producto elegido es "+ producto);

let cantidad = parseInt(prompt("Indique las unidades que desea comprar"));

while (cantidad == ""){
  alert("Debes indicar las unidades que deseas llevar")

}if (cantidad != "salir"){
  alert(" Su pedido es la "+ producto +":"+ cantidad + " unidades")
}

}

saludar()

let velaAromatica = 250;
let perfumina = 500;
let esencia = 380

if (producto == "vela aromatica"){
  let p1 = velaAromatica * cantidad
  
} else if( producto == "perfumina"){
  let p2 = perfumina * cantidad
}else if(producto == "esencia de vainilla"){
  let p3 = esencia * cantidad
}


function sumar (p1, P2, P3){
  return p1 + p2 + p3
  
}

let compraTotal = sumar
alert("El TOTAL de su compra es: $"+ compraTotal)






























