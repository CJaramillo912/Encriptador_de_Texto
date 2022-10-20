var imagenNoTexto = document.getElementById("imagenNoTexto");
var resultadoTitulo = document.getElementById("resultadoTitulo");
var resultadoTexto = document.getElementById("resultadoTexto");
var output = document.getElementById("output");
var botonEncriptar= document.getElementById("botonEncriptar");
var botonDesencriptar= document.getElementById("botonDesencriptar");
var botonCopiar= document.getElementById("botonCopiar");


//Para ocultar boton de copiar
botonCopiar.style.display = "none";
//Para ocultar output
output.style.display = "none";


//Encriptar
function encriptar () {

    var datosValidos = document.getElementById("input").value.length > 0;

    if (datosValidos) {
        var input = document.getElementById("input").value;
        input = input.toLowerCase();
        var nuevoTexto = input.replace(/e/gi, "enter");
        var nuevoTexto = nuevoTexto.replace(/i/gi, "imes");
        var nuevoTexto = nuevoTexto.replace(/a/gi, "ai");
        var nuevoTexto = nuevoTexto.replace(/o/gi, "ober");
        var nuevoTexto = nuevoTexto.replace(/u/gi, "ufat");
    
        output.value = nuevoTexto;
        document.getElementById("input").value = "";
        imagenNoTexto.style.display = "none";
        resultadoTitulo.style.display = "none";
        resultadoTexto.style.display = "none";
        output.style.display = "inline";
        botonCopiar.style.display = "inline";
    } else {
        imagenNoTexto.style.display = "inline";
        resultadoTitulo.style.display = "inline-block";
        resultadoTexto.style.display = "inline-block";
        botonCopiar.style.display = "none";
        output.style.display = "none";
    }

}

//Desencriptar
function desencriptar () {

    var datosValidos = document.getElementById("input").value.length > 0;

    if (datosValidos) {
        var input = document.getElementById("input").value;
        input = input.toLowerCase();
        var nuevoTexto = input.replace(/enter/gi, "e");
        var nuevoTexto = nuevoTexto.replace(/imes/gi, "i");
        var nuevoTexto = nuevoTexto.replace(/ai/gi, "a");
        var nuevoTexto = nuevoTexto.replace(/ober/gi, "o");
        var nuevoTexto = nuevoTexto.replace(/ufat/gi, "u");
    
        output.value = nuevoTexto;
        document.getElementById("input").value = "";
        imagenNoTexto.style.display = "none";
        resultadoTitulo.style.display = "none";
        resultadoTexto.style.display = "none";
        output.style.display = "inline";
        botonCopiar.style.display = "inline";
    } else {
        imagenNoTexto.style.display = "inline";
        resultadoTitulo.style.display = "inline-block";
        resultadoTexto.style.display = "inline-block";
        botonCopiar.style.display = "none";
        output.style.display = "none";

    }
}

//Copiar
function copiar (){
        var resultado = output.value;
        navigator.clipboard.writeText(resultado);
        swal("Texto copiado","Texto copiado al portapapeles","success");
}

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;


