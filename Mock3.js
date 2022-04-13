
//this code is for my modal
var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
  modal2.style.display = "none";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//this code is for my 2nd modal
var modal2 = document.getElementById("myMode");


var btn2 = document.getElementById("myBtn2");

var span2 = document.getElementsByClassName("exit")[0];


btn2.onclick = function() {
  modal.style.display = "none"
  modal2.style.display = "block";
}



span2.onclick = function() {
  modal2.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}




