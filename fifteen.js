//alert("this is a test");

/* window.addEventListener("load", viewLoaded);

function viewLoaded() 
{
	//adds listener to shuffle button
	document.getElementById("shufflebutton").addEventListener("click", shuffleListener);
}//viewLoaded

function shuffleListener()
{
	//shuffle pictures here
	console.log("shuffle button clicked");

	//use a for loop and swap the values and background pictures of each image
	for(var i = 1; i <= 15; i++)
	{
		//swap with a random variable in the loop
		var randNum = Math.floor((Math.random() * 15) + 1); //returns a random number between 1 - 15
		if (i == 1) 
			console.log(randNum); //FOR CHECKING PURPOSES

		
			//all that is left to do is switch the background pictures and numbers between the tiles
		
	}//for
}//shuffleListener


function moveTile()
{
	console.log("moveTile");
}//moveTile

*/

"use strict";

var one = document.getElementsByTagName("div");
var empty;
var neighbors = [];

var positions = [
	["0px", "0px","Filled"],["0px", "100px","Filled"], ["0px", "200px","Filled"], ["0px", "300px","Filled"],
	["100px", "0px","Filled"],["100px", "100px","Filled"], ["100px", "200px","Filled"], ["100px", "300px","Filled"],
	["200px", "0px","Filled"],["200px", "100px","Filled"], ["200px", "200px","Filled"], ["200px", "300px","Filled"],
	["300px", "0px","Filled"],["300px", "100px","Filled"], ["300px", "200px","Filled"], ["300px", "300px","Empty"],
	
	];

window.onload = function () {
	start();
	
}

function start() {
	
	//document.body.style.backgroundColor = "green"; //document should not be green
	
	setImage();
		

		for(var x = 0; x < 15; x++)
		{
			one[x+1].style.top = positions[x][0];
			one[x+1].style.left = positions[x][1];		
			
		}
	
	findEmpty();
	findNeighbors();
	
	document.getElementById("shufflebutton").addEventListener("click", shuffle);

}

function setImage() {
		
	//one[0] is the puzzleArea div

	one[1].id = "one";
	
	one[2].id = "two";
	
	one[3].id = "three";
	
	one[4].id = "four";
	
	one[5].id = "five";
	
	one[6].id = "six";
	
	one[7].id = "seven";
	
	one[8].id = "eight";
	
	one[9].id = "nine";
	
	one[10].id = "ten";
	
	one[11].id = "eleven";
	
	one[12].id = "twelve";
	
	one[13].id = "thirteen";
	
	one[14].id = "fourteen";
	
	one[15].id = "fifteen";
			
}//setImage

function findEmpty() {
	for(var x = 0; x < positions.length; x++)
	{
		if(positions[x][2] == "Empty")
		{
			empty = [positions[x][0], positions[x][1]];
		}
	}
	
	/* alert(empty[0] + " " + empty[1]) */
}

function findNeighbors() {
	for(var x = 1; x <= 15; x++)
	{
		if(Math.abs(parseInt(one[x].style.top) - parseInt(empty[0])) <= 100 && Math.abs(parseInt(one[x].style.left) - parseInt(empty[1])) <= 100)
		{
			if(parseInt(one[x].style.top) == parseInt(empty[0]) || parseInt(one[x].style.left) == parseInt(empty[1]))
			{
			neighbors.push(one[x]);
			/* alert(one[x].style.top + " " + one[x].style.left); */
			}
		}
	}
	/* alert(neighbors.length) */;
	
	switch(neighbors.length)
	{
		case 1:
			neighbors[0].className = "highlight";
			break;
		case 2:
			neighbors[0].className = "highlight";
			neighbors[1].className = "highlight";
			break;
		case 3:
			neighbors[0].className = "highlight";
			neighbors[1].className = "highlight";
			neighbors[2].className = "highlight";
			break;
		case 4:
			neighbors[0].className = "highlight";
			neighbors[1].className = "highlight";
			neighbors[2].className = "highlight";
			neighbors[3].className = "highlight";
			break;
			
	}


}//findNeighbors

function move() {
	switch(neighbors.length)
	{
		case 1:
			neighbors[0].onclick = function() {swap(neighbors[0]);};
			break;
		case 2:
			neighbors[0].onclick = function() {swap(neighbors[0]);};
			neighbors[1].onclick = function() {swap(neighbors[1]);};
			break;
		case 3:
			neighbors[0].onclick = function() {swap(neighbors[0]);};
			neighbors[1].onclick = function() {swap(neighbors[1]);};
			neighbors[2].onclick = function() {swap(neighbors[2]);};
			break;
		case 4:
			neighbors[0].onclick = function() {swap(neighbors[0]);};
			neighbors[1].onclick = function() {swap(neighbors[1]);};
			neighbors[2].onclick = function() {swap(neighbors[2]);};
			neighbors[3].onclick = function() {swap(neighbors[3]);};
			break;
			
	}
	
}//move

function swap(temp) {
	
	for(var x = 0; x < positions.length; x++)
	{
		if(positions[x][0] == temp.style.top && positions[x][1] == temp.style.left)
		{
			positions[x][2] = "Empty";
		}
		
		if(positions[x][0] == empty[0] && positions[x][1] == empty[1])
		{
			positions[x][2] = "Filled";
		}
		
	}//for
	
	var oldEmptyTop = empty[0];
	var oldEmptyLeft = empty[1];
	
	empty[0] = temp.style.top;
	empty[1] = temp.style.left;
	
	temp.style.top = oldEmptyTop;
	temp.style.left = oldEmptyLeft;
	
	switch(neighbors.length)
	{
		case 1:
			neighbors[0].onclick = null;
			break;
		case 2:
			neighbors[0].onclick = null;
			neighbors[1].onclick = null;
			break;
		case 3:
			neighbors[0].onclick = null;
			neighbors[1].onclick = null;
			neighbors[2].onclick = null;
			break;
		case 4:
			neighbors[0].onclick = null;
			neighbors[1].onclick = null;
			neighbors[2].onclick = null;
			neighbors[3].onclick = null;
			break;
			
	}//switch
	
	switch(neighbors.length)
	{
		case 1:
			neighbors[0].className = "";
			break;
		case 2:
			neighbors[0].className = "";
			neighbors[1].className = "";
			break;
		case 3:
			neighbors[0].className = "";
			neighbors[1].className = "";
			neighbors[2].className = "";
			break;
		case 4:
			neighbors[0].className = "";
			neighbors[1].className = "";
			neighbors[2].className = "";
			neighbors[3].className = "";
			break;
			
	}//switch
	
	neighbors = [];
	
	findEmpty();
	findNeighbors();
	move();
}//swap
function shuffle() {
	
	for(var x = 0; x < 100; x++)
	{
		var random = Math.floor(Math.random() * (neighbors.length));
		swap(neighbors[random]);
	}
}

function reset() {
	positions = [
	["0px", "0px","Empty"],["0px", "100px","Empty"], ["0px", "200px","Empty"], ["0px", "300px","Empty"],
	["100px", "0px","Empty"],["100px", "100px","Empty"], ["100px", "200px","Empty"], ["100px", "300px","Empty"],
	["200px", "0px","Empty"],["200px", "100px","Empty"], ["200px", "200px","Empty"], ["200px", "300px","Empty"],
	["300px", "0px","Empty"],["300px", "100px","Empty"], ["300px", "200px","Empty"], ["300px", "300px","Empty"],
	
	];
}
