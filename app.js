//Manejo del DOM//

let inputText = document.getElementById('inputText');
let botonEncriptar = document.getElementById('encriptar');
let botonDesencriptar = document.getElementById('desencriptar');
let outputText = document.getElementById('outputText');
let botonCopiar = document.getElementById('copiar');
let imagenOutputText = document.getElementById('imagen__outputText')

botonEncriptar.onclick = function (){
    let textoEncriptado = encriptar(inputText.value);
    console.log(`el mensaje encriptado es: "${textoEncriptado}"`);
    outputText.value = textoEncriptado;
};

botonDesencriptar.onclick = function (){
    let textoDesencriptado = desencriptar(inputText.value);
    console.log(`el mensaje desencriptado es: ${textoDesencriptado}`);
    outputText.value = textoDesencriptado;
}

inputText.addEventListener ('input', function(){
    if(this.value === ""){
        outputText.value = "";
    }
});

outputText.addEventListener ('input', function(){
    if (this.value === ""){
        inputText.value = "";
    }
});

botonCopiar.onclick = function (){
    let textoCopiado = outputText.value;
    navigator.clipboard.writeText(textoCopiado);
}
    


/*
function imgApareceDesaparece() {
    if (outputText.value === "") {
        outputText.style.display = "none";
        imagenOutputText.style.display = "block";
    } else {
        outputText.style.display = "block";
        imagenOutputText.style.display = "none";
    }
}
*/



//--------------función para encriptar!---------------//

function encriptar (textoUsuario){
    let arrayParaEncriptar = textoUsuario.split("");
    for (let i = 0; i < arrayParaEncriptar.length; i++){
        if (arrayParaEncriptar[i] === "a"){
            arrayParaEncriptar[i] = "ai";
        }
        else if (arrayParaEncriptar[i] === "e"){
           arrayParaEncriptar[i] = "enter";
        }
        else if (arrayParaEncriptar[i] === "i"){
            arrayParaEncriptar[i] = "imes";
        }
        else if (arrayParaEncriptar[i] === "o"){
            arrayParaEncriptar[i] = "ober";
        }
        else if (arrayParaEncriptar[i] === "u"){
            arrayParaEncriptar[i] = "ufat";
        }
        else{
            arrayParaEncriptar[i] = arrayParaEncriptar[i];
        }
    }
    return arrayParaEncriptar.join("");
}

//-----------Función para Desencriptar-----------//

function desencriptar(textoEncriptado) {
    let textoDesencriptado = textoEncriptado.split("ufat").join("u");
    textoDesencriptado = textoDesencriptado.split("ober").join("o");
    textoDesencriptado = textoDesencriptado.split("imes").join("i");
    textoDesencriptado = textoDesencriptado.split("enter").join("e");
    textoDesencriptado = textoDesencriptado.split("ai").join("a");
    
    return textoDesencriptado;
}