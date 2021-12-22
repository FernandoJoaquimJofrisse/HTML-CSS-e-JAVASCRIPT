function tabuada(){
  var n1 = document.querySelector('input#txt1')
  let n2 = document.getElementById('seltab')
  if(n1.value.length == 0){
   alert('Digite um numero Valído: ')
  }else{
   let n = Number(n1.value)
   let c = 1
   n2.innerHTML = ''
   while(c <= 40){
    let item = document.createElement('option')
    item.text = `${n} × ${c} = ${n*c}`
    n2.appendChild(item)
    c++
   }
  }
}