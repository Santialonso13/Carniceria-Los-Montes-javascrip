const productos = [new producto('Leche La Serenisima', 'Leche entera La Serenisima', 150, 'Almacen'),
                   new producto('Mermelada BC', 'Mermelada dietetica sabor frutilla', 300, 'Almacen'),  
                   new producto('Pan', 'Tira de pan fresca', 50, 'Almacen'), 
                   new producto('Manteca Sancor','Manteca marca Sancor', 100, 'Almacen'), 
                   new producto('Papa', 'Bolsa de 2kg de papa', 150, 'Verduleria'), 
                   new producto('Carnes', 'Carnes Vacuna por kg', 800, 'Carniceria'),
]; 
const iniciob = [   new inicio('Carniceria'),
                    new inicio('Verduleria'),
                    new inicio('Almacen'),

];
const ticket = [];   

function bienvenidos(){ 
    let menub = `Tienda Virtual Carniceria Los Montes: \n 
        Ingrese la Categoria que desea visitar: \n`;   
    iniciob.forEach((inicio,index) => {  
        menub = menub +`${index+1} - ${inicio.categoria} \n`

    }
    ); 
 
   let opcion = prompt(menub);  
    while (opcion < 1 || opcion > menub.length){  
   opcion = prompt('Categoria Invalida, Ingrese una Categoria especifica: ')

}
}

function almacen(){  
    let pedidoalmacen = `Tienda Virtual Carniceria Los Montes \n `  ;  
    productos.forEach((producto,index) => { 
        pedidoalmacen = pedidoalmacen +  
        `${index+1} - ${producto.nombre} : ${producto.descripcion} \n
                precio: ${producto.precio} \n ` ;
        
    });

let opcion = prompt(pedidoalmacen);  
while (opcion < 1 || opcion > productos.length){  
   opcion = prompt(ticket + 'Producto Invalido, Ingrese un nuevo producto: ')

}
ticket.push(productos[opcion - 1]); 
}  

function cerrarticket(){ 
   let total = ticket.reduce((total,producto) => {return total + producto.precio}, 0);  
   alert (`Su ticket es de: $${total}`);

}

function menuprincipal(){  
    let opcion;
    do{ 
        almacen(); 
        opcion = prompt('Desea seguir comprando? SI/NO');
    }  
    while(opcion !== 'NO');
} 
bienvenidos();
menuprincipal(); 
cerrarticket();  
