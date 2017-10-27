$(document).on("ready",function(){
    $('#FechayHora').datepicker({
    language: 'es',
     minDate: new Date(),
     timepicker:"true",
     position:'right top'
    });
});

$(document).on("change","#motel",function(){
    var habitacionesIbiza = "<option value='0' selected>Selecciona una opción...</option><option value='1'>Sencilla</option><option value='2'>Doble</option>"
    var habitacionesCarpe = "<option value='0' selected>Selecciona una opción...</option><option value='3'>Habitacion 1</option><option value='4'>Suite</option>"
    var idMotel = $("#motel option:selected").val();

    if(idMotel == "Ibiza")
        $("#Habitacion").html(habitacionesIbiza);
    else if(idMotel =="Carpe")
        $("#Habitacion").html(habitacionesCarpe);
});


$(document).on("click","#enviarForm",function(){
      var parametros = {
      "motel" : $("#motel").val(),
      "FechayHora" : $("#FechayHora").val(),
      "decoracion" : $("#decoracion").val(),
      "mail" : $("#mail").val(),
      "checkbox" : $("#checkbox").val()
      };
                

            $.ajax({
                url: "reserva.php",
                type: "POST",
                data: parametros,
                success: function(data){
                    $("#formulario").html('');
                    $("#formulario").html("<fieldset><div id='success_page'><h2 style='color: #541d42 !important;'>¡Gracias por Utilizar Kama!</h2><p style='color: #541d42 !important;'>De 30 a 40 minutos nos estaremos contactando contigo. Espera la confirmación de tu reserva y enkámate.</p></div></fieldset>");
                    
                },
                error: function (xmlHttpRequest, textStatus, errorThrown) {
                    MensajeError(textStatus);
                }
            });
})