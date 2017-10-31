$(document).on("ready",function(){
    $('#FechayHora').datepicker({
    language: 'es',
     minDate: new Date(),
     timepicker:"true",
    });
});
    "<option value='0' selected>Selecciona una opción...</option>"
        
$(document).on("change","#motel",function(){
    var maracana = "<option value='0' selected>Selecciona una opción...</option><option value='Sencilla'>Sencilla</option>";
    var faraon = "<option value='0' selected>Selecciona una opción...</option><option value='Sencilla'>Sencilla</option><option value='Junior'>Junior</option><option value='Presidencial'>Presidencial</option><option value='Multiple'>Multiple</option>";
    var faro = "<option value='0' selected>Selecciona una opción...</option><option value='Sencilla'>Sencilla</option><option value='Cabaña'>Cabaña</option><option value='Especial'>Especial</option><option value='Multiple'>Multiple</option>";
    var cesar = "<option value='0' selected>Selecciona una opción...</option><option value='Sencilla'>Sencilla</option><option value='Suite'>Suite</option><option value='Suite de Lujo'>Suite de Lujo</option><option value='Presidencial'>Presidencial</option>"
    var chiquinquira = "<option value='0' selected>Selecciona una opción...</option><option value='Habitación Ejecutiva'>Habitación Ejecutiva</option><option value='Cabaña Ejecutiva'>Cabaña Ejecutiva</option><option value='Cabaña Suite'>Cabaña Suite</option><option value='Suite Presidencial'>Suite Presidencial</option>"
    var BarrioAbajo = "<option value='0' selected>Selecciona una opción...</option><option value='Cabaña Ejecutiva'>Cabaña Ejecutiva</option><option value='Cabaña Suite'>Cabaña Suite</option><option value='Suite Presidencial'>Suite Presidencial</option>"
    var Ibiza ="<option value='0' selected>Selecciona una opción...</option><option value='Sencilla'>Sencilla</option><option value='junior'>junior</option><option value='deluxe'>deluxe</option> <option value=' aire de mar'> aire de mar</option>"
    var idMotel = $("#motel option:selected").text();

    if(idMotel == "Ibiza")
        $("#habitacion").html(Ibiza);
    else if(idMotel =="Carpe Diem Chiquinquira")
        $("#habitacion").html(chiquinquira);
    else if(idMotel =="Carpe Diem Barrio Abajo")
        $("#habitacion").html(BarrioAbajo);
    else if(idMotel =="Cesar's Palace")
        $("#habitacion").html(cesar);
    else if(idMotel =="El Faro")
        $("#habitacion").html(faro);
    else if(idMotel =="El Faraón")
        $("#habitacion").html(faraon);
    else if(idMotel =="Maracana")
        $("#habitacion").html(maracana);
    else
        $("#habitacion").html("<option value='0' selected>Selecciona una opción...</option>");
});


$(document).on("click","#enviarForm",function(){
      var parametros = {
      "motel" : $("#motel").val(),
      "FechayHora" : $("#FechayHora").val(),
      "decoracion" : $("#decoracion").val(),
      "mail" : $("#mail").val(),
      "checkbox" : $("#checkbox").val(),
	  "habitacion" : $("#habitacion").val()
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