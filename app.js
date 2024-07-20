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

let textoDelUsuario = "hola buenas tardes";
let textoEncriptado = encriptar(textoDelUsuario);
console.log(`el mensaje secreto es: "${textoEncriptado}"`)


function desencriptar (textoEncriptado){

}