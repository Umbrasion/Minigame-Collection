var randNum = -1, characterInfo, disabledSeries = [], seriesList = [];

var smToggles = {
	"Ace_Attorney": false,
	"Danganronpa": false,
	"Deltarune": false,
	"Everhood": false,
	"Hollow_Knight": false,
	"Inscryption": false,
	"MiSide": false,
	"OneShot": false,
	"Outer_Wilds": false,
	"Steven_Universe": false,
};

document.getElementById("character-count").innerHTML = `CURRENT CHARACTER TOTAL: ${characterList.length}`;

function generateCharacter(overwriteReroll = false) {
	if (!overwriteReroll) {
		reroll: while (true) {
			randNum = Math.floor(Math.random() * (characterList.length));
			characterInfo = writeName(characterList[randNum]);

			if (!smToggles[characterInfo[1]] && disabledSeries.length === 0) {
				break reroll;
			}
			
			// Series Toggle reroll
			if (disabledSeries.length !== 0) {
				if (disabledSeries.includes(characterInfo[1].replace(/( )|(:)|(&)|(')/g, ""))) {
					console.log("Disabled series rolled: " + characterInfo[1] + " (" + characterInfo[0] + ")");
					continue reroll;
				} else {
					break reroll;
				}
			}
			
			// Spoiler Mode reroll
			if (smToggles[characterInfo[1]]) {
				switch (characterInfo[0]) {
					// Ace Attorney
					case "The Phantom": case "Zak Gramarye":
						console.log("SM - Pick rerolled: Ace Attorney (" + characterInfo[0] + ")");
						continue reroll;
					// Danganronpa
					case "Izuru Kamukura": case "Mukuro Ikusaba": case "Ultimate Imposter":
						console.log("SM - Pick rerolled: Danganronpa (" + characterInfo[0] + ")");
						continue reroll;
					// Deltarune
					case "Carol Holiday": case "Cat Mike": case "Cowboy Mike": case "FRIEND": case "The Roaring Knight": case "Small Mike": case "Titan":
						console.log("SM - Pick rerolled: Deltarune (" + characterInfo[0] + ")");
						continue reroll;
					// Everhood
					case "Cat God": case "Pink":
						console.log("SM - Pick rerolled: Everhood (" + characterInfo[0] + ")");
						continue reroll;
					// Hollow Knight
					case "Herrah the Beast": case "The Hollow Knight": case "Lurien the Watcher": case "Monomon the Teacher": case "Radiance": case "Shade Lord":
						console.log("SM - Pick rerolled: Hollow Knight (" + characterInfo[0] + ")");
						continue reroll;
					// Inscryption
					case "The Archivist": case "The Bone Lord": case "G0lly": case "Grimora": case "The Lonely Wizard": case "Magnificus": case "P03": case "The Photographer":
						console.log("SM - Pick rerolled: Inscryption (" + characterInfo[0] + ")");
						continue reroll;
					// MiSide
					case "Core Mita": case "Creepy Mita": case "Ghostly Mita":
						console.log("SM - Pick rerolled: MiSide (" + characterInfo[0] + ")");
						continue reroll;
					// OneShot
					case "Prototype":
						console.log("SM - Pick rerolled: OneShot (" + characterInfo[0] + ")");
						continue reroll;
					// Outer Wilds
					case "The Prisoner": case "Solanum":
						console.log("SM - Pick rerolled: Outer Wilds (" + characterInfo[0] + ")");
						continue reroll;
				}
			
				// Spoiler Mode for name/image changes
				
				switch (characterInfo[0]) {
					case "Matt Engarde":
						console.log("SM - Pick modified: " + characterInfo[0]);
						characterInfo[2] = "Ace_Attorney/Matt_Engarde_Normal.webp";
						break;
					case "Mimi Miney":
						console.log("SM - Pick modified: " + characterInfo[0]);
						characterInfo[0] = "Ini Miney";
						break;
					case "Misty Fey":
						console.log("SM - Pick modified: " + characterInfo[0]);
						characterInfo[0] = "Elise Deauxnim";
						break;
					case "Yanni Yogi":
						console.log("SM - Pick modified: " + characterInfo[0]);
						characterInfo[0] = "Caretaker";
						break;
					case "Junko Enoshima":
						console.log("SM - Pick modified: " + characterInfo[0]);
						characterInfo[2] = "Danganronpa/Junko_Enoshima_Disguise.webp";
						break;
					case "Pink Diamond":
						console.log("SM - Pick modified: " + characterInfo[0]);
						characterInfo[0] = "Rose Quartz";
						characterInfo[2] = "Steven_Universe/Rose_Quartz.webp";
						break;
				}
				break reroll;
			}
		}
	} else {
		characterInfo = writeName(characterList[randNum]);
	}
	
	// De-generalization
	if (characterInfo[1] === "Ludosity") {
		switch (characterInfo[0]) {
			case "Asha":
				seriesName = "Card City Nights";
				break;
			case "Orka":
				seriesName = "Healthy Weapon";
				break;
			case "Cruiser Tetron":
				seriesName = "Hero";
				break;
			case "Ittle Dew": case "Jenny Fox": case "Masked Ruby": case "Ultra Fishbunjin 3000":
				seriesName = "Ittle Dew";
				break;
			case "Frallan": case "Princess Remedy":
				seriesName = "Princess Remedy";
				break;
		}
	}

    return characterInfo;
}

function writeName(arrayResult) {
	var charName = arrayResult.split("/")[1].replace(/_/g, " ").replace(/''/g, "\"").replace(/(.webp)|(.png)|(.jpg)|(.jpeg)|(.gif)/g, "").trim();
	var charSeries = arrayResult.split("/")[0].replace(/_/g, " ").replace(/''/g, "\"").trim();
	
	// Corrections (Characters)
	
	if (charName === "Aikuro Mikisugi") {
		charName = "Aikur&omacr; Mikisugi"
		// Aikurō Mikisugi
	}
	if (charName === "Angel" && charSeries === "The King of Fighters") {
		charName = "&Aacute;ngel"
		// Ángel
	}
	if (charName === "Bitores Mendez") {
		charName = "Bitores M&eacute;ndez"
		// Bitores Méndez
	}
	if (charName === "Creme Brulee Cookie") {
		charName = "Cr&egrave;me Br&ucirc;l&eacute;e Cookie"
		// Crème Brûlée Cookie
	}
	if (charName === "Desiree DeLite") {
		charName = "Desir&eacute;e DeLite"
		// Desirée DeLite
	}
	if (charName === "Edmond Dantes") {
		charName = "Edmond Dant&egrave;s"
		// Edmond Dantès
	}
	if (charName === "Elodie Rakoto") {
		charName = "&Eacute;lodie Rakoto"
		// Élodie Rakoto
	}
	if (charName === "Hoka Inumuta") {
		charName = "H&omacr;ka Inumuta"
		// Hōka Inumuta
	}
	if (charName === "Ira Gamagori") {
		charName = "Ira Gamag&omacr;ri"
		// Ira Gamagōri
	}
	if (charName === "Jagoda Jeczyduch") {
		charName = "Jagoda J&eogon;czyduch"
		// Jagoda Jęczyduch
	}
	if (charName === "Jesus \"Soos\" Ramirez") {
		charName = "Jes&uacute;s \"Soos\" Ramirez"
		// Jesús "Soos" Ramirez
	}
	if (charName === "Judy Alvarez") {
		charName = "Judy &Aacute;lvarez"
		// Judy Álvarez
	}
	if (charName === "K K") {
		charName = "K_K"
	}
	if (charName === "Kyoko") {
		charName = "Ky&omacr;ko"
		// Kyōko
	}
	if (charName === "Margaret \"Mad Maggie\" Kohere") {
		charName = "Margaret \"Mad Maggie\" K&omacr;here"
		// Margaret "Mad Maggie" Kōhere
	}
	if (charName === "Morag Ladair") {
		charName = "M&ograve;rag Ladair"
		// Mòrag Ladair
	}
	if (charName === "Starwalker") {
		charName = "the original	<span style='color:yellow; padding-left: 30px'>Starwalker</span>"
	}
	if (charName === "Ragyo Kiryuin") {
		charName = "Ragy&omacr; Kiry&umacr;in"
		// Ragyō Kiryūin
	}
	if (charName === "Ramon") {
		charName = "Ram&oacute;n"
		// Ramón
	}
	if (charName === "Ramon Salazar") {
		charName = "Ram&oacute;n Salazar"
		// Ramón Salazar
	}
	if (charName === "Ren Hoek") {
		charName = "Ren H&ouml;ek"
		// Ren Höek
	}
	if (charName === "Rude1") {
		charName = "Rude#1"
	}
	if (charName === "Satsuki Kiryuin") {
		charName = "Satsuki Kiry&umacr;in"
		// Satsuki Kiryūin
	}
	if (charName === "Yuuki Terumi") {
		charName = "Y&umacr;ki Terumi"
		// Yūki Terumi
	}
	if (charName === "GIFfany") {
		charName = ".GIFfany"
	}
	if (charName === "Lambda-No.11-") {
		charName = "&#7463;-No.11-"
		// ᴧ-No.11-
	}
	if (charName === "Mu-No.12-") {
		charName = "&mu;-No.12-"
		// μ-No.12-
	}
	if (charName === "Nu-No.13-") {
		charName = "&nu;-No.13-"
		// ν-No.13-
	}
	if (charName === "Enma") {
		charName = "&Zcy;&icy;&mcy;&acy;"
		// Зима
	}
	
	// Corrections (Series)
	
	if (charSeries === "AI The Somnium Files") {
		charSeries = "AI: The Somnium Files"
	}
	if (charSeries === "BNA Brand New Animal") {
		charSeries = "BNA: Brand New Animal"
	}
	if (charSeries === "Honkai Star Rail") {
		charSeries = "Honkai: Star Rail"
	}
	if (charSeries === "HUNTERxHUNTER") {
		charSeries = "HUNTER&times;HUNTER"
	}
	if (charSeries === "Love Curse Find Your Soulmate") {
		charSeries = "Love Curse: Find Your Soulmate"
	}
	if (charSeries === "Minecraft Story Mode") {
		charSeries = "Minecraft: Story Mode"
	}
	if (charSeries === "Monsters, Inc") {
		charSeries = "Monsters, Inc."
	}
	if (charSeries === "Pokemon") {
		charSeries = "Pok&eacute;mon"
	}
	if (charSeries === "ReZero") {
		charSeries = "Re:Zero"
	}
	if (charSeries === "Reverse1999") {
		charSeries = "Reverse:1999"
	}
	if (charSeries === "Xavier Renegade Angel") {
		charSeries = "Xavier: Renegade Angel"
	}
	
	var charFullInfo = [charName, charSeries, arrayResult];
	return charFullInfo;
}

function clearCharacters() {
	var characterSlots = Array.prototype.slice.call(document.getElementsByClassName("character-space"));
	var iteration = 1;
	characterSlots.forEach(element => {
		element.querySelector(".character-name").children[0].innerHTML = "Character " + iteration;
		element.querySelector(".character-series").innerHTML = "";
		element.querySelector(".character-image").src = "";
		iteration++;
	});
	var characterSlots = Array.prototype.slice.call(document.getElementsByClassName("debug-idfield"));
	characterSlots.forEach(element => {
		element.value = -1;
	});
}

Array.prototype.slice.call(document.getElementsByClassName("debug-idfield")).forEach(element => {
	element.addEventListener("keydown", function(e) {
		if (e.key === "Enter") {
			randNum = parseInt(element.value);
			basicWriteInfo(Number(e.target.id.slice(-1)), [0]);
		}
	});
});

// Spoiler Mode

function selectSpoilerMode(series, smmButton) {
	if (smmButton.parentElement.children[0].style.color === "tomato") {
		smmButton.parentElement.children[0].style.color = "lightgreen";
	} else {
		smmButton.parentElement.children[0].style.color = "tomato";
	}

	if (smmButton.parentElement.children[1].children[0].style.left === "31px") {
		smmButton.parentElement.children[1].children[0].style.left = "3px";
		smmButton.parentElement.children[1].classList.remove("seriesButtonSelect");
	} else {
		smmButton.parentElement.children[1].children[0].style.left = "31px";
		smmButton.parentElement.children[1].classList.add("seriesButtonSelect");
	}

	smToggles[series] = !smToggles[series];
}

function basicWriteInfo(slotID = 0, debugInfo = []) {
	// Function for basic use
	var character;
	if (debugInfo.length !== 0) {
		randNum += debugInfo[0];
		if (randNum < 0) {
			randNum = 0;
		} else if (randNum >= characterList.length) {
			randNum = characterList.length - 1;
		}
		document.getElementById(`identer-${slotID}`).value = randNum;
		character = generateCharacter(true);
	} else {
		character = generateCharacter();
	}
	if (slotID === 0) {
		for (i = 1; i <= document.getElementsByClassName("character-space").length; i++) {
			document.getElementById(`character-name-${i}`).innerHTML = character[0];
			document.getElementById(`character-series-${i}`).innerHTML = character[1];
			document.getElementById(`character-image-${i}`).src = `../images/characters/${character[2]}`;
		}
	} else {
		document.getElementById(`character-name-${slotID}`).innerHTML = character[0];
		document.getElementById(`character-series-${slotID}`).innerHTML = character[1];
		document.getElementById(`character-image-${slotID}`).src = `../images/characters/${character[2]}`;
	}
}

// Manage menus

document.getElementById("spoilermode-menubox").innerHTML = `
	<h1 style="text-align: center; margin-top: 0px; margin-bottom: 10px">Spoiler Mode Settings</h1>
	<div style="width: fit-content; margin: auto">
		<div class="smmSeries">
			<b id="spoilerAA" style='color: tomato'>Ace Attorney</b>
			<button id="seriesAceAttorney" class="seriesButton theme-element" onclick="selectSpoilerMode('Ace_Attorney', this)"><div></div></button>
		</div>
		<div class="smmSeries">
			<b id="spoilerDR" style='color: tomato'>Danganronpa</b>
			<button id="seriesDanganronpa" class="seriesButton theme-element" onclick="selectSpoilerMode('Danganronpa', this)"><div></div></button>
		</div>
		<div class="smmSeries">
			<b id="spoilerDLTRN" style='color: tomato'>Deltarune</b>
			<button id="seriesDeltarune" class="seriesButton theme-element" onclick="selectSpoilerMode('Deltarune', this)"><div></div></button>
		</div>
		<div class="smmSeries">
			<b id="spoilerEH" style='color: tomato'>Everhood</b>
			<button id="seriesEverhood" class="seriesButton theme-element" onclick="selectSpoilerMode('Everhood', this)"><div></div></button>
		</div>
		<div class="smmSeries">
			<b id="spoilerHK" style='color: tomato'>Hollow Knight</b>
			<button id="seriesHollowKnight" class="seriesButton theme-element" onclick="selectSpoilerMode('Hollow_Knight', this)"><div></div></button>
		</div>
		<div class="smmSeries">
			<b id="spoilerIS" style='color: tomato'>Inscryption</b>
			<button id="seriesInscryption" class="seriesButton theme-element" onclick="selectSpoilerMode('Inscryption', this)"><div></div></button>
		</div>
		<div class="smmSeries">
			<b id="spoilerMS" style='color: tomato'>MiSide</b>
			<button id="seriesMiSide" class="seriesButton theme-element" onclick="selectSpoilerMode('MiSide', this)"><div></div></button>
		</div>
		<div class="smmSeries">
			<b id="spoilerOS" style='color: tomato'>OneShot</b>
			<button id="seriesOneShot" class="seriesButton theme-element" onclick="selectSpoilerMode('OneShot', this)"><div></div></button>
		</div>
		<div class="smmSeries">
			<b id="spoilerOW" style='color: tomato'>Outer Wilds</b>
			<button id="seriesOuterWilds" class="seriesButton theme-element" onclick="selectSpoilerMode('Outer_Wilds', this)"><div></div></button>
		</div>
		<div class="smmSeries">
			<b id="spoilerSU" style='color: tomato'>Steven Universe</b>
			<button id="seriesStevenUniverse" class="seriesButton theme-element" onclick="selectSpoilerMode('Steven_Universe', this)"><div></div></button>
		</div>
	</div>
	<div style="text-align: center">
		<p style="font-size: 0.9em"><i>Click outside the box to return...</i></p>
	</div>
`;
function toggleGenMenu(menuID) {
	switch (menuID) {
		case -1:
			// Clear
			document.getElementById("seriestoggle-menu").style.display = "none";
			document.getElementById("seriestoggle-menubox").style.display = "none";
			document.getElementById("spoilermode-menu").style.display = "none";
			document.getElementById("spoilermode-menubox").style.display = "none";
			break;
		case 0:
			// Series toggle
			document.getElementById("seriestoggle-menu").style.display = "block";
			document.getElementById("seriestoggle-menubox").style.display = "block";
			break;
		case 1:
			// Spoiler Mode
			document.getElementById("spoilermode-menu").style.display = "block";
			document.getElementById("spoilermode-menubox").style.display = "block";
			break;
	}
}

function updateSeriesList() {
	var curSeries = "";
	for (i = 0; i < characterList.length; i++) {
		curSeries = writeName(characterList[i])[1];
		if (!seriesList.includes(curSeries)) {
			seriesList.push(curSeries);
		}
	}

	for (i = 0; i < seriesList.length; i++) {
		document.getElementById("seriesToggleOptions").innerHTML += `
			<button id="st-` + seriesList[i].replace(/( )|(:)|(&)|(')/g, "") + `" class="seriestoggler theme-element" onclick="toggleSeries('` + seriesList[i].replace(/( )|(:)|(&)|(')/g, "") + `')" ondblclick="showSeriesCharacters('` + seriesList[i].replace(/(')/g, "APOS") + `')">` + seriesList[i] + `</button>
		`;
	}
}

function toggleSeries(seriesName) {
	if (disabledSeries.includes(seriesName)) {
		var seriesIndex = disabledSeries.indexOf(seriesName);
		disabledSeries.splice(seriesIndex, 1);
		document.getElementById("st-" + seriesName.replace(/( )|(:)|(&)|(')/g, "")).classList.remove('seriestoggler-off');
	} else if (disabledSeries.length != seriesList.length - 1) {
		disabledSeries.push(seriesName);
		document.getElementById("st-" + seriesName.replace(/( )|(:)|(&)|(')/g, "")).classList.add('seriestoggler-off');
	}
}

function showSeriesCharacters(seriesName) {
	const seriesCharListTitle = document.getElementById("series-characters-title");
	const seriesCharList = document.getElementById("series-characters-list");
	
	if (seriesName.includes("APOS")) {
		seriesName = seriesName.replace(/APOS/g, "'");
	}
	
	seriesCharListTitle.innerHTML = "Characters in " + seriesName + ":";
	var listElements = "<ul style='padding-left: 30px; margin: 12px 0px'>";
	
	var characterCount = 0;
	characterList.forEach((item) => {
		if (item.includes(seriesName.replace(/(:)/g, "").replace(/( )/g, "_") + "/")) {
			listElements += "<li>" + writeName(item)[0] + "</li>";
			characterCount++;
		}
	});
	listElements += "</ul>";
	listElements += "<div style='font-size: 0.9em; margin: 8px 0px'><i>(Total: " + characterCount + ")</i></div>";
	seriesCharList.innerHTML = listElements;

	seriesCharDisplay();
}

function seriesCharDisplay() {
	if (document.getElementById("series-characters").style.display === "none") {
		document.getElementById("series-characters").style.display = "block";
	} else {
		document.getElementById("series-characters").style.display = "none";
	}
}

document.addEventListener("keydown", (event) => {
	if (event.key === "Backspace") {
		clearCharacters();
	}
});