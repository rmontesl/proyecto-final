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
