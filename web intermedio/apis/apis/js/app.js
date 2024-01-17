$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.slider').slider({
    	indicators: false,
    	interval: 2000,
    	duration: 2000
    });
    $('.tabs').tabs({
    	duration: 3000
    });
     $('.collapsible').collapsible();
     $('input.autocomplete').autocomplete({
      data: {
        "Diseño Web": null,
        "Redes de Datos": null,
      }
    });
 }); 