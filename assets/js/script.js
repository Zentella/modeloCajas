
let azul = 3
let verde = 2

function orden() {
    azul = azul * -1
    verde = verde * -1

  document.getElementById("azul").style.zIndex = azul;
  document.getElementById("verde").style.zIndex = verde;
  //console.log('verde ',verde)

}
