$(document).on("ready",function(){
    $('#FechayHora').datepicker({
    language: 'es',
     minDate: new Date(),
     timepicker:"true",
    });
});


$(document).on("submit","#promocion-2x4",function(){
      var parametros = {
      "FechayHora" : $("#FechayHora").val(),
      "decoracion" : $("#decoracion").val(),
      "mail" : $("#mail").val(),
      "checkbox" : $("#checkbox").val(),
	  "habitacion" : $("#habitacion").val()
      };


            $.ajax({
                url: "promocion-carpe-diem.php",
                type: "POST",
                data: parametros,
                success: function(data){
                    $("#promocion-2x4").html('');
                    $("#promocion-2x4").html("<fieldset><div id='success_page'><h2 style='color: #541d42 !important;'>¡Gracias por Utilizar Kama!</h2><p style='color: #541d42 !important;'>De 30 a 40 minutos nos estaremos contactando contigo. Espera la confirmación de tu reserva y enkámate.</p></div></fieldset>");

                },
                error: function (xmlHttpRequest, textStatus, errorThrown) {
                    MensajeError(textStatus);
                }
            });
            return false;
})
