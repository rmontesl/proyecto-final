<?php
if(isset($_POST['mail'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
$email_to = "raulmonteslizcano@gmail.com";
$email_subject = "¡Soy un Motel!";

$nombre = $_POST['nombre'];
$motel = $_POST['motel'];
$mail = $_POST['mail'];
$telefono = $_POST['telefono'];
$texto = $_POST['texto'];


$mensaje = "Este mensaje fue enviado por " . $nombre . ",
como encargado del motel " . $motel . " \r\n";
$mensaje .= "Su correo es: ".$mail . " \r\n";
$mensaje .= "Su teléfono es: " . $telefono . " \r\n";
$mensaje .= "Su mensaje es: " . $texto . " \r\n";
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
