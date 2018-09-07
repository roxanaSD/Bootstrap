var datos = '[{ "Nombre": "Diego", "Apellido": "Cueto", "Edad": "23", "Sexo": "H",  "Email": "diegocueto-9@hotmail.com",  "Telefono": "966232309",  "Direccion": "16 de Septiembre",  "Colonia": "Nicatan",  "Municipio": "Tonala",  "Estado": "Chiapas",  "Pais": "Mexico" },' +
'{"Nombre": "Lucio", "Apellido": "Escobar", "Edad": "22", "Sexo": "H",  "Email": "lucio48@outlook.com",  "Telefono": "9681197536",  "Direccion": "Revolucion",  "Colonia": "Union Agrarista",  "Municipio": "Jiquipilas",  "Estado": "Chiapas",  "Pais": "Mexico" },' +
  '{"Nombre": "Tomas", "Apellido": "Lopez", "Edad": "22", "Sexo": "H",  "Email": "thomas_mcthom@Outlook.com",  "Telefono": "9681009079",  "Direccion": "Segunda Avenida Sur",  "Colonia": "Santa Cruz",  "Municipio": "Cintalapa",  "Estado": "Chiapas",  "Pais": "Mexico" },' +
  '{"Nombre": "Fidel", "Apellido": "Rodriguez", "Edad": "22", "Sexo": "H",  "Email": "fidelin24_@hotmail.com",  "Telefono": "9684547383",  "Direccion": "Avenida calle central",  "Colonia": "Las Merceditas",  "Municipio": "Cintalapa",  "Estado": "Chiapas",  "Pais": "Mexico" },' +
  '{"Nombre": "Lorena", "Apellido": "Zarate", "Edad": "22", "Sexo": "M",  "Email": "anerol_brumars@hotmail.com",  "Telefono": "9684556783",  "Direccion": "8a oriente entre 4a y 5a Norte",  "Colonia": "San Francisco",  "Municipio": "Cintalapa",  "Estado": "Chiapas",  "Pais": "Mexico" },' +
  '{"Nombre": "Roxana", "Apellido": "Salazar", "Edad": "22", "Sexo": "M",  "Email": "monce.26@hotmail.com",  "Telefono": "9689542380",  "Direccion": "Cuadra y media de la entrada de tehuacan",  "Colonia": "Tehuacan",  "Municipio": "Cintalapa",  "Estado": "Chiapas",  "Pais": "Mexico" },' +
  '{"Nombre": "Guadalupe", "Apellido": "Aguilar", "Edad": "22", "Sexo": "M",  "Email": "guadalupeaguilarmedina@outlook.com",  "Telefono": "9684345300",  "Direccion": "",  "Colonia": "",  "Municipio": "San Isidro",  "Estado": "Chiapas",  "Pais": "Mexico" }]';


$(".wrapper").on("click", function(){
	var response = $.parseJSON(datos);
  var $table = $('<table></table>');
	$table.append("<tr><th>Nombre</th><th>Apellido</th><th>Edad</th><th>Sexo</th><th>Email</th><th>Telefono</th><th>Direccion</th><th>Colonia</th><th>Municipio</th><th>Estado</th><th>Pais</th></tr>")
  $.each(response, function(i, item) {
      var tr = $('<tr>').append(
        $('<td>').text(item.Nombre),
          $('<td>').text(item.Apellido),
          $('<td>').text(item.Edad),
          $('<td>').text(item.Sexo),
          $('<td>').text(item.Email),
          $('<td>').text(item.Telefono),
          $('<td>').text(item.Direccion),
          $('<td>').text(item.Colonia),
          $('<td>').text(item.Municipio),
          $('<td>').text(item.Estado),
          $('<td>').text(item.Pais)
      );
      $table.append(tr);
    });
    $(".wrapper").append($table)
    $(".wrapper button").hide()
})

// jQuery
$(document).ready(function(){

$('#alternar-respuesta-ej5').toggle(

 // Primer click
 function(e){
     $('#respuesta-ej5').slideDown();
     $(this).text('Ocultar respuesta');
     e.preventDefault();
 }, // Separamos las dos funciones con una coma

 // Segundo click
 function(e){
     $('#respuesta-ej5').slideUp();
     $(this).text('Ver respuesta');
     e.preventDefault();
 }

);

});
