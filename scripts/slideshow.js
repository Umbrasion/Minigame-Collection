var currentSlide = 1;

function generatePresentation() {
	currentSlide = 1;
	
	rValue = 
	
	updateSlides();
}

function scrollSlideshow(isForward) {
	if (isForward && currentSlide != 8) {
		currentSlide++;
	} else if (!isForward && currentSlide != 1) {
		currentSlide--;
	}
	updateSlides();
}

function updateSlides() {
	for (i = 1; i <= 8; i++) {
		document.getElementById("presentation-slide" + i).style.display = "none";
	}
	document.getElementById("presentation-slide" + currentSlide).style.display = "block";
	
	switch (currentSlide) {
		case 1:
			document.getElementById("slidebutton-left").style.filter = "brightness(0.6)";
			document.getElementById("slidebutton-right").style.filter = "";
			break;
		case 2:
			document.getElementById("slidebutton-left").style.filter = "";
			break;
		case 3:
			
			break;
		case 4:
			
			break;
		case 5:
			
			break;
		case 6:
			
			break;
		case 7:
			document.getElementById("slidebutton-right").style.filter = "";
			break;
		case 8:
			document.getElementById("slidebutton-right").style.filter = "brightness(0.6)";
			break;
	}
}