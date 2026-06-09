/*Carrito*/
const boton = document.getElementById("abrirCarrito");
const panel = document.getElementById("panelCarrito");
boton.addEventListener("click", function(e){
    e.preventDefault();
    if(panel.hidden){
        panel.hidden = false;
    }else{
        panel.hidden = true;
    }
});

let carrito=[];
function agregarCarrito(nombre, precio){
    carrito.push({
        nombre:nombre,
        precio:precio
    });
    mostrarCarrito();
}

function mostrarCarrito(){
    let divCarrito = document.getElementById("carrito");
    let total=0;
    divCarrito.innerHTML="";
    carrito.forEach((producto, indice) =>{
        total+= producto.precio;
        divCarrito.innerHTML += `
        <div>
            ${producto.nombre}-Bs.${producto.precio}
            <button onclick="eliminarProducto(${indice})">
                Eliminar
            </button>
        </div>`
        ;
    });
    document.getElementById("total").innerText=total;
}

function eliminarProducto(indice){
    carrito=carrito.filter((producto, i)=> i!==indice);
    mostrarCarrito();

}


const botoncompra = document.getElementById("formcomprar");
const panelcompra = document.getElementById("formcompra");
botoncompra.addEventListener("click", function(e){
    e.preventDefault();
    if(panelcompra.hidden){
        panelcompra.hidden = false;
    }else{
        panelcompra.hidden = true;
    }
});

    const formulario = document.getElementById("formucomprar");
        formulario.addEventListener("submit", function(e) {
        e.preventDefault();
        let tarjeta = document.getElementById("tarjeta").value;
    if (!(/^[0-9]+$/.test(tarjeta))) {
        Swal.fire({
            title: "Error",
            text: "La tarjeta de credito solo debe contener numeros",
            icon: "error"
        });
        return;
    }
    Swal.fire({
        title: "¡Correcto!",
        text: "Pedido realizado correctamente",
        icon: "success"
    }).then(() => {
        formulario.submit();
    });
});

/*Filtrar*/
function filtrar(categoria){
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if(categoria=='mujer'){
            if(card.classList.contains('mujer')){
                card.style.display="block";
            }
            else{
                card.style.display="none";
            }
        }
        else if(categoria=='hombre'){
            if(card.classList.contains('hombre')){
                card.style.display="block";
            }
            else{
                card.style.display="none";
            }
        }
        else if(categoria=='niño'){
            if(card.classList.contains('niño')){
                card.style.display="block";
            }
            else{
                card.style.display="none";
            }
        }
        else if(categoria=='acces'){
            if(card.classList.contains('acces')){
                card.style.display="block";
            }
            else{
                card.style.display="none";
            }
        }
        else if(categoria=='popular'){
            if(card.classList.contains('popular')){
                card.style.display="block";
            }
            else{
                card.style.display="none";
            }
        }
    });
}
window.onload = function(){
    filtrar('popular');
}

