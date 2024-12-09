//1.Crear función para activar el boton de "Add to cart" si un boton de color esta "clickeado"
//2.Crear funcion en que al clickear en "add to cart" devuelva "1" (contador)
//3. Hacer que el "1" aparezca sobre el ícono de la nav bar

//1
let buttons = document.getElementsByClassName('buttons_color'); 
let cartButton = document.getElementById('carrito'); 
let counterInIcon = document.getElementById('cuenta_carrito');

    
function activateBotonCarrito() { 
    cartButton.disabled = false; 
};

for (let i = 0; i < buttons.length; i++) { 
    buttons[i].addEventListener('click', activateBotonCarrito); 
}


// 2  y 3
 let counter = 0
 function contador() {
    counter += 1;
    counterInIcon.textContent = counter; 

    if (counter >= 1) {
        cartButton.disabled = true;
    }

 }

 cartButton.addEventListener('click', contador) 