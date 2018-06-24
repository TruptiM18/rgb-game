
	var numSquares = 6;
	var colors = [];
	var pickedColor;
	var allSquares = document.querySelectorAll(".square");
	var colorDisplay = document.getElementById("colorDisplay");
	var message = document.getElementById("message");
	var h1 = document.querySelector("h1");
	var reset = document.getElementById("reset");
	var modes = document.querySelectorAll(".mode");
	

	init();

	function init()
	{
		//interate through the mode buttons
		setupModeButtons();	

	 	//add eventListeners
		setupSquares();

		//reset display
		resetFunction();
	}

	function setupModeButtons(){
		//interate through the mode buttons
		for (var i = 0;i< modes.length;i++){
			modes[i].addEventListener("click",function(){
			modes[0].classList.remove("selected");
			modes[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			resetFunction();
			});
		}	
		
	}

	function setupSquares(){
	 	//add eventListeners to Squares
		for (var i =0 ;i < allSquares.length;i++)
		{
			allSquares[i].addEventListener("click",function(){
			if (this.style.backgroundColor === pickedColor)
			{
				message.textContent = "Correct!";
				reset.textContent= "Play Again!"
				changeColor(pickedColor);
				h1.style.backgroundColor = pickedColor;
			}
			else{
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again";
			}
			});
		}	
	}

	function changeColor(color)
	{
		for (var i =0 ;i < allSquares.length;i++)
		{
			allSquares[i].style.backgroundColor = color;
		}
	}

	function pickColor()
	{
		var random = Math.floor(Math.random() *  colors.length);
		return colors[random];
	}

	function generateRandomColors(numColors)
	{
		var arr = [];

		for (var i = 0; i< numColors;i++)
		{
			arr.push(randomColor());
		}
		return arr;
	}

	function randomColor()
	{
		var r = Math.floor(Math.random() *  256);
		var g = Math.floor(Math.random() *  256);
		var b = Math.floor(Math.random() *  256);

		return "rgb("+r+", "+g+", "+b+")";
	}

	reset.addEventListener("click", function(){

		resetFunction();
		
	});

	
function resetFunction(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	reset.textContent= "New Colors";
	message.textContent = "";
	for (var i =0 ;i < allSquares.length;i++)
	{
		if (colors[i])
		{
			allSquares[i].style.display = "block";
			allSquares[i].style.backgroundColor = colors[i];
		}
		else
			allSquares[i].style.display = "none";

	}	
	h1.style.backgroundColor = "steelblue";
}



