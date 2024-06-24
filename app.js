/* -----Forma inicial de asiganción de texto----

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Inserta un número del 1 al 10';
*/
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let limiteMax = 10;

// Forma reducida de asiganción de texto a HTML
function asigancionDeTexto(elemento,texto){
let seleccionTexto = document.querySelector(elemento);
seleccionTexto.innerHTML = texto;
}

function generadorDeNumero() {
    /*let numeroSecreto = Math.floor(Math.random()*10) +1;
    return(numeroSecreto); */   //Opción 1 de generar
    
    //Opción 2 (metodo reducido)
    let numeroGenerado = (Math.floor(Math.random()*limiteMax) + 1);
    if(listaNumerosSorteados.length == limiteMax){
    asigancionDeTexto('p', `Excediste el numero maximo de valores`);
    return;
    }else{
    if(listaNumerosSorteados.includes(numeroGenerado)){
    return(generadorDeNumero());
    } else{
        console.log(numeroGenerado);
        return(numeroGenerado);    
    }
    }
}
// Declaración de función
function verificarIntento(){
    let valorUsuario = parseInt(document.getElementById('valorIngresado').value);
    if(numeroSecreto === valorUsuario) {
        asigancionDeTexto('p', `Acertaste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        listaNumerosSorteados.push(numeroSecreto);
        console.log(`'lista ' ${listaNumerosSorteados.length}`);
    } else {
    if(numeroSecreto > valorUsuario){
        asigancionDeTexto('p', 'El número es mayor');
    } else {
        asigancionDeTexto('p', 'El número es menor');
    } intentos++;
    limpiarCaja();
    }
    return;
}
function reiniciarJuego(){
    //limpiar caja de valor
    limpiarCaja();
    //Asignar texto inicial de valores min y max
    //Reiniciar valor aleatorio
    //Reiniciar contador de intentos
    condicionesIniciales();
    //Deshabilitar botón de reiniciar
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function condicionesIniciales(){
    asigancionDeTexto('h1', 'Juego del Número Secreto');
    asigancionDeTexto('p', `Indica un número del 1 al ${limiteMax}`);
    numeroSecreto = generadorDeNumero();
    intentos = 1;
}

function limpiarCaja(){
    let valorCaja = (document.querySelector('#valorIngresado').value) = '';
    //valorCaja.value = ''; Opcion 1 u Opcion 2 mas simplificada en linea de arriba
}

condicionesIniciales();
