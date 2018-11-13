var lista = document.querySelector('#array1');
var lista2 = document.querySelector('#array2');
var reservar = document.querySelector('#array3');
var reservar1 = document.querySelector('#array4');
var result = document.querySelector('#resultado');

var btnArray1 = document.querySelector('#btnArray1');
btnArray1.addEventListener('click', problema5);
var btnArray2 = document.querySelector('#btnArray2');
btnArray2.addEventListener('click', problema6);
var btnArray3 = document.querySelector('#btnArray3');
btnArray3.addEventListener('click', problema7);

function problema5(){
    var number = lista.value;
    var vector = new Array();

    vector.unshift(number);
    for(var i = 0; i < vector.length; i++){
        row = result.insertRow(-1);
        cell = row.insertCell(0);
        cell.innerHTML = vector[i];
    }
}
function problema6(){
    var number0 = lista.value;
    var number1 = lista2.value;
    var vector = new Array();

    vector.unshift(number0);
    for(var i = 0; i < vector.length; i++){
        row = result.insertRow(-1);
        cell = row.insertCell(0);
        cell.innerHTML = vector[i];
    }
    var suma = 0;
    if(vector[i] === number1){
        suma++;
        cell.style.backgroundColor = 'gray';
    }
    console.log(vector);
    row = result.insertRow(-1);
    cell = row.insertCell(0);
    cell.innerHTML = 'Se encontraron '+suma+' resultados';
}
function problema7(){
    var number = Number(reservar.value);
    var nombre = reservar1.value;
    var vector = new Array(35);

    for(var i = 1; i <= vector.length; i++){
        row = result.insertRow(-1);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell1.innerHTML = i;
        cell2.innerHTML = 'DISPONIBLE!';
        cell.innerHTML = '';
        if(number === i){
            vector[i] = nombre;
            cell2.innerHTML = nombre;
        }
    }
    
}