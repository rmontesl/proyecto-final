<?php
$motel = $_POST['motel'];
$fecha = $_POST['date-start'];
$hora = $_POST['time-start'];
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
$mensaje .= "Hora: " . $hora . " \r\n";
$mensaje .= "Decoración: " . $decoracion . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'kamabq@gmail.com';
$asunto = 'Nueva reserva Kama';

mail($para, $asunto, utf8_decode($mensaje), $header);

echo 'Mensaje enviado correctamente <a href="http://kama.com.co">Volver al inicio</a>';
?>