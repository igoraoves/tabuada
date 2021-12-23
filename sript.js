function calcular(){
  var num = document.getElementById("num")
  var resp = document.getElementById("seltab")

  if (num.value.length == 0) {
    window.alert("Digite um número!")
  }else{
    var n = Number(num.value)
    var c = 0
    resp.innerHTML = " "
    while(c < 10){
    c++
    var m = n*c
    var item = document.createElement("option")
    item.text = `${n} X ${c} = ${m}`
    resp.appendChild(item)
    }
  }
}

/*
while(c < 10){
  c++
  var m = n*c
  resp.innerHTML += `${m} <br>`
  }
}
*/
