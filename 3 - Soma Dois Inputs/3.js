function soma(){
let n1 = document.body.querySelector("#input1").value;
n1 = parseInt(n1);
let n2 = document.body.querySelector("#input2").value;
n2 = parseInt(n2);
let resultado = n1 + n2;
let inputResultado = document.getElementById('resultado');
inputResultado.value = resultado;
}