let texto = document.getElementById("texto").value;
let tituloMensaje = document.getElementById("titulo-mensaje");
let parrafo = document.getElementById("parrafo");
let muñeco = document.getElementById("muñeco");

    let codigoDeTexto = texto
    .replace(/a/gi,"ai");
    .replace(/e/gi,"enter");
    .replace(/i/gi,"imes");
    .replace(/o/gi,"ober");
    .replace(/u/gi,"ufat");

if (document.getElementById("texto").value.length != 0){
    document,getElementById ("texto"). value = codigoDeTexto;
    document,getElementById("tituloMensaje").textContent = "Texto encriptado con Exito";
    document,getElementById ("parrafo").textContent = "";
    document,getElementById ("muñeco").src = "img/Muñeco.png";
}else{

}