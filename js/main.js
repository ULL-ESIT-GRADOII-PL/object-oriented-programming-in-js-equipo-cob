/** Variables globales */
// var arrayResults = []
"use strict"; /** Use ECMAScript 5 strict mode in browsers that support it */


/** cambiando opacidad de las fotos textos  */

function lastChildOpaciti(nodoLlamador, opacity, opacity2) {
    nodoLlamador.childNodes[3].style.opacity = opacity;
    nodoLlamador.childNodes[1].style.opacity = opacity2;
}

/* función que comprueba si un elmento es visible con la propiedad display */
function isVisible(elemento) {
    if($(elemento).is(":visible"))
        return true;
    else
        return false;
}

/**  función para mostrar y ocultar tags además de cambiar el subrayado*/
function ocultarMostrarTags(focus) {
/** si el focus viene de als imagenes le asignamos el valor correspondiente*/
        if((focus == "img1") || (focus == "img2")) {
            if(focus == "img1") {
                focus = document.getElementById("e2");
                
            } else {
                focus = document.getElementById("e3");
            }
        }
        $(focus).addClass("subrayado");
        $(focus).parent().siblings("li").children("a").removeClass("subrayado"); /** acceso mediante familia */
        if(focus.id == "e1") {
            $(".contendeorImagenesEnlace").show(500);
            $(".conversorDeTemperatura").hide(500);
            $(".conversorDeTemperaturaTest").hide(500);
        }
        if(focus.id == "e2") {
            $(".contendeorImagenesEnlace").hide(500);
            $(".conversorDeTemperatura").show(500);
            $(".conversorDeTemperaturaTest").hide(500);
        }
        if(focus.id == "e3") {
            $(".contendeorImagenesEnlace").hide(500);
            $(".conversorDeTemperatura").hide(500);
            $(".conversorDeTemperaturaTest").show(500);
        }
}

/** función principal de js */

function main() {
    var opaco = false;
    var x = document.getElementsByClassName("contendeorImagen");
    for(var i = 0; i < x.length; i++) {
        x[i].addEventListener("mouseenter", function() {
            lastChildOpaciti(this, '1', '-1');
        } , false);
        x[i].addEventListener("mouseleave", function() {
            lastChildOpaciti(this, '-1', '1');
        } , false);
    }
     $(document).ready(function() {
	    $(".menuHEader li a").on( "click", function() {
	        ocultarMostrarTags(this);
	    });
	    $(".imagen1").on( "click", function() {
	        ocultarMostrarTags("img1");
	    });
	    $(".imagen2").on( "click", function() {
	        ocultarMostrarTags("img2");
	    });
	    
     });
     addEventInput('InputTemperatura')
}


function addEventInput(input) {
    var input =document.getElementsByClassName(input);
    input[0].addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) {   /** 13 es retorno de carro */
            if (input[0].validity.patternMismatch == false) { /** comprobando si coicide con el atributo pattern */
                var arrayResults = falsoCalculate("5c");
                changeTemperatureConverterInterface(arrayResults);
            } 
        }
    });

    input[0].addEventListener('keyup', function (e) {
        var key = e.which || e.keyCode;
        if (input[0].validity.patternMismatch == false) { /** comprobando si coicide con el atributo pattern */
            var value = this.value;
            value = value.toString();
            var tTemp = value.charAt(value.length - 1)
            console.log(tTemp);
        } 
    });

    input[1].addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) {   /** 13 es retorno de carro */
            if (input[1].validity.patternMismatch == false) { /** comprobando si coicide con el atributo pattern */
                var arrayResults = falsoCalculate("-5.56789      e-6          c");
            } 
        }
    });
}

    
function addventSelect(input) {
    var input =document.getElementsByClassName(input);
    input[0].addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) {   /** 13 es retorno de carro */
            if (input[0].validity.patternMismatch == false) { /** comprobando si coicide con el atributo pattern */
                var arrayResults = falsoCalculate("5c");
                changeTemperatureConverterInterface(arrayResults);
            } 
        }
    });
}    

function falsoCalculate(temperaturaOriginal) {
      console.log(temperaturaOriginal);
      var originalWithouthBlanks = temperaturaOriginal.replace(/ /g,'');
      var escalaOriginal = originalWithouthBlanks.charAt(originalWithouthBlanks.length - 1);
      var originalfloat = parseFloat(temperaturaOriginal);
      console.log(originalfloat)
      var vectorReturn =[];
      vectorReturn[0] = (originalfloat * 5).toString() + "f";
      vectorReturn[1] = (originalfloat * 3).toString() + "k";
      vectorReturn[2] = temperaturaOriginal;
      return vectorReturn;
    }
    
function changeTemperatureConverterInterface(arr) {
    // var inputRight = document.getElementsByClassName("InputTemperatura")[0];
    var inputLeft = document.getElementsByClassName("InputTemperatura")[1];
    // inputRight.value = arr[0];
    inputLeft.value = arr[1];
    /*** acabar esto */
    
}
    
    