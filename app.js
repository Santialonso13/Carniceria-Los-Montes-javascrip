const SI = 'si'; 
const NO = 'no'; 

let nombre;  
let producto; 
let precio;  
let cantidad; 
let total=0; 
let continuar; 
let detalle;
let ticket = 'Producto      PrecioUnitario      Cantidad        Importe  \n'; 

nombre = prompt('Bienvenido a la Tienda Virtual de Carniceria Los Montes... \n Ingrese su Nombre o Usuario: ');  
do{ 
    producto = prompt('Ingrese producto:  ');   
    precio = prompt('Ingrese el PrecioUnitario:  '); 
    cantidad = prompt('Ingrese la cantidad de productos que desea: ');  
    detalle = `${producto}  ${precio}  ${cantidad}  ${precio*cantidad} \n`;  
    ticket = ticket + detalle; 
    total = total + precio * cantidad; 


    continuar = prompt('Desea seguir comprando? si/no').toLowerCase(); 
} 
while(continuar === SI); 

ticket = ticket + `TOTAL: $${total}`; 
alert(ticket); 
alert('GRACIAS POR SU COMPRA');