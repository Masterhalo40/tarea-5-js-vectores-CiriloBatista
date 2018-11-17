var cancion = document.querySelector('#array1');
var result = document.querySelector('#resultado');

var btnArray1 = document.querySelector('#btnArray1');
btnArray1.addEventListener('click', problema9);
var btnArray2 = document.querySelector('#btnArray2');
btnArray2.addEventListener('click', problema91);

var playlist = new Array();

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
    var song = cancion.value;

    var x = Number(Math.trunc((Math.random() * (playlist.length-1)) + 1));
    for(var i = 0; i < playlist.length; i++){
        if(i === x){
            var row = result.insertRow(-1);
            var cell = row.insertCell(0);
            cell.innerHTML = 'Reproduciendo: '+playlist[i];
            break;
        }else{
            row = result.insertRow(-1);
            cell = row.insertCell(0);
            cell.innerHTML = 'No hay lista de reproduccion!';
            break;
        }
    }
}