let totalActual = 0;
let operando = false;   

const pantalla = document.querySelector('.screen');
const calculadora = document.querySelector('.calc');

//  -- Botones --

const C = document.getElementById('borrarTodo');
const borrar = document.getElementById('borrador');
const dividir = document.getElementById('divisor');
const multiplicar = document.getElementById('multiplicador');
const resta = document.getElementById('resta');
const suma = document.getElementById('suma');
const decimal = document.getElementById('decimal');
const numeros = document.querySelectorAll('.numero');
const operadores = document.querySelectorAll('.operator');

// -- Algoritmo --

numeros.forEach(numero => {
    numero.addEventListener('click', mostrarNum);
});

function mostrarNum(event) {
    const botonPresionado = event.target;
    const valorPantalla = parseInt(pantalla.textContent);
    const numeroPresionado = botonPresionado.textContent;

    if (valorPantalla === 0) {
        pantalla.textContent = numeroPresionado;
    } else if (valorPantalla !== 0) {
        pantalla.textContent += numeroPresionado;
    } 
}

operadores.forEach(operador => {
    operador.addEventListener('click', mostrarOperador)
})

function mostrarOperador(event) {
    const botonSeleccionado = event.target;
    const valorPantalla = parseInt(pantalla.textContent);
    const operadorSeleccionado = botonSeleccionado.textContent;
    const isANumber = (n) => {
        let numeroPreguntar = Number(n);
        if(numeroPreguntar) {
            return true;
        } else {
            return false;   
        }
    }
    if(isANumber(valorPantalla)) {
        pantalla.textContent += operadorSeleccionado;
    } else {
        return;
    }
}

console.log(operadores)