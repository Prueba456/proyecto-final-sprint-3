var enviar = document.getElementById("button1");
var celular = document.getElementById("numero");
var oculto = document.getElementById("ocultar");
window.addEventListener("load", function (e){
  e.preventDefault();
  enviar.addEventListener("click", function(){
    if(celular.value == "" || /[9]{1}[0-9]{8}/.test(celular.value)){
        alert("Escriba su numero correcto");
    }

  })
})
