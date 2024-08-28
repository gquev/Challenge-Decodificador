function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/g, "ober")
        .replace(/u/gi, "ufat");
    
    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";

    } else{
        muñeco.src = "./imagenes/Muñeco.png";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        alert("Debes ingresar algún texto");
    }

}