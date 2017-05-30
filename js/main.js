'use strict';

var inputName = document.getElementById('input-name');
var inputValue = inputName.value;
var buttonSubmit=document.getElementById('buttonSubmit');

var userName = document.getElementById('name');
var photo = document.getElementById('photo');
var numberRepo = document.getElementById('number-repo');

function submit() {
  var urlApi = "https://api.github.com/users/" + inputValue;
  var request = new XMLHttpRequest();
  request.open('GET', urlApi, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      if (userName.innerHTML = " "){
        userName.innerHTML= "Sin nombre";
      }else{
        userName.innerHTML = data.name;
      }
      photo.innerHTML = "<img src=" + data.avatar_url + ">";
      numberRepo.innerHTML = "Número de repositiorios" + " " + data.public_repos;
    } else {
      console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
    }
  };

  request.onerror = function() {
    console.log('Error al tratar de conectarse con el servidor');
  };
  request.send();
}

buttonSubmit.addEventListener("click", submit);
