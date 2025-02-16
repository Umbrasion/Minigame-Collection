var difficulty = "normal";

function changeDiff(diffSetTo) {
	difficulty = diffSetTo;
	switch (difficulty) {
		case "easy":
			document.getElementById("characterName1").style.display = "block";
			document.getElementById("daImage1").style.display = "block";
			
			document.getElementById("options-button-easydiff").style.color = "lightgreen";
			document.getElementById("options-button-normdiff").style.color = "gray";
			document.getElementById("options-button-harddiff").style.color = "gray";
			break;
		case "normal":
			document.getElementById("characterName1").style.display = "none";
			document.getElementById("daImage1").style.display = "block";
			
			document.getElementById("options-button-easydiff").style.color = "gray";
			document.getElementById("options-button-normdiff").style.color = "yellow";
			document.getElementById("options-button-harddiff").style.color = "gray";
			break;
		case "hard":
			document.getElementById("characterName1").style.display = "block";
			document.getElementById("daImage1").style.display = "none";
			
			document.getElementById("options-button-easydiff").style.color = "gray";
			document.getElementById("options-button-normdiff").style.color = "gray";
			document.getElementById("options-button-harddiff").style.color = "tomato";
			break;
	}
}

function gtsGenerate() {
	
}