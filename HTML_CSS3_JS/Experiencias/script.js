function somar(){
 var n1 = document.getElementById('txt1')
 var n2 = document.querySelector('input#txt2')
 var resu = document.querySelector('div#resu')
 var n1 = Number(n1.value)
 var n2 = Number(n2.value)
 var soma = (n1 + n2) / 2
 resu.innerHTML = `A soma entre ${n1} mas ${n2} e igual há ${soma}<br/>`
 if(soma < 8){
   resu.innerHTML += 'REPROVADO'
   resu.style.color= 'red'
 }else if(soma < 10){
   resu.innerHTML += 'REPESCADO'
   resu.style.color= 'blue'
 }else{
  resu.innerHTML += 'APROVADO'
  resu.style.color= '#ff7200'
 }
}