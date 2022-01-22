var randomNumber1 = 1+Math.floor(Math.random()*6);
var imageName1='./images/dice'+randomNumber1+'.png';

var randomNumber2 = 1+Math.floor(Math.random()*6);
var imageName2='./images/dice'+randomNumber2+'.png';

document.querySelectorAll("img")[0].setAttribute("src",imageName1);
document.querySelectorAll("img")[1].setAttribute("src",imageName2);

if(randomNumber1===randomNumber2)
document.querySelector("h1").innerHTML="Draw game";
else{
    if(randomNumber1>randomNumber2)
    document.querySelector("h1").innerHTML="Player1 Wins";
    else
    document.querySelector("h1").innerHTML="Player2 Wins";
}

