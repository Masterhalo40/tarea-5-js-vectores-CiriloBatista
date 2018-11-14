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
var asistentes = new Array();

function problema5(){
    var nombre = lista.value;

    asistentes.unshift(nombre);
    asistentes.sort();
    result.innerHTML = '';
    for(var i = 0; i < asistentes.length; i++){
        row = result.insertRow(-1);
        cell = row.insertCell(0);
        cell.innerHTML = asistentes[i];
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

    var count = false;
    var disp = '';
    while(count === true){
        alert('Este asiento ya esta ocupado!');
    }
    result.innerHTML = '';
    for(var i = 1; i <= vector.length; i++){

        row = result.insertRow(-1);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell1.innerHTML = i;

        if(!(nombre === '') && (number === i)){
            cell2.innerHTML = nombre;
            count = true;
        }else{
            cell2.innerHTML = 'DISPONIBLE!';
            disp = disp+1;
        }
        if(number === i){
            vector[i] = nombre;
            cell2.innerHTML = nombre;
            
        }
    }
    
}