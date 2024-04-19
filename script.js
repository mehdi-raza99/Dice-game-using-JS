var random_no1=Math.floor(Math.random() * 6 ) +1;
var random_no2=Math.floor(Math.random() * 6 ) +1;
var image1=document.querySelector(".img1");
var image2=document.querySelector(".img2");

if(random_no1 > random_no2)
{
    document.querySelector("h1").innerHTML="Player1 Wins"
}
else if(random_no1 < random_no2)
{
    document.querySelector("h1").innerHTML="Player2 Wins"
}
else
{
    document.querySelector("h1").innerHTML="It's a Tie"
}

if(random_no1 == 1 )
{
    image1.setAttribute("src" , "images/dice1.png");
}
else if(random_no1 == 2)
{
    image1.setAttribute("src" , "images/dice2.png");
}
else if(random_no1 == 3 )
{
    image1.setAttribute("src" , "images/dice3.png");
}
else if(random_no1 == 4)
{
    image1.setAttribute("src" , "images/dice4.png");
}
else if(random_no1 == 5 )
{
    image1.setAttribute("src" , "images/dice5.png");
}
else
{
    image1.setAttribute("src" , "images/dice6.png");
}

if(random_no2 == 1 )
{
    image2.setAttribute("src" , "images/dice1.png");
}
else if(random_no2 == 2)
{
    image2.setAttribute("src" , "images/dice2.png");
}
else if(random_no2 == 3 )
{
    image2.setAttribute("src" , "images/dice3.png");
}
else if(random_no2 == 4)
{
    image2.setAttribute("src" , "images/dice4.png");
}
else if(random_no2 == 5 )
{
    image2.setAttribute("src" , "images/dice5.png");
}
else
{
    image2.setAttribute("src" , "images/dice6.png");
}