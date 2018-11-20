var lista = document.querySelector('#array1');
var lista2 = document.querySelector('#array2');
var reservar = document.querySelector('#array3');
var reservar1 = document.querySelector('#array4');
var boleto = document.querySelector('#array5');
var persona = document.querySelector('#array6');
var result = document.querySelector('#resultado');

var btnArray1 = document.querySelector('#btnArray1');
btnArray1.addEventListener('click', problema5);
var btnArray2 = document.querySelector('#btnArray2');
btnArray2.addEventListener('click', problema6);
var btnArray3 = document.querySelector('#btnArray3');
btnArray3.addEventListener('click', problema7);
var btnArray4 = document.querySelector('#btnArray4');
btnArray4.addEventListener('click', problema8);
var btnArray5 = document.querySelector('#btnArray5');
btnArray5.addEventListener('click', problema81);

var asientos = new Array(35);
var asistentes = new Array();
var sorteo = new Array(10);

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
    var number1 = lista2.value;

    result.innerHTML = '';
    var suma = 0;
    for(var i = 0; i < asistentes.length; i++){
        row = result.insertRow(-1);
        cell = row.insertCell(0);
        if(asistentes[i] === number1){
            suma++;
            cell.style.backgroundColor = '#3E4238';
            cell.style.color = 'white';
        }
        cell.innerHTML = asistentes[i];
    }
    row = result.insertRow(-1);
    cell = row.insertCell(0);
    cell.innerHTML = 'Se encontraron '+suma+' resultados';
}
function problema7(){
    var number = Number(reservar.value);
    var nombre = reservar1.value;

    result.innerHTML = '';
    for(var i = 1; i <= 35; i++){
        asientos[0] = 'Conductor';
        if(asientos[i] === 'DISPONIBLE!' || asientos[i] === undefined){
            asientos[i] = 'DISPONIBLE!';
        }
    }  
    for(var i = 1; i < asientos.length; i++){
        
        if(number === i && asientos[i] !== 'DISPONIBLE!'){
            alert('Este asiento esta ocupado!');
        }else if(number === i && asientos[i] === 'DISPONIBLE!'){
            asientos[i] = nombre;
        }
        row = result.insertRow(-1);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell1.innerHTML = i;
        cell2.innerHTML = asientos[i];
    }
}
function problema8(){
    var ticket = Number(boleto.value);
    var person = persona.value;

    
    for(var i = 1; i <= 10; i++){
        if(sorteo[i] === 'Disponible' || sorteo[i] === undefined){
            sorteo[i] = 'Disponible';
        }
    }
    result.innerHTML = '';
    for(var i = 1; i < sorteo.length; i++){
        row = result.insertRow(-1);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell1.innerHTML = i;
        if(ticket === i && sorteo[i] !== 'Disponible'){
            alert('Este boleto ya esta vendido! Selecciona otro :)');
        }else if(ticket === i && sorteo[i] === 'Disponible'){
            sorteo[i] = person;
        }
        cell2.innerHTML = sorteo[i];
    }
}
function problema81(){
    var ticket = Number(boleto.value);

    for(var i = 1; i < sorteo.length; i++){
        if(sorteo[i] !== 'Disponible'){
            var x = Number(Math.trunc((Math.random() * 9) + 1));
            if(ticket === x){
                var row = result.insertRow(-1);
                var cell = row.insertCell(0);
                cell.innerHTML = sorteo[i]+' eres el Ganador de este Sorteo!';
                cell.colSpan = '2';
                cell.style.backgroundColor = '#3E4238';
                cell.style.color = 'white';
                break;
            }
        }else{
            alert('Lo sentimos :( No se puede realizar el sorteo');
            break;
        }
    }  
}