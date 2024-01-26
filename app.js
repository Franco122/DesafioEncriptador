let diccionarioEncriptado = {
    'a' : 'ai',
    'e' : 'enter',
    'i': 'imes',
    'o' : 'ober',
    'u': 'ufat',
}

let diccionarioDesencriptado = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u',
}

function validarEntrada(textarea) {
    const mensajeError = document.getElementById('mensajeError');
    const contenido = textarea.value;

    
    const regex = /^[a-z]*$/;

    if (regex.test(contenido)) {
        mensajeError.style.display = 'none';
    } else {
        mensajeError.style.display = 'block';
     
    }

    // Eliminar acentos
    textarea.value = quitarAcentos(contenido);
}

// Función para quitar acentos de caracteres
function quitarAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}


function encriptador() {
    const entradaUsuario = (document.querySelector('.contenidoTexto').value).toLowerCase();
    let palabraEncriptada = '';
    for(let i = 0; i < entradaUsuario.length; i++){
        if(entradaUsuario[i] in diccionarioEncriptado){
            palabraEncriptada += diccionarioEncriptado[entradaUsuario[i]];
        } else {
            palabraEncriptada += entradaUsuario[i];
        }
    }
    const contenedorDerecha = document.querySelector('.contenedor-derecha__info');
    contenedorDerecha.innerHTML = `<p class="texto-encriptado">${palabraEncriptada}</p>`;

    const btnCopiar = document.getElementById('btnCopiar');
    if (btnCopiar) {
        btnCopiar.style.display = 'block';
        btnCopiar.style.marginLeft = '25px';
        btnCopiar.style.marginTop = '125px';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const btnCopiar = document.getElementById('btnCopiar');
    btnCopiar.addEventListener('click', copiarTextoEncriptado);
});

function copiarTextoEncriptado() {
    const contenedorDerecha = document.querySelector('.contenedor-derecha p');
    
    // Crear un elemento de texto temporal
    const textoTemporal = document.createElement('textarea');
    textoTemporal.value = contenedorDerecha.textContent;

    
    document.body.appendChild(textoTemporal);

    
    textoTemporal.select();
    document.execCommand('copy');

    // Eliminar el elemento de texto temporal
    document.body.removeChild(textoTemporal);

    
    alert('Texto copiado al portapapeles');
}

function desencriptador() {
    const entradaUsuario = (document.querySelector('.contenidoTexto').value).toLowerCase();
    let palabraDesencriptada = entradaUsuario;

    for (const key in diccionarioDesencriptado) {
        const regex = new RegExp(key, 'g');
        palabraDesencriptada = palabraDesencriptada.replace(regex, diccionarioDesencriptado[key]);
    }

    const contenedorDerecha = document.querySelector('.contenedor-derecha__info');
    contenedorDerecha.innerHTML = `<p class="texto-encriptado">${palabraDesencriptada}</p>`;

    const btnCopiar = document.getElementById('btnCopiar');
    if (btnCopiar) {
        btnCopiar.style.display = 'block';
        btnCopiar.style.marginLeft = '25px';
        btnCopiar.style.marginTop = '125px';
    }
}
