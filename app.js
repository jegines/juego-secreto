
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


/*
 Practica 1 lección 2 - Funciones
function saludo() {
    console.log('Hola, mundo!');
}

function nombre(nombreUsuario) {
    console.log('Hola, ' + nombreUsuario + '!');
}  

function doble(numero) {
    console.log('El doble de ' + numero + ' es: ' + (numero * 2));
    return;
} 

function promedio(numero1, numero2, numero3) {
    let resultado = (numero1 + numero2 + numero3) / 3;
    //let resultado = suma / 3;
    console.log('El promedio de ' + numero1 + ', ' + numero2 + ' y ' + numero3 + ' es: ' + resultado);
    return resultado;
}  

function mayor(numero1 , numero2) {
    if (numero1 > numero2) {
        console.log('El número mayor es: ' + numero1); 
    } else {
        console.log('El número mayor es: ' + numero2);
    }
    return;
}

function cuadrado(numero) {
    console.log('El cuadrado de ' + numero + ' es: ' + (numero * numero));
    return;
}
saludo();
nombre('Juan');
nombre('María');
doble(5);
promedio(15, 20, 50);
mayor(10, 20);
mayor(30, 20);
cuadrado(4);
cuadrado(5);
cuadrado(6);    


function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    console.log('Tu IMC es: ' + imc.toFixed(2));
}

function factorial(numero) {
  if (numero < 0) {
    return 'No se puede calcular el factorial de un número negativo';
  }
  let resultado = 1;
  for (let contador = 1; contador <= numero; contador++) {
    resultado *= contador;
  }
  return resultado;
}

function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}

function convertirMoneda(cantidad) {
    let tipoCambio = 19.2 //Valor en pesos mexicanos
    let resultado = cantidad * tipoCambio;
    console.log(`El resultado de convertir ${cantidad} dolares a pesos mexicanos es: ${resultado} con un tipo de cambio de ${tipoCambio}`);
    return resultado;
}

function calcularAreaYPerimetroRectangular(alto, largo) {
    let area = alto * largo;
    let perimetro = 2 * (alto + largo);
    console.log(`El área de la sala es: ${area} y el perímetro es: ${perimetro}`);
    return { area, perimetro };
}

function calcularAreaYPerimetroCircular(radio) {
    const pi = Math.PI;
    let area = pi * radio * radio;
    let perimetro = 2 * pi * radio;
    console.log(`El área de la sala circular es: ${area.toFixed(2)} y el perímetro es: ${perimetro.toFixed(2)}`);
    return { area, perimetro };
}

function tablaMultiplicarWhile(numero) {
    console.log(`Tabla de multiplicar (usando WHILE) del ${numero}:`);
    contador = 1;
    while (contador <= 10) {
        console.log(`${numero} x ${contador} = ${numero * contador}`);
        contador++;
    }
    return;
}
function tablaMultiplicarFor(numero) {
    console.log(`Tabla de multiplicar (usando FOR) del ${numero}:`);
    for (let contador = 1; contador <= 10; contador++) {
        console.log(`${numero} x ${contador} = ${numero * contador}`);
    }
    return;
}
// Ejemplos de uso

let numero = 2;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);
calcularIMC(74, 1.61);
console.log('El factorial de 5 es: ' + factorial(5));
console.log('El factorial de 0 es: ' + factorial(0));
console.log('El factorial de -3 es: ' + factorial(-3));
convertirMoneda(100);
calcularAreaYPerimetroRectangular(5, 10);
calcularAreaYPerimetroRectangular(3, 7);
calcularAreaYPerimetroCircular(5);
calcularAreaYPerimetroCircular(10);
tablaMultiplicarWhile(5);
tablaMultiplicarFor(9);



//Practica 4 Listas

let listaVacia = [];
let lenguajesProgramación = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];
lenguajesProgramación.push('Java', 'Ruby', 'GoLang');

function imprimirLenguajes() {
    console.log('Lenguajes de programación:');
    for (let contador = 0; contador < lenguajesProgramación.length; contador++) {
        console.log(lenguajesProgramación[contador]);
    }
}

function imprimeInversa() {
    console.log('Lenguajes de programación en orden inverso:');
    for (let i = lenguajesProgramación.length - 1; i >= 0; i--) {
    console.log(lenguajesProgramación[i]);
    }
}

function calcularMedia(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
  return suma;
}

function menorMayor(lista) {
  let menor = lista[0];
  let mayor = lista[0];
    for (let valor = 1; valor < lista.length; valor++) {
        if (lista[valor] < menor) {
            menor = lista[valor];
        } else if (lista[valor] > mayor) {
            mayor = lista[valor];
        } 
    }
    return { menor, mayor };
}

function calcularSuma(lista) {
  let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma;
}

function posicionElemento(lista, elemento) {
  let posicion = lista.indexOf(elemento);
    if (posicion !== -1) {
        console.log(`El elemento ${elemento} se encuentra en la posición ${posicion}.`);
    }
    else {
        console.log(`El elemento ${elemento} no se encuentra en la lista.`);
    }
    return posicion;
}

function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}

function sumarListas2(lista1, lista2) {
       let suma = []; 
        for (let i = 0; i < lista1.length; i++) {
            suma.push(lista1[i] + lista2[i]);
        }
        console.log(suma);
    return suma;
}

function sumarListas(lista1, lista2) {
    return lista1.map((num, index) => num + lista2[index]);
}

function cuadradoLista(lista) {
    return lista.map(num => num * num);
}

let edades = [50, 20, 25, 30, 70, 35, 40, 45, 15];
let temperaturas = [15, 18, 20, 16, 14, 22, 19, 17, 21, 23, 40, 12];
let calificaciones = [90, 85, 100, 95, 80, 88, 92, 94, 89];
console.log("Media edades:", calcularMedia(edades));         // 25
//console.log("Media temperaturas:", calcularMedia(temperaturas)); // 17.67
//console.log("Media calificaciones:", calcularMedia(calificaciones)); // 91.67
//console.log("El número menor y mayor son:", menorMayor(edades)); 
console.log("El número menor y mayor son:", menorMayor(calificaciones));
console.log("Suma de edades:", calcularSuma(edades));         // 250
//console.log("Suma de temperaturas:", calcularSuma(temperaturas));
//console.log("Suma de calificaciones:", calcularSuma(calificaciones));
posicionElemento(lenguajesProgramación, 'JavaScript');
posicionElemento(lenguajesProgramación, 'PHP');
posicionElemento(lenguajesProgramación, 'Python');
//posicionElemento(lenguajesProgramación, 'Java');
//posicionElemento(lenguajesProgramación, 'Rust');

console.log('Índice de JavaScript:', encontrarIndiceElemento(lenguajesProgramación, 'JavaScript'));
console.log('Índice de PHP:', encontrarIndiceElemento(lenguajesProgramación, 'PHP'));
console.log('Índice de Python:', encontrarIndiceElemento(lenguajesProgramación, 'Python'));
//console.log('Índice de Java:', encontrarIndiceElemento(lenguajesProgramación, 'Java'));
//console.log('Índice de Rust:', encontrarIndiceElemento(lenguajesProgramación, 'Rust'));

const lista1 = [1, 2, 3];
const lista2 = [4, 5];
const resultado = sumarListas(lista1, lista2);
console.log(resultado);  

sumarListas2 (edades, calificaciones); 
sumarListas2 (calificaciones, temperaturas); // [105, 103, 120, 111, 80, 110, 111, 111, 110]

console.log('Cuadrado de edades:',  cuadradoLista(edades)); // [2500, 400, 625, 900, 4900, 1225, 1600, 2025, 225]
console.log('Cuadrado de temperaturas:', cuadradoLista(temperaturas)); // [225, 324, 400, 256, 196, 484, 361, 289, 441, 529, 1600, 144]
console.log('Cuadrado de calificaciones:', cuadradoLista(calificaciones)); // [8100, 7225, 10000, 9025, 6400, 7744, 8464, 8836, 7921]

//console.log('Lista de lenguajes de programación:', lenguajesProgramación);
//console.log('Lista vacía:', listaVacia);
//imprimirLenguajes();
//imprimeInversa();

*/