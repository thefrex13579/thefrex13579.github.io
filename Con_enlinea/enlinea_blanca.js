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

// Insertar el select y el input dinámicamente usando innerHTML
const select_document = document.getElementById('select_document');
select_document.innerHTML = `
    <label class="select_doc" for="docType">Tipo de Documento:</label>
    <select id="docType" name="docType">
        <option value="cedula">Rut</option>
        <option value="pasaporte">Pasaporte</option>
    </select>

    <div class="input-container" id="docInputContainer">
    <label for="document"></label>
    <input type="text" id="document" name="name" class="input" maxlength="15" required/>
    </div>

`;

// Inicializar prefijo para "Cédula"
let prefix = 'R-';

// Función para actualizar el prefijo según el tipo de documento seleccionado
document.getElementById('docType').addEventListener('change', function () {
    const docType = this.value;
    
    if (docType === 'cedula') {
        prefix = 'R-';
    } else if (docType === 'pasaporte') {
        prefix = 'P-';
    }

    // Resetear el input y mostrar el nuevo prefijo
    document.getElementById('document').value = prefix;
});

// Añadir el evento de formato de número
document.getElementById('document').addEventListener('input', function (e) {
    let value = e.target.value;
    
    // Remover el prefijo existente para procesar solo los números
    value = value.replace(prefix, '');
    
    // Eliminar cualquier carácter que no sea número
    value = value.replace(/[^0-9]/g, '');
    
    // Agregar guiones cada 3 dígitos
    if (value.length > 3 && value.length <= 6) {
        value = value.slice(0, 3) + '.' + value.slice(3);
    } else if (value.length > 6) {
        value = value.slice(0, 3) + '.' + value.slice(3, 6) + '.' + value.slice(6, 9);
    }
    
    // Mostrar el valor con el prefijo actualizado
    e.target.value = prefix + value;
});

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

document.getElementById('formulario').addEventListener('submit', function(event) {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !apellido || !correo || !telefono || !mensaje) {
        event.preventDefault();
        alert('Por favor, rellena todos los campos.');
    } else {
        alert('Formulario enviado correctamente.');
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

