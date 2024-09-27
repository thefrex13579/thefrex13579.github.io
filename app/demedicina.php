<?php
session_start();

if (!isset($_SESSION['usuarios'])){
    echo'
    <script>
    alert("Inicie sesión");
    window.location = "inicio_sesion.php";
    </script>
    ';
    session_destroy();
    die();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hospial</title>
    <link rel = "stylesheet" type = "text/css" href = "../CSS/demedicina.css">

    <script src="https://kit.fontawesome.com/41bcea2ae3.js" crossorigin="anonymous"></script>
   
</head>
<body id="body">

    <header>
        <div class = "icon_menu" id="bton_open">
            <i class="fa-solid fa-bars"></i>
        </div>

        <div class = "logo">
            <div class="imglogo">
            <img src="../IMG/logo.jpeg" alt="">
            </div>
        </div>
    </header>

    <div class = "navg" id="navg">

        <ul>
            <li class = "list active">
                <a href="../PHP/demedicina.php">
                    <span class = "icon">
                        <i class="fa-solid fa-stethoscope"></i>
                    </span>
                    <span class = "title">Medicina general Ingreso</span>
                </a>
            </li>

            <li class = "list">
                <a href="../PHP/deoftal.php">
                    <span class = "icon">
                        <i class="fa-solid fa-glasses"></i>
                    </span>
                    <span class = "title">Oftalmologia Ingreso</span>
                </a>
            </li>

            <li class = "list">
                <a href="../PHP/cerrar_sesion.php">
                    <span class = "icon">
                        <i class="fa-solid fa-door-open"></i>
                    </span>
                    <span class = "title">Cerrar sesión</span>
                </a>
            </li>
        </ul>
    </div>

    <main>
 
    </main>

<script src = "../JS/demedicina.js"></script>
</body>
</html>