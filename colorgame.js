var numberofsq=6;
var colors = generaterandomColors(numberofsq);
var h1=document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
	//add click listeners to squares
easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numberofsq=3;
	colors = generaterandomColors(numberofsq);

	for(var i = 0; i < squares.length ; i++ )
{
	//add initial colors to squares
	if(colors[i])
	{
	squares[i].style.background=colors[i];
	}
	else
	{
		squares[i].style.display="none";
	}
}

	pickedColor = pickrandom();
    colorDisplay.textContent = pickedColor;
    h1.style.background="#232323";
})

hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numberofsq=6;
	colors = generaterandomColors(numberofsq);

	for(var i = 0; i < squares.length ; i++ )
{
	//add initial colors to squares
	
	squares[i].style.background=colors[i];
	squares[i].style.display="block";
}

	pickedColor = pickrandom()
    colorDisplay.textContent = pickedColor;
    h1.style.background="#232323";
})


resetButton.addEventListener("click",function(){
	resetButton.textContent="New Colour";
		colors = generaterandomColors(numberofsq);
		for(var i = 0; i < squares.length ; i++ )
{
	//add initial colors to squares
	squares[i].style.background=colors[i];
}
	messageDisplay.textContent="";
	pickedColor = pickrandom();
    colorDisplay.textContent = pickedColor;
	h1.style.background="#232323";
}) 

for(var i = 0; i < squares.length ; i++ )
{
	//add initial colors to squares
	squares[i].style.background=colors[i];

}

var pickedColor = pickrandom();
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay=document.getElementById("message");


for(var i = 0; i < squares.length ; i++ )
{
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.background;
		console.log(clickedColor,pickedColor);
			if(clickedColor === pickedColor)
			{
				resetButton.textContent="Play Again";
				messageDisplay.textContent="Correct";
				changeColor(clickedColor);
				h1.style.background=clickedColor;
				messageDisplay.textContent="";
			}
			else
			{
				this.style.background="#232323";
				messageDisplay.textContent="Try Again";
			}
	})
}
function changeColor(color)
{
	for( var i = 0; i < squares.length; i++ )
	{
		squares[i].style.background=color;
	}
}
function pickrandom()
{
	var random=Math.floor(Math.random()*colors.length);
	return squares[random].style.background;
}
function generaterandomColors(num)
{	
	var arr=[]

	for(var i=0;i<num;i++)
	{
		//get random color and push int o the array
			arr.push(randomcolor())
	}

	return arr;
}
function randomcolor()
{
	
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	console.log(r);
	console.log(g);
	console.log(b);
	 return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
