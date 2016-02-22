

function lastChildOpaciti(nodoLlamador, opacity, opacity2) {
    nodoLlamador.childNodes[3].style.opacity = opacity;
    console.log( nodoLlamador.childNodes);
    nodoLlamador.childNodes[1].style.opacity = opacity2;
}

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
    
}


