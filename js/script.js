



var image=document.querySelector("img");

setInterval(function(){ 
    
    var randm=Math.floor(Math.random()*9)+1;

    image.setAttribute("src","images/"+randm+".jpg")

}, 1000);


//حل اخر

/*
function random(){

    var randm=Math.floor(Math.random()*9)+1;

    image.setAttribute("src","images/"+randm+".jpg")


     setTimeout(random, 2000);
}
random();*/