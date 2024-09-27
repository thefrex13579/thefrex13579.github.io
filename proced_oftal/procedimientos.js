document.getElementById("bton_open").addEventListener("click", open_menu);
var bton_open = document.getElementById("bton_open");
var body = document.getElementById("body");
var navg = document.getElementById("navg");

function open_menu(){
    body.classList.toggle("body_move");
    navg.classList.toggle("navg_side_move");
}

const input = document.querySelectorAll(".input");
function focusfunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function bluerfunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}

input.forEach((input) => {
    input.addEventListener("focus", focusfunc);
    input.addEventListener("blur", bluerfunc);
});

function updateDocInput() {
    const docType = document.getElementById('docType').value;
    const prefix = docType === 'cedula' ? 'R-' : 'P-';

    document.getElementById('docInputContainer').innerHTML = `
        <label for="document"></label>
        <input type="text" id="document" name="name" class="input" value="${prefix}" maxlength="11" required>
    `;
    
    const docInput = document.getElementById('document');

    // Evitar que el usuario borre el prefijo
    docInput.addEventListener('input', function() {
        if (!this.value.startsWith(prefix)) {
            this.value = prefix;
        }
    });

}
updateDocInput();

document.addEventListener('DOMContentLoaded', function () {
    const numerocelInput = document.getElementById('numerocelInput');

    // Permitir solo números en el input
    numerocelInput.addEventListener('input', function (event) {
        const valor = event.target.value;
        // Remover cualquier caracter que no sea número
        event.target.value = valor.replace(/[^0-9]/g, '');
    });
    
});

document.getElementById('fecha-nacimiento').addEventListener('input', function (e) {
    let value = e.target.value;
    
    // Remove any non-digit or non-hyphen characters
    value = value.replace(/[^0-9\-]/g, '');
    
    // Automatically add hyphens
    if (value.length > 2 && value[2] !== '/') {
        value = value.slice(0, 2) + '/' + value.slice(2);
    }
    if (value.length > 5 && value[5] !== '/') {
        value = value.slice(0, 5) + '/' + value.slice(5);
    }
    
    // Limit the length to 10 characters
    value = value.slice(0, 10);

    e.target.value = value;
});

document.getElementById('reservaForm').addEventListener('submit', function(event) {
    // Verificar si al menos un radio de género está seleccionado
    var generoSeleccionado = document.querySelector('input[name="genero"]:checked');
    
    if (!generoSeleccionado) {
        event.preventDefault(); // Evita el envío del formulario
        alert('Por favor, selecciona un género.');
    }
});

function submitForm() {
    const formData = new FormData(document.getElementById('dynamicForm'));

    fetch('submit.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('response').innerText = data;
        document.getElementById('dynamicForm').reset();
        updateDocInput(); // Resetea el campo del documento con el prefijo
    })
    .catch(error => console.error('Error:', error));
}

// Inicializar el prefijo en el campo del documento al cargar la página
window.onload = updateDocInput;