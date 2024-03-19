
function encriptarTexto(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

function desencriptarTexto(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

document.addEventListener('DOMContentLoaded', function() {
    var encryptButton = document.getElementById('encryptButton');
    var decryptButton = document.getElementById('decryptButton');
    var inputText = document.getElementById('inputText');
    var imageGroup = document.getElementById('imageGroup');
    var mainImage = document.getElementById('mainImage');
    var outputText = document.querySelector('.image-group p');

    encryptButton.addEventListener('click', function() {
        var encryptedText = encriptarTexto(inputText.value);
        mainImage.style.display = 'none'; // Ocultar imagen
        outputText.textContent = encryptedText; // Mostrar texto encriptado
        outputText.style.display = 'block'; // Asegurarse de que el párrafo es visible
    });

    decryptButton.addEventListener('click', function() {
        var decryptedText = desencriptarTexto(inputText.value);
        mainImage.style.display = 'none'; // Ocultar imagen
        outputText.textContent = decryptedText; // Mostrar texto desencriptado
        outputText.style.display = 'block'; // Asegurarse de que el párrafo es visible
    });
});
