<?php
$motel = $_POST['motel'];
$fecha = $_POST['FechayHora'];
$decoracion = $_POST['decoracion'];
$mail = $_POST['mail'];
$terminos = $_POST['checkbox'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $mail . ",
para una reserva en el motel " . $motel . " \r\n";
$mensaje .= "Fecha: " . $fecha . " \r\n";
$mensaje .= "Decoración: " . $decoracion . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'raulmonteslizcano@gmail.com';
$asunto = 'Nueva reserva Kama';

mail($para, $asunto, utf8_decode($mensaje), $header);

echo "<fieldset>";
	echo "<div id='success_page'>";
	echo "<h2>¡Gracias por Utilizar Kama!</h2>";
	echo "<p>De 30 a 40 minutos nos estaremos contactando contigo. Espera la confirmación de tu reserva y enkámate.</p>";
	echo "</div>";
	echo "</fieldset>";