let buttons = document.getElementsByClassName('buttons_color'); 
let cartButton = document.getElementById('carrito'); 
let counterInIcon = document.getElementById('cuenta_carrito');

    
function activateBotonCarrito() { 
    cartButton.disabled = false; 
};

for (let i = 0; i < buttons.length; i++) { 
    buttons[i].addEventListener('click', activateBotonCarrito); 
}

let counter = 0
 function contador() {
    counter += 1;
    counterInIcon.textContent = counter; 

    if (counter >= 1) {
        cartButton.disabled = true;
    } 

 }

 cartButton.addEventListener('click', contador) 