function verificar(){
 var n1 = document.getElementById('txt')
 var res = document.querySelector('div#resu')
 var vel = Number(n1.value)
 res.innerHTML = (`A sua velocidade atual é ${vel}km/h`)
 if(vel > 60){
  res.innerHTML += (`<p>MULTADO</p>`)
 }else{
   res.innerHTML += (`<p>PARABENS dirija com seguraça e boa viagem</p>`)
 }

}