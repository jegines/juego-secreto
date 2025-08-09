
// Proyecto Inicial - Lógica de Programación 2 - Alura
// Ejercicio: Juego del Número Secreto
let numeroSecreto = 0;
let intentos = 1;
let listaNumerosGenerados = [];
let numeroMaximo = parseInt(prompt('Introduce el número máximo para jugar (1-100):')) ;

function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado)
    console.log(listaNumerosGenerados);
    // Verificar tamaño de la lista
    if (listaNumerosGenerados.length >= numeroMaximo) {
        asignarTexto('p', 'Todos los números posibles ya han sido generados. Reinicia el juego.');
        // listaNumerosGenerados = []; // Reiniciar la lista si se han generado todos los números
    } else {
        if (listaNumerosGenerados.includes(numeroGenerado)) {
            console.log('Número ya generado, generando otro número...');
            return generaNumeroSecreto();
        } else {
            listaNumerosGenerados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

//console.log('Número secreto generado:', numeroSecreto);

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log('Número de intentos:', intentos);
    //console.log('Número ingresado por el usuario:', numeroUsuario);

    if (numeroUsuario === numeroSecreto) {
        asignarTexto('p', `¡Felicidades! Has acertado en  ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
        limpiarCaja();
        document.getElementById('intentar').setAttribute('disabled', true);
    } else {
        if (numeroUsuario < numeroSecreto) {
            asignarTexto('p', 'El número secreto es mayor que ' + numeroUsuario + '.');
        } else {
            asignarTexto('p', 'El número secreto es menor que ' + numeroUsuario + '.');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTexto('h1', 'Juego del Número Secreto');
    asignarTexto('p', 'Indica un número del 1 al ' + numeroMaximo + '.');
    //Reiniciar el número secreto
    numeroSecreto = generaNumeroSecreto();
    //console.log('Número secreto reiniciado:', numeroSecreto);
    //Reiniciar el contador de intentos
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalos
    condicionesIniciales();
    // Deshabilitar el botón juego nuevo
    document.getElementById('reiniciar').setAttribute('disabled', true);
    // Habilitar el botón intentar
    document.getElementById('intentar').removeAttribute('disabled');  
}

condicionesIniciales();
