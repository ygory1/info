var dat = new Date();
document.getElementById("an").innerHTML = dat.getFullYear(); 


function show() {
    document.getElementById("side-menu").classList.toggle("show");
}

function data() {
    var date = new Date();
    var an, luna, zi;
    var text;
  
    zi = date.getDate();
    luna = date.getMonth() + 1;
    an = date.getFullYear();
  
    text = zi + "/" + luna + "/" + an;
  
    document.getElementById("text-data").innerHTML = text;
  }
  