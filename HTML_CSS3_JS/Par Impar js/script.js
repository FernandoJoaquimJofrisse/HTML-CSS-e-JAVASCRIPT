function verificar(){
  var n1 = document.querySelector('input#txt')
  var resu = document.getElementById('resu1')
  var n1 = Number(txt.value)
  resu.innerHTML = " "
  if(n1 % 2 == 0){
     resu.innerHTML += "PAR"
     resu.style.color= 'blue'
  }else{
    resu.innerHTML += "IMPAR"
    resu.style.color= 'red'
  }
}