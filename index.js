
var primeiro = document.querySelector(".primeiro");
var segundo = document.querySelector(".segundo");
var terceiro = document.querySelector(".terceiro");

function go(){
  
   var quantidade = document.getElementById('quantidade').value;
   
    if(quantidade == 'a'){
        primeiro.textContent = "A1";
        segundo.textContent =  "A2";
        terceiro.textContent = "A3";
    }else if (quantidade == 'b'){
        primeiro.textContent = "B1";
        segundo.textContent =  "B2";
        terceiro.textContent = "B3";
    }else{
        alert("Digite somente A ou B !!")
    }
}