<?php
session_start();
include 'conexion.php';

$user = $_POST['user'];
$contrasena = $_POST['contrasena'];

$validar =  mysqli_query($conexion, "SELECT * FROM usuarios WHERE user = '$user'
and contrasena = '$contrasena'");

if (mysqli_num_rows($validar) > 0){

    $_SESSION['usuarios'] = $user;

    echo'
    <script>
    alert("Se ha iniciado sesión correctamente");
    window.location = "deoftal.php";
    </script>
    ';

}else{
    echo'
    <script>
    alert("usuario no existe, verifique datos");
    window.location = "inicio_sesion.php";
    </script>
    ';
    exit();
}
?>

