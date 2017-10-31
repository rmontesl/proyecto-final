<?php
if(isset($_POST['mail'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
$email_to = "cristian.ramirez019@gmail.com";
$email_subject = "Nueva reserva Kama";
$email_from ="cramirez@axsistec.com";

$motel = $_POST['motel'];
$fecha = $_POST['FechayHora'];
$decoracion = $_POST['decoracion'];
$mail = $_POST['mail'];
$terminos = $_POST['checkbox'];


$mensaje = "Este mensaje fue enviado por " . $mail . ",
para una reserva en el motel " . $motel . " \r\n";
$mensaje .= "Fecha: " . $fecha . " \r\n";
$mensaje .= "Decoración: " . $decoracion . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());


// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: '.$email_from."\r\n". 'Reply-To: '.$email_from."\r\n" . 'X-Mailer: PHP/' . phpversion();
if(mail($email_to, $email_subject, $mensaje, $headers)){;

echo "¡El formulario se ha enviado con éxito!";}
else{
	echo "¡Error al evniar correo!";
}
}
	?>