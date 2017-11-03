<?php
if(isset($_POST['mail'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
$email_to = "raulmonteslizcano@gmail.com";
$email_subject = "¡Soy un motel!";

$nombre = $_POST['nombre'];
$motel = $_POST['motel'];
$email = $_POST['email'];
$mail = $_POST['mail'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];


$mensaje = "Este mensaje fue enviado por " . $nombre . ",
quien es el responsable del motel " . $motel . " \r\n";
$mensaje .= "Su email es: ".$email . " \r\n";
$mensaje .= "Su Teléfono es: " . $telefono . " \r\n";
$mensaje .= "Su mensaje fue: " . $mensaje . " \r\n";
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
