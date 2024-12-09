const showButton = document.querySelector("#show_form");
showButton.addEventListener("click", function () {
  const alertDialog = document.querySelector("#form_cp");
  alertDialog.showModal();
});

let cp_number = document.getElementById('show_form');
let new_cp = document.getElementById('codigo_postal');
let update = document.getElementById('actualizar');

function actualizar_cp() {
    cp_number.textContent = new_cp.value;
}

update.addEventListener('click', actualizar_cp);

 