<?php
$servername = "localhost";  // Cambia esto si tu servidor no está en localhost
$username = "root";         // Cambia por tu usuario de MySQL
$password = "";             // Cambia por tu contraseña de MySQL
$dbname = "formulario_db";  // Nombre de la base de datos

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $tipo_documento = $_POST['docType'];
    $numero_documento = $_POST['document'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];

    $sql = "INSERT INTO usuarios (tipo_documento, numero_documento, nombre, apellido, email, telefono)
            VALUES ('$tipo_documento', '$numero_documento', '$nombre', '$apellido', '$email', '$telefono')";

    if ($conn->query($sql) === TRUE) {
        echo "Registro guardado exitosamente.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>