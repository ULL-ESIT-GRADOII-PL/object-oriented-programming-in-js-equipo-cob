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

/*  función para mostrar y ocultar tags además de cambiar el subrayado*/
function ocultarMostrarTags(focus) {
    var collection = $("article");
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
     });


}

