function multiplyBy() {
 
 num1 = document.getElementById("firstNumber").value;
 num2 = document.getElementById("secondNumber").value;
 document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {

  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML = num1 / num2;
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World",10,50);

function funcNavigate() {

 window.navigate("apply.html"); 

}