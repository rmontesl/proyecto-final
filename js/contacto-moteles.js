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
                    $("#contacto-moteles").html("<fieldset><div id='success_page'><h2 style='color: #541d42 !important;'>¡Tú mensaje ha sido!</h2><p style='color: #541d42 !important;'>Estaremos respondiendo en el menor tiempo posible,   gracias   por   contactarte   con   Kama</p></div></fieldset>");

                },
                error: function (xmlHttpRequest, textStatus, errorThrown) {
                    MensajeError(textStatus);
                }
            });
            return false;
})


    //y asi para los demas
