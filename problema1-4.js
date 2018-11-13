var tamaño = document.querySelector('#array1');
var buscar = document.querySelector('#array2');
var input3 = document.querySelector('#array3');
var input4 = document.querySelector('#array4');
var cambiar = document.querySelector('#array5');
var result = document.querySelector('#resultado');

var btnArray1 = document.querySelector('#btnArray1');
btnArray1.addEventListener('click', problema1);
var btnArray2 = document.querySelector('#btnArray2');
btnArray2.addEventListener('click', problema2);
var btnArray3 = document.querySelector('#btnArray3');
btnArray3.addEventListener('click', problema3);
var btnArray4 = document.querySelector('#btnArray4');
btnArray4.addEventListener('click', problema4);

function problema1(){
    var number = Number(tamaño.value);
    var vector = new Array();
    
    for(var i = 0; i < number; i++){
        var x = Number(Math.trunc((Math.random() * 100) + 1));
        vector[i] = x;
    }
    result.innerHTML = '';
    for(var i = 0; i < vector.length; i++){
        var row = result.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = vector[i];
    }
}
function problema2(){
    var number1 = Number(tamaño.value);
    var number2 = Number(buscar.value);
    var vector = new Array();
    
    for(var i = 0; i < number1; i++){
        var x = Number(Math.trunc((Math.random() * 100) + 1));
        vector[i] = x;
    }
    var suma = 0;
    for(var i = 0; i < vector.length; i++){
        var row = result.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = vector[i];

        if(vector[i] === number2){
            suma++;
            cell.style.backgroundColor = 'gray';
    }
    }
    var row = result.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = 'El numero '+number2+' se repite '+suma+' veces.';
}
function problema3(){
    var number0 = Number(tamaño.value);
    var number1 = Number(input3.value);
    var number2 = Number(input4.value);
    var vector = new Array();
    
    for(var i = 0; i < number0; i++){
        var x = Number(Math.trunc((Math.random() * 100) + 1));
        vector[i] = x;
    }
    var suma = 0;
    result.innerHTML = '';
    for(var i = 0; i < vector.length; i++){
        var row = result.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = vector[i];

        if(vector[i] === number1){
            suma++;
            cell.style.backgroundColor = 'gray';
            cell.innerHTML = number1+' -> '+number2;
        }
    }
    var row = result.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = 'Se ha actualizado el numero '+number2+' por el numero '+number1+'.';
}
function problema4(){
    var number0 = Number(tamaño.value);
    var number1 = Number(cambiar.value);
    var vector = new Array();

    for(var i = 0; i < number0; i++){
        var x = Number(Math.trunc((Math.random() * 100) + 1));
        vector[i] = x;
    }
    var suma = 0;
    result.innerHTML = '';
    for(var i = 0; i < vector.length; i++){
        var row = result.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = vector[i];

        if(vector[i] === number1){
            suma++;
            cell.style.backgroundColor = 'gray';
            cell.innerHTML = 0;
        }
    }
    var row = result.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = 'Se ha eliminado el numero '+number1+' y ha quedado vacío.';
}
