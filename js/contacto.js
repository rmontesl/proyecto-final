$(document).on("submit","#contacto",function(){
      var parametros = {
      "nombre" : $("#nombre").val(),
      "mail" : $("#mail").val(),
      "texto" : $("#texto").val(),
      };


            $.ajax({
                url: "contacto.php",
                type: "POST",
                data: parametros,
                success: function(data){
                    $("#contacto").html('');
                    $("#contacto").html("<fieldset><div id='success_page'><h2 style='color: #541d42 !important;'>¡Tú mensaje ha sido!</h2><p style='color: #541d42 !important;'>Estaremos respondiendo en el menor tiempo posible,   gracias   por   contactarte   con   Kama</p></div></fieldset>");

                },
                error: function (xmlHttpRequest, textStatus, errorThrown) {
                    MensajeError(textStatus);
                }
            });
            return false;
})


    //y asi para los demas
