filterList(true);
updateSeriesList();

document.getElementById("character-count").innerHTML = `CURRENT CHARACTER TOTAL: ${characterList.length}`;

var smashAmount = 0, passAmount = 0, skipAmount = 0;

var cuddleModeToggle = false;

var localOptions = {
	canRoll: true,
	rollAnim: true,
	easterEggs: false,
}

function generate(value, increment, incrementValue, type = "none") {
	if (localOptions.canRoll) {
		if (increment) {
			randNum = parseInt(document.getElementById("identer-" + value).value);
			if (isNaN(randNum)) {
				randNum = -1;
			}
			randNum += incrementValue;
			if (randNum < 0) {
				randNum = 0;
			} else if (randNum >= characterList.length) {
				randNum = characterList.length - 1;
			}
			var charInfo = generateCharacter(true);
			document.getElementById("identer-" + value).value = randNum;
			document.getElementById("character-name-" + value).innerHTML = charInfo[0];
			document.getElementById("character-series-" + value).innerHTML = charInfo[1];
			document.getElementById("character-image-" + value).src = `../images/characters/${charInfo[2]}`;
			
			if (document.getElementById("theme-select").value === "pride") {
				document.getElementById("pridestyle" + value).innerHTML = "";
				prideCheck(characterList[randNum], value);
			}
		} else if (localOptions.rollAnim) {
			var rollAnimInt, animCycle = 0, cycleDelay = 50;
			localOptions.canRoll = false;
			document.getElementById(`character-image-1`).classList.remove("image-flash");
			document.getElementById(`character-image-2`).classList.remove("image-flash");
			document.getElementById(`character-image-3`).classList.remove("image-flash");
			checkSlot();
			function cycleCharacter() {
				checkSlot();
				animCycle++;
				cycleDelay += 25;
				if (animCycle === 11) {
					clearInterval(rollAnimInt);
					localOptions.canRoll = true;
					var resultSound = new Audio("../sfx/Spin_result.ogg");
					switch (options.theme) {
						case "halloween":
							resultSound.src = "../sfx/Stinger.ogg";
							resultSound.volume = 0.2;
							break;
						default:
							resultSound.volume = 0.1;
					}
					resultSound.play();
					if (value === 0) {
						document.getElementById(`character-image-1`).classList.add("image-flash");
						document.getElementById(`character-image-2`).classList.add("image-flash");
						document.getElementById(`character-image-3`).classList.add("image-flash");
					} else {
						document.getElementById(`character-image-${value}`).classList.add("image-flash");
					}
				} else {
					setTimeout(cycleCharacter, cycleDelay);
				}
			}
			setTimeout(cycleCharacter, cycleDelay);
		} else {
			checkSlot();
		}
		
		if (type != "none") {
			if (characterList.length === 0) {
				document.getElementById("upperSpace").innerHTML = "";
				document.getElementById("chrSpace").style.textAlign = "center";
				document.getElementById("chrSpace").style.display = "block";
				document.getElementById("chrSpace").innerHTML = `
					<p>You really went through every character? Congratulations, that probably took a while. Nutjob</p>
					<p>FINAL SCORES:</p>
					<p id="finalScores"></p>
				`;
				setTimeout(function() {
					document.getElementById("finalScores").innerHTML = "<span style='color: lightgreen'>SMASH: " + smashAmount + "</span> | <span style='color: red'>PASS: " + passAmount + "</span> | <span style='color: lightgray'>SKIP: " + skipAmount + "</span>";
				}, 1);
			} else {
				switch (type) {
					case "smash":
						smashAmount++;
						break;
					case "pass":
						passAmount++;
						break;
					case "skip":
						skipAmount++;
						break;
					case "start":
						document.getElementById("smashNum").innerHTML = "SMASH: 0";
						document.getElementById("passNum").innerHTML = "PASS: 0";
						document.getElementById("skipNum").innerHTML = "SKIP: 0";
						document.getElementById("stButton").style.display = "none";
						document.getElementById("sopButtons").style.display = "block";
						break;
				}
				if (cuddleModeToggle) {
					document.getElementById("smashNum").innerHTML = "CUDDLE: " + smashAmount;
				} else {
					document.getElementById("smashNum").innerHTML = "SMASH: " + smashAmount;
				}
				document.getElementById("passNum").innerHTML = "PASS: " + passAmount;
				document.getElementById("skipNum").innerHTML = "SKIP: " + skipAmount;
			}
		}

		function checkSlot() {
			if (value === 0) {
				rerollByName(1);
				rerollByName(2);
				rerollByName(3);
			} else {
				rerollByName(value);
			}
		}
		
		function rerollByName(slotNum) {
			var charInfo = generateCharacter();
			
			document.getElementById("identer-" + slotNum).value = randNum;
			document.getElementById("character-name-" + slotNum).innerHTML = charInfo[0];
			document.getElementById("character-series-" + slotNum).innerHTML = charInfo[1];
			document.getElementById("character-image-" + slotNum).src = `../images/characters/${charInfo[2]}`;
			
			if (document.getElementById("theme-select").slotNum === "pride") {
				document.getElementById("pridestyle" + slotNum).innerHTML = "";
				prideCheck(characterList[randNum], slotNum);
			}
			
			// Check for easter eggs
			
			if (type === "none" && localOptions.easterEggs && localOptions.canRoll) {
				easterEgg(charInfo[0]);
			}
		}
		
		if (type != "none") {
			characterList.splice(randNum, 1);
			console.log("Current total characters: " + characterList.length);
		}
	}
}

function changeLocalOptions(optionType) {
	switch (optionType) {
		case "rollToggle":
			localOptions.canRoll = !localOptions.canRoll;
			break;
		case "easterEgg":
			localOptions.easterEggs = !localOptions.easterEggs;
			break;
	}
}