const texto = document.querySelector(".texto");
const resultado = document.querySelector (".resultado");

function botonE(){
    const textoencriptado = encriptar(texto.value)
    resultado.value = textoencriptado
    texto.value= "";
    resultado.style.backgroundImage ="none"
} 
function encriptar (stringencriptada){
    let matriz = [["e","enter"],["i","imes"],["a","ai"], ["o","ober"],["u","ufat"]]
    stringencriptada = stringencriptada.toLowerCase()

    for (let i = 0; i < matriz.length; i++){
        if (stringencriptada.includes(matriz[i][0])){
            stringencriptada = stringencriptada.replaceAll(matriz[i][0], matriz[i][1])
        }
    }
    return stringencriptada
}
function botonD(){
    const textoencriptado = desencriptar(texto.value)
    resultado.value = textoencriptado
    texto.value= "";
    resultado.style.backgroundImage ="none"
}
function desencriptar (stringdesencriptada){
    let matriz = [["e","enter"],["i","imes"],["a","ai"], ["o","ober"],["u","ufat"]]
    stringdesencriptada = stringdesencriptada.toLowerCase()

    for (let i = 0; i < matriz.length; i++){
        if (stringdesencriptada.includes(matriz[i][0])){
            stringdesencriptada = stringdesencriptada.replaceAll(matriz[i][1], matriz[i][0])
        }

    }
    return stringdesencriptada
}
function botonC(stringdesencriptada){

    texto.value= stringdesencriptada

}

