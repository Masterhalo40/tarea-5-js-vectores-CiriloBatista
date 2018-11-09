var tamaño = document.querySelector('#array1');
var buscar = document.querySelector('#array2');
var result = document.querySelector('#resultado');

var btnArray1 = document.querySelector('#btnArray1');
btnArray1.addEventListener('click', problema1);
var btnArray2 = document.querySelector('#btnArray2');
btnArray2.addEventListener('click', problema2);
var btnArray3 = document.querySelector('#btnArray3');
btnArray3.addEventListener('click', problema3);

function problema1(){
    var number = Number(tamaño.value);
    var vector = new Array();
    
    for(var i = 0; i < number; i++){
        var x = Number(Math.trunc((Math.random() * 100) + 1));
        vector[i] = x;
    }
    cell.innerHTML = '';
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