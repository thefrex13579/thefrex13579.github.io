<?php
session_start();
session_destroy();

echo'
<script>
alert("Se ha cerrado la sesión");
window.location = "inicio_sesion.php";
</script>
';
?>