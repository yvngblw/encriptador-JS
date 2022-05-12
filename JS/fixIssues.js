var navInfo = window.navigator.appVersion.toLowerCase();
var so = 'Sistema Operativo';
function retornarSO() {
  if (navInfo.indexOf('win') != -1) {
    so = 'Windows';
  }
  else if (navInfo.indexOf('linux') != -1) {
    so = 'Linux';
  }
  else if (navInfo.indexOf('mac') != -1) {
    so = 'Macintosh';
  }
  return so
}

retornarSO();


if (so == "Windows") {
  document.styleSheets[1].disabled = true;
} else if (so == "Linux") {
  document.styleSheets[2].disabled = true;
}else {
  document.styleSheets[1].disabled = true;
  document.styleSheets[2].disabled = true;
}


function validarCaracter(caracter) {
  caracter = caracter.charCodeAt(0);
  return (caracter >= 97 && caracter <= 122) || (caracter == 32) || (caracter == 63); // [a-z ]´
}

function analisisElemento(elemento) {
  for (var i = 0; i < elemento.length; i++) {
    if (!validarCaracter(elemento[i])) {
      break;
    }
  }
  return i == elemento.length;
}

function userInput(frase) {
  let elemento = frase.value;
  if (!analisisElemento(elemento)) {
    validarInput = 0;
  } else {
    validarInput = 1;
  }
}
