<?php
if(isset($_POST['mail'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
$email_to = "raulmonteslizcano@gmail.com";
$email_subject = "Nueva reserva Kama";

$motel = $_POST['motel'];
$fecha = $_POST['FechayHora'];
$decoracion = $_POST['decoracion'];
$mail = $_POST['mail'];
$terminos = $_POST['checkbox'];
$habitacion = $_POST['habitacion'];


$mensaje = "Este mensaje fue enviado por " . $mail . ",
para una reserva en el motel " . $motel . " \r\n";
$mensaje .= "Habitación: ".$habitacion . " \r\n";
$mensaje .= "Fecha: " . $fecha . " \r\n";
$mensaje .= "Decoración: " . $decoracion . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());


// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: '.$email_to."\r\n". 'Reply-To: '.$email_to."\r\n" . 'X-Mailer: PHP/' . phpversion();
if(mail($email_to, $email_subject, $mensaje, $headers)){;

echo "¡El formulario se ha enviado con éxito!";}
else{
	echo "¡Error al evniar correo!";
}
}
	?>
