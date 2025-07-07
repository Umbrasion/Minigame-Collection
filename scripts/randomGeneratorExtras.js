function writeName(arrayResult) {
	var charName = arrayResult.split("/")[1].replace(/_/g, " ").replace(/''/g, "\"").replace(/(.webp)|(.png)|(.jpg)|(.jpeg)/g, "").trim();
	var charSeries = arrayResult.split("/")[0].replace(/_/g, " ").replace(/''/g, "\"").trim();
	
	// Corrections (Characters)
	
	if (charName == "Aikuro Mikisugi") {
		charName = "Aikur&omacr; Mikisugi"
		// Aikurō Mikisugi
	}
	if (charName == "Bitores Mendez") {
		charName = "Bitores M&eacute;ndez"
		// Bitores Méndez
	}
	if (charName == "Desiree DeLite") {
		charName = "Desir&eacute;e DeLite"
		// Desirée DeLite
	}
	if (charName == "Edmond Dantes") {
		charName = "Edmond Dant&egrave;s"
		// Edmond Dantès
	}
	if (charName == "Elodie Rakoto") {
		charName = "&Eacute;lodie Rakoto"
		// Élodie Rakoto
	}
	if (charName == "Hoka Inumuta") {
		charName = "H&omacr;ka Inumuta"
		// Hōka Inumuta
	}
	if (charName == "Ira Gamagori") {
		charName = "Ira Gamag&omacr;ri"
		// Ira Gamagōri
	}
	if (charName == "Jagoda Jeczyduch") {
		charName = "Jagoda J&eogon;czyduch"
		// Jagoda Jęczyduch
	}
	if (charName == "Jesus \"Soos\" Ramirez") {
		charName = "Jes&uacute;s \"Soos\" Ramirez"
		// Jesús "Soos" Ramirez
	}
	if (charName == "Judy Alvarez") {
		charName = "Judy &Aacute;lvarez"
		// Judy Álvarez
	}
	if (charName == "K K") {
		charName = "K_K"
	}
	if (charName == "Kyoko") {
		charName = "Ky&omacr;ko"
		// Kyōko
	}
	if (charName == "Margaret \"Mad Maggie\" Kohere") {
		charName = "Margaret \"Mad Maggie\" K&omacr;here"
		// Margaret "Mad Maggie" Kōhere
	}
	if (charName == "Morag Ladair") {
		charName = "M&ograve;rag Ladair"
		// Mòrag Ladair
	}
	if (charName == "Starwalker") {
		charName = "the original	<span style='color:yellow; padding-left: 30px'>Starwalker</span>"
	}
	if (charName == "Ragyo Kiryuin") {
		charName = "Ragy&omacr; Kiry&umacr;in"
		// Ragyō Kiryūin
	}
	if (charName == "Rude1") {
		charName = "Rude#1"
	}
	if (charName == "Satsuki Kiryuin") {
		charName = "Satsuki Kiry&umacr;in"
		// Satsuki Kiryūin
	}
	if (charName == "Yuuki Terumi") {
		charName = "Y&umacr;ki Terumi"
		// Yūki Terumi
	}
	if (charName == "GIFfany") {
		charName = ".GIFfany"
	}
	if (charName == "Lambda-No.11-") {
		charName = "&#7463;-No.11-"
		// ᴧ-No.11-
	}
	if (charName == "Mu-No.12-") {
		charName = "&mu;-No.12-"
		// μ-No.12-
	}
	if (charName == "Nu-No.13-") {
		charName = "&nu;-No.13-"
		// ν-No.13-
	}
	if (charName == "Enma") {
		charName = "&Zcy;&icy;&mcy;&acy;"
		// Зима
	}
	
	// Corrections (Series)
	
	if (charSeries == "Honkai Star Rail") {
		charSeries = "Honkai: Star Rail"
	}
	if (charSeries == "Minecraft Story Mode") {
		charSeries = "Minecraft: Story Mode"
	}
	if (charSeries == "Pokemon") {
		charSeries = "Pokémon"
	}
	if (charSeries == "ReZero") {
		charSeries = "Re:Zero"
	}
	if (charSeries == "Reverse1999") {
		charSeries = "Reverse:1999"
	}
	
	var charFullInfo = [charName, charSeries];
	return charFullInfo;
}

function prideCheck(nameInput, slotValue) {
	var charName = nameInput.split("/")[1].replace(/_/g, " ").replace(/''/g, "\"").replace(/(.webp)|(.png)|(.jpg)|(.jpeg)/g, "").trim();
	var prideStyle = document.getElementById("pridestyle" + slotValue.toString());
	console.log(charName);
	
	switch (charName) {
		// Gay
		case "Angus Delaney": case "Belial": case "Deputy Durland": case "Gregg Lee": case "Jean Armstrong": case "Kiyotaka Ishimaru": case "Lancelot": case "Max": case "Miles Edgeworth": case "Mondo Owada": case "Nagito Komaeda": case "RG-01": case "RG-02": case "Sam": case "Sandalphon": case "Sheriff Blubbs": case "Soldier 76": case "Thanatos": case "Vane": case "Venom": case "Waylon Smithers":
			prideStyle.innerHTML += `
			#characterName` + slotValue + `.theme-pride {
				background: linear-gradient(to right, #078D70, #26CEAA, #98E8C1, #FFFFFF, #7BADE2, #5049CC, #622DC4);
				background-clip: text;
				color: transparent;
			}`
			break;
		// Lesbian
		case "Astra Yao": case "Aura Blackquill": case "Blake Belladonna": case "Cutwire 1": case "Cutwire 2": case "Evelyn Chevalier": case "Frallan": case "Garnet": case "Judy Alvarez": case "Katalina Aryze": case "Marina Ida": case "Nikita Naprava": case "Pearl": case "Pearl Houzuki": case "Princess Bonnibel Bubblegum": case "Societte": case "Suletta Mercury": case "Tracer": case "Tweyen": case "Ula Usterka": case "Undyne": case "Velma Dinkley": case "Vira Lillie": case "Yang Xiao Long": case "Yuel": case "Zofia Zmora":
			prideStyle.innerHTML += `
			#characterName` + slotValue + `.theme-pride {
				background: linear-gradient(to right, #D52D00, #FF9A56, #FFFFFF, #D362A4, #C9047A);
				background-clip: text;
				color: transparent;
			}`
			break;
		// Bisexual
		case "Alphys": case "Anji Mito": case "Eustace": case "Ibuki Mioda": case "Kerry Eurodyne": case "Marceline Abadeer": case "Miorine Rembran": case "Phoenix Wright": case "Princess Remedy": case "Seox": case "Zagreus":
			prideStyle.innerHTML += `
			#characterName` + slotValue + `.theme-pride {
				background: linear-gradient(to right, #D70170, #734F95, #0038A7);
				background-clip: text;
				color: transparent;
			}`
			break;
		// Pansexual
		case "":
			prideStyle.innerHTML += `
			#characterName` + slotValue + `.theme-pride {
				background: linear-gradient(to right, #FF218C, #FFD800, #21B1FF);
				background-clip: text;
				color: transparent;
			}`
			break;
		// Asexual
		case "Dusa": case "Sans": case "SpongeBob SquarePants":
			prideStyle.innerHTML += `
			#characterName` + slotValue + `.theme-pride {
				background: linear-gradient(to right, #000000, #959595, #FFFFFF, #660066);
				background-clip: text;
				color: transparent;
			}`
			break;
		// Transgender
		case "Badeline": case "Birdo": case "Bridget": case "Cagliostro": case "Ladiva": case "Mad Mew Mew": case "Madeline": case "Mai Natsume": case "Mettaton": case "Toyosatomimi no Miko": case "Vivian":
			prideStyle.innerHTML += `
			#characterName` + slotValue + `.theme-pride {
				background: linear-gradient(to right, #5BCEFA, #F5A9B8, #FFFFFF, #F5A9B8, #5BCEFA);
				background-clip: text;
				color: transparent;
			}`
			break;
		// Non-binary
		case "Napstablook": case "River Person": case "Testament":
			prideStyle.innerHTML += `
			#characterName` + slotValue + `.theme-pride {
				background: linear-gradient(to right, #FFF433, #FFFFFF, #9B59D0, #2D2D2D);
				background-clip: text;
				color: transparent;
			}`
			break;
	}
}

function easterEgg(eggType) {
	var randomEventChance = Math.floor(Math.random() * 100);
	var sfx = new Audio();
	var otherResults = [];
	var audio = document.getElementById("musicplayer-audio");
	
	switch (eggType) {
		case "Anji Mito":
			randomEventChance = Math.floor(Math.random() * 5);
			if (randomEventChance == 0) {
				console.log("EE Pass: Anji Mito");
				if (document.getElementById("characterName1").innerHTML == "Anji Mito") {
					document.getElementById("daImage1").src = "../images/characters/Guilty_Gear/Anji_Mito_Alt.jpeg";
				} else if (document.getElementById("characterName2").innerHTML == "Anji Mito") {
					document.getElementById("daImage2").src = "../images/characters/Guilty_Gear/Anji_Mito_Alt.jpeg";
				} else {
					document.getElementById("daImage3").src = "../images/characters/Guilty_Gear/Anji_Mito_Alt.jpeg";
				}
			} else {
				console.log("EE Fail: Anji Mito - " + randomEventChance);
			}
			break;
		case "Jimbo":
			randomEventChance = Math.floor(Math.random() * 5);
			if (randomEventChance == 0) {
				console.log("EE Pass: Jimbo");
				if (document.getElementById("characterName1").innerHTML == "Jimbo") {
					document.getElementById("daImage1").src = "../images/characters/Balatro/Jimbo_Alt.jpg";
				} else if (document.getElementById("characterName2").innerHTML == "Jimbo") {
					document.getElementById("daImage2").src = "../images/characters/Balatro/Jimbo_Alt.jpg";
				} else {
					document.getElementById("daImage3").src = "../images/characters/Balatro/Jimbo_Alt.jpg";
				}
			} else {
				console.log("EE Fail: Jimbo - " + randomEventChance);
			}
			break;
		case "Lolbit":
			randomEventChance = Math.floor(Math.random() * 2);
			if (randomEventChance == 0) {
				console.log("EE Pass: Lolbit");
				changeLocalOptions("rollToggle");
				sfx.src = "../sfx/Lolbit.ogg";
				modifyCharacterInfo("save");
				if (audio.src.includes(".ogg")) {
					audio.pause();
				}
				
				sfx.play();
				
				for (i = 1; i < 4; i++) {
					document.getElementById("characterName" + i).innerHTML = "Lolbit";
					document.getElementById("series" + i).innerHTML = "Five Nights at Freddy's";
					document.getElementById("daImage" + i).src = "../images/characters/Five_Nights_at_Freddy's/Lolbit.webp";
				}
				
				sfx.addEventListener("ended", function() {
					modifyCharacterInfo("load");
					changeLocalOptions("rollToggle");
					if (audio.src.includes(".ogg")) {
						audio.play();
					}
				});
			} else {
				console.log("EE Fail: Lolbit - " + randomEventChance);
			}
			break;
		case "Monika":
			randomEventChance = Math.floor(Math.random() * 4);
			if (randomEventChance == 0) {
				console.log("EE Pass: Monika");
				changeLocalOptions("rollToggle");
				modifyCharacterInfo("save");
				if (audio.src.includes(".ogg")) {
					audio.pause();
				}
				
				document.getElementById("characterName1").innerHTML = "";
				document.getElementById("series1").innerHTML = "";
				document.getElementById("daImage1").src = "";
				document.getElementById("characterName2").innerHTML = "Just Monika";
				document.getElementById("series2").innerHTML = "Doki Doki Literature Club";
				document.getElementById("daImage2").src = "../images/characters/Doki_Doki_Literature_Club/Monika_Full.webp";
				document.getElementById("characterName3").innerHTML = "";
				document.getElementById("series3").innerHTML = "";
				document.getElementById("daImage3").src = "";
				
				setTimeout(() => {
					modifyCharacterInfo("load");
					changeLocalOptions("rollToggle");
					if (audio.src.includes(".ogg")) {
						audio.play();
					}
				}, "5000");
			} else {
				console.log("EE Fail: Monika - " + randomEventChance);
			}
			break;
		case "Sayori":
			randomEventChance = Math.floor(Math.random() * 10);
			if (randomEventChance == 0) {
				console.log("EE Pass: Sayori");
				changeLocalOptions("rollToggle");
				sfx.src = "../sfx/s_kill_glitch1.ogg";
				if (audio.src.includes(".ogg")) {
					audio.pause();
				}
				
				if (document.getElementById("characterName1").innerHTML == "Sayori") {
					document.getElementById("daImage1").src = "../images/characters/Doki_Doki_Literature_Club/s_kill.png";
				} else if (document.getElementById("characterName2").innerHTML == "Sayori") {
					document.getElementById("daImage2").src = "../images/characters/Doki_Doki_Literature_Club/s_kill.png";
				} else {
					document.getElementById("daImage3").src = "../images/characters/Doki_Doki_Literature_Club/s_kill.png";
				}
				
				setTimeout(() => {
					if (document.getElementById("characterName1").innerHTML == "Sayori") {
						document.getElementById("daImage1").src = "../images/characters/Doki_Doki_Literature_Club/s_kill2.png";
					} else if (document.getElementById("characterName2").innerHTML == "Sayori") {
						document.getElementById("daImage2").src = "../images/characters/Doki_Doki_Literature_Club/s_kill2.png";
					} else {
						document.getElementById("daImage3").src = "../images/characters/Doki_Doki_Literature_Club/s_kill2.png";
					}
					sfx.play();
				}, "1500");
				
				sfx.addEventListener("ended", function() {
					changeLocalOptions("rollToggle");
					if (audio.src.includes(".ogg")) {
						audio.play();
					}
				
					if (document.getElementById("characterName1").innerHTML == "Sayori") {
						generate(1);
					} else if (document.getElementById("characterName2").innerHTML == "Sayori") {
						generate(2);
					} else {
						generate(3);
					}
				});
			} else {
				console.log("EE Fail: Sayori - " + randomEventChance);
			}
			break;
	}
	
	function modifyCharacterInfo(doWhat) {
		switch (doWhat) {
			case "save":
				otherResults[0] = document.getElementById("characterName1").innerHTML;
				otherResults[1] = document.getElementById("series1").innerHTML;
				otherResults[2] = document.getElementById("daImage1").src;
				otherResults[3] = document.getElementById("characterName2").innerHTML;
				otherResults[4] = document.getElementById("series2").innerHTML;
				otherResults[5] = document.getElementById("daImage2").src;
				otherResults[6] = document.getElementById("characterName3").innerHTML;
				otherResults[7] = document.getElementById("series3").innerHTML;
				otherResults[8] = document.getElementById("daImage3").src;
				break;
			case "load":
				document.getElementById("characterName1").innerHTML = otherResults[0];
				document.getElementById("series1").innerHTML = otherResults[1];
				if (otherResults[2].includes(".webp") || otherResults[2].includes(".png") || otherResults[2].includes(".jpg") || otherResults[2].includes(".jpeg")) {
					document.getElementById("daImage1").src = otherResults[2];
				} else {
					document.getElementById("daImage1").src = "";
				}
				document.getElementById("characterName2").innerHTML = otherResults[3];
				document.getElementById("series2").innerHTML = otherResults[4];
				if (otherResults[5].includes(".webp") || otherResults[5].includes(".png") || otherResults[5].includes(".jpg") || otherResults[5].includes(".jpeg")) {
					document.getElementById("daImage2").src = otherResults[5];
				} else {
					document.getElementById("daImage2").src = "";
				}
				document.getElementById("characterName3").innerHTML = otherResults[6];
				document.getElementById("series3").innerHTML = otherResults[7];
				if (otherResults[8].includes(".webp") || otherResults[8].includes(".png") || otherResults[8].includes(".jpg") || otherResults[8].includes(".jpeg")) {
					document.getElementById("daImage3").src = otherResults[8];
				} else {
					document.getElementById("daImage3").src = "";
				}
				otherResults = [];
				break;
		}
	}
}