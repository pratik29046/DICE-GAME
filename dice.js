var random1=Math.floor(Math.random() * 6) + 1;
var randomimg1= "dice"+random1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimg1);


var random2=Math.floor(Math.random() * 6) + 1;
var randomimg2= "dice"+random2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimg2);

var random3=Math.floor(Math.random() * 6) + 1;
var randomimg3= "dice"+random3+".png";
var image3=document.querySelectorAll("img")[2];
image3.setAttribute("src",randomimg3);



if(random1>random2 && random1>random3){
    document.querySelector("h2").innerHTML="Player-1 Is Winner "
}
else if(random2>random3 && random2>random1){
    document.querySelector("h2").innerHTML="Player-2 Is Winner "

}else if(random3>random2 && random3>random1){
    document.querySelector("h2").innerHTML="Player-3 Is Winner "
}
else if(random1==random2 || random2==random3 || random1==random3){
    document.querySelector("h2").innerHTML="Game Is Draw "

}