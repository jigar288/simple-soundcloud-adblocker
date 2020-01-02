setInterval(function(){

var source = document.getElementsByTagName('html')[0].innerHTML;
var found = source.search("Advertisement");

if(found != -1){
  window.location.reload(true);
}


 }, 1000);

function alertFunction() {

setTimeout(function(){
    var btn = document.querySelector(".playControls__play");
    btn.click();
}, 3000);


}

window.onload = alertFunction;
