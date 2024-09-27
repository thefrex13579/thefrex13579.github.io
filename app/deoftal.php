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
    <link rel = "stylesheet" type = "text/css" href = "../CSS/deoftal.css">

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
            <li class = "list">
                <a href="../PHP/demedicina.php">
                    <span class = "icon">
                        <i class="fa-solid fa-stethoscope"></i>
                    </span>
                    <span class = "title">Medicina general Ingreso</span>
                </a>
            </li>

            <li class = "list active">
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
        
        <div class = "contenedor_oftal">

            <h1 class = "header_oftal">Menu Principal</h1>

            <div class = "contenedor_box">

                <div class = "box">
                    <i class="fa-solid fa-address-card"></i>
                    <h3>Registo de paciente</h3>
                    <a href="../PHP/registro_paciente.php" class="bton">Ingresar</a>
                </div>

                <div class = "box">
                    <i class="fa-solid fa-rectangle-list"></i>
                    <h3>Historial de paciente</h3>
                    <a href="#" class="bton">Ingresar</a>
                </div>

                <div class = "box">
                    <i class="fa-solid fa-calendar-days"></i>
                    <h3>Agendar paciente</h3>
                    <a href="#" class="bton">Ingresar</a>
                </div>

                <div class = "box">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <h3>Garantia </h3>
                    <a href="#" class="bton">Ingresar</a>
                </div>

            </div>

        </div>

    </main>

<script src = "../JS/deoftal.js"></script>
</body>
</html>