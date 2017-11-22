$(document).on("submit","#contacto-moteles",function(){
      var parametros = {
      "nombre" : $("#nombre").val(),
      "motel" : $("#motel").val(),
      "mail" : $("#mail").val(),
      "telefono" : $("#telefono").val(),
      "texto" : $("#texto").val(),
	  "habitacion" : $("#habitacion").val()
      };


            $.ajax({
                url: "contacto-moteles.php",
                type: "POST",
                data: parametros,
                success: function(data){
                    $("#contacto-moteles").html('');
                    $("#contacto-moteles").html("<fieldset><div id='success_page'><h2 style='color: #541d42 !important;'>¡Gracias por Utilizar Kama!</h2><p style='color: #541d42 !important;'>De 30 a 40 minutos nos estaremos contactando contigo. Espera la confirmación de tu reserva y enkámate.</p></div></fieldset>");

                },
                error: function (xmlHttpRequest, textStatus, errorThrown) {
                    MensajeError(textStatus);
                }
            });
            return false;
})


    //y asi para los demas
