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

var vector = new Array();

function problema1(){
    var number = Number(tamaño.value);
    
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
    var number2 = Number(buscar.value);
    
    result.innerHTML = '';
    var suma = 0;
    for(var i = 0; i < vector.length; i++){
        var row = result.insertRow(-1);
        var cell = row.insertCell(0);
        if(vector[i] === number2){
            suma++;
            cell.style.backgroundColor = '#3E4238';
            cell.style.color = 'white';
        }
        cell.innerHTML = vector[i];
    }
    var row = result.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = 'El numero '+number2+' se repite '+suma+' veces.';
}
function problema3(){
    var number1 = Number(input3.value);
    var number2 = Number(input4.value);
    
    result.innerHTML = '';
    for(var i = 0; i < vector.length; i++){
        var row = result.insertRow(-1);
        var cell = row.insertCell(0);
        if(vector[i] === number1){
            vector[i] = number2;
            cell.style.backgroundColor = '#3E4238';
            cell.style.color = 'white';
            cell.innerHTML = number1+' -> '+number2;
        }
        cell.innerHTML = vector[i];
    }
    var row = result.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = 'Se ha actualizado el numero '+number1+' por el numero '+number2+'.';
}
function problema4(){
    var number1 = Number(cambiar.value);
    
    result.innerHTML = '';
    for(var i = 0; i < vector.length; i++){
        var row = result.insertRow(-1);
        var cell = row.insertCell(0);
        if(vector[i] === number1){
            vector.shift(number1);
            cell.style.backgroundColor = 'gray';
            cell.innerHTML = 0;
        }
        cell.innerHTML = vector[i];
    }
    var row = result.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = 'Se ha eliminado el numero '+number1+' y ha quedado vacío.';
}
