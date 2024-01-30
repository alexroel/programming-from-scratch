
// Im´magen dinamico 
let miImagen = document.querySelector('img');
miImagen.onclick = function () {
    let miSrc = miImagen.getAttribute('src');
    if (miSrc === 'images/logo-google.png') {
        miImagen.setAttribute('src', 'images/logo-google2.webp');
    } else {
        miImagen.setAttribute('src', 'images/logo-google.png');
    }
}

// Perosonalización de mensaje de título principal
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function enviarNombreUsuario() {
    let miNombre = prompt('Ingrese su nombre por favor:');
    if (miNombre) {
        localStorage.setItem('name', miNombre);
        miTitulo.innerHTML = 'Google es genial, ' + miNombre; 
    } else {
        enviarNombreUsuario();
    }
}

if (localStorage.getItem('name')) {
    let storedName = localStorage.getItem('name');
    miTitulo.innerHTML = 'Google es genial, ' + storedName;
} else {
    enviarNombreUsuario();
}

miBoton.onclick = function () {
    enviarNombreUsuario();
}