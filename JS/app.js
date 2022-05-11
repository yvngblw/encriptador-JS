let txt = document.getElementById('textArea0');
let encript = document.getElementById('btn-encrypt');
let decrypt = document.getElementById('btn-decrypt');
let clipboard = document.getElementById('btn-copy');
let frase;
let porcentaje = 100;
let validator = true;
let validarInput = 1;
let count = 0;

function animation() {

  function transition() {
    console.log(porcentaje);
    document.querySelector(".munheco").style.opacity = porcentaje + "%";
    document.querySelector(".no-mesagge").style.opacity = porcentaje + "%";
    porcentaje = porcentaje - 10;


    if (porcentaje < 0) {
      porcentaje = 0;
      clearInterval(over);

    }
  }
  let over = setInterval(transition, 45);
}

function animationAlert(ptje, clase0, clase1) {
  ptje = 0;
  document.querySelector(clase1).style.zIndex = 2;
  function transition() {


    if (ptje <= 100 && count == 0) {
      ptje = ptje + 10;
      document.querySelector(clase0).style.opacity = ptje + "%";
      document.querySelector(clase1).style.opacity = ptje + "%";
      console.log(ptje);
      if (ptje > 100 && count == 0) {
        count = 1;
        ptje = 100;
      }
    } else if (count == 1) {
      ptje = ptje - 10;
      document.querySelector(clase0).style.opacity = ptje + "%";
      document.querySelector(clase1).style.opacity = ptje + "%";
      if (ptje == 0 && count == 1) {
        count = 0;
        document.querySelector(clase1).style.zIndex = 0;
        clearInterval(over);
      }
    }
  }

  let over = setInterval(transition, 100);

}

function animationError(ptje, clase0) {
  ptje = 0;
  document.querySelector(clase0).style.zIndex = 2;
  function transition() {


    if (ptje <= 100 && count == 0) {
      ptje = ptje + 10;
      document.querySelector(clase0).style.opacity = ptje + "%";
      console.log(ptje);
      if (ptje > 100 && count == 0) {
        count = 1;
        ptje = 100;
      }
    } else if (count == 1) {
      ptje = ptje - 10;
      document.querySelector(clase0).style.opacity = ptje + "%";
      if (ptje == 0 && count == 1) {
        count = 0;
        document.querySelector(clase0).style.zIndex = 0;
        clearInterval(over);
      }
    }
  }

  let over = setInterval(transition, 100);

}

function encriptacion() {

  if (txt.value != "" && validarInput == 1) {
    frase = txt.value.toLowerCase();
    frase = frase.split('');

    for (let i = 0; i < frase.length; i++) {

      switch (frase[i]) {
        case 'e':
          frase[i] = 'enter';
          break;
        case 'i':
          frase[i] = 'imes';
          break;
        case 'a':
          frase[i] = 'ai';
          break;
        case 'o':
          frase[i] = 'ober';
          break;
        case 'u':
          frase[i] = 'ufat';
          break;
        default:
          break;
      }
    }
    frase = frase.join('');
    console.log(frase);

    animationAlert(porcentaje, ".ALERT_ENCRYPT", ".check-img");


    animation();


    setTimeout(() => {
      document.getElementById('textArea1').value = frase;
      setTimeout(() => {
        document.querySelector("#btn-copy").style.display = "initial";
        document.querySelector(".munheco").style.display = "none";
        document.querySelector(".no-mesagge").style.display = "none";
      }, 2000);

    }, 1000)
  } else if (validarInput == 0) {
    setTimeout(() => {
      animationError(porcentaje, ".error-img");
      setTimeout(() => {
        if (validator == true) {
          animation();
        }
        setTimeout(() => {

          document.querySelector(".munheco1").style.opacity = "100%";
          document.querySelector(".checklist").style.opacity = "100%";
          setTimeout(() => {
            window.location.href = window.location.href;
          }, 7000);
        }, 2000);
      }, 1000);

    }, 100)

  } else {
    setTimeout(() => {
      animationError(porcentaje, ".error-img");
      setTimeout(() => {
        if (validator == true) {
          animation();
        }
        setTimeout(() => {

          document.querySelector(".fatal-search").style.opacity = "100%";
          document.querySelector(".errorE").style.opacity = "100%";
          setTimeout(() => {
            window.location.href = window.location.href;
          }, 4000);
        }, 2000);
      }, 1000);

    }, 100)
  }
}


function desencriptacion() {
  if (txt.value != "" && validarInput == 1) {
    let text_e = document.querySelector("#textArea0").value;
    let text_decrypt = text_e.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

    animationAlert(porcentaje, ".ALERT_DECRYPT", ".check-img");
    if (validator == true) {
      animation();
    }

    setTimeout(() => {
      document.querySelector("#textArea1").value = text_decrypt;
      setTimeout(() => {
        document.querySelector("#btn-copy").style.display = "initial";
        document.querySelector(".munheco").style.display = "none";
        document.querySelector(".no-mesagge").style.display = "none";
      }, 2000);

    }, 1000)
  } else if (validarInput == 0) {
    setTimeout(() => {
      animationError(porcentaje, ".error-img");
      setTimeout(() => {
        if (validator == true) {
          animation();
        }
        setTimeout(() => {

          document.querySelector(".munheco1").style.opacity = "100%";
          document.querySelector(".checklist").style.opacity = "100%";
          setTimeout(() => {
            window.location.href = window.location.href;
          }, 7000);
        }, 2000);
      }, 1000);

    }, 100)

  } else {
    setTimeout(() => {
      animationError(porcentaje, ".error-img");
      setTimeout(() => {
        if (validator == true) {
          animation();
        }
        setTimeout(() => {

          document.querySelector(".fatal-search").style.opacity = "100%";
          document.querySelector(".errorD").style.opacity = "100%";
          setTimeout(() => {
            window.location.href = window.location.href;
          }, 4000);
        }, 2000);
      }, 1000);

    }, 100)
  }

}

function copyclip() {

  let content = document.getElementById('textArea1');
  content.select();
  document.execCommand('copy');
  animationAlert(porcentaje, ".ALERT_COPY", ".check-img");
  setTimeout(() => {
    setTimeout(() => {
      window.location.href = window.location.href;
    }, 1000);

  }, 2000);

}


encript.onclick = encriptacion;

decrypt.onclick = desencriptacion;

clipboard.onclick = copyclip;