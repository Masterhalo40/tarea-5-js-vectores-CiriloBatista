var cancion = document.querySelector('#array1');
var array_nom = document.querySelector('#array2');
var array_num = document.querySelector('#array3');
var buscar = document.querySelector('#array4');
var result = document.querySelector('#resultado');

var btnArray1 = document.querySelector('#btnArray1');
btnArray1.addEventListener('click', problema9);
var btnArray2 = document.querySelector('#btnArray2');
btnArray2.addEventListener('click', problema91);
var btnArray3 = document.querySelector('#btnArray3');
btnArray3.addEventListener('click', problema10);
var btnArray4 = document.querySelector('#btnArray4');
btnArray4.addEventListener('click', problema11);

var playlist = new Array();
var nombres = new Array();
var numeros = new Array();

function problema9(){
    var song = cancion.value;

    playlist.unshift(song);
    playlist.sort();
    result.innerHTML = '';
    for(var i = 0; i < playlist.length; i++){
        row = result.insertRow(-1);
        cell = row.insertCell(0);
        cell.innerHTML = playlist[i];
    }
}
function problema91(){
    var list = Number(playlist.length);

    var x = Number(Math.trunc((Math.random() * list) + 1));
    x = parseInt(x);
    var i = 1;
while(i < list){
        if(x === i){
            var row = result.insertRow(-1);
            var cell = row.insertCell(0);
            cell.innerHTML = 'Reproduciendo: '+playlist[i];
            break;
        }
        i++;
    }
}
function problema10(){
    var nom = array_nom.value;
    var num = Number(array_num.value);

    nombres.push(nom);
    numeros.push(num);
    result.innerHTML = '';
    for(var i = 0; i < nombres.length; i++){
        var row = result.insertRow(-1);
        var cell2 = row.insertCell(0);
        cell1 = row.insertCell(1);
        cell2.innerHTML = nombres[i];
        cell1.innerHTML = numeros[i];
    }
}
function problema11(){
    var search = buscar.value;

    result.innerHTML = '';
    var suma = 0;
    for(var i = 0; i < nombres.length; i++){
        var row = result.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = nombres[i];
        cell2.innerHTML = numeros[i];
        if(nombres[i] === search){
            suma++;
            cell1.style.backgroundColor = '#3E4238';
            cell1.style.color = 'white';
            cell2.style.backgroundColor = '#3E4238';
            cell2.style.color = 'white';
        }
    }
}