function prideCheck(nameInput, slotValue) {
	var charName = nameInput.split("/")[1].replace(/_/g, " ").replace(/''/g, "\"").replace(/(.webp)|(.png)|(.jpg)|(.jpeg)/g, "").trim();
	var prideStyle = document.getElementById("pridestyle" + slotValue.toString());
	console.log(charName);
	
	switch (charName) {
		// Gay
		case "Angus Delaney": case "Belial": case "Deputy Durland": case "Gregg Lee": case "Jean Armstrong": case "Kiyotaka Ishimaru": case "Lancelot": case "Max": case "Miles Edgeworth": case "Mondo Owada": case "Nagito Komaeda": case "RG-01": case "RG-02": case "Sam": case "Sandalphon": case "Sheriff Blubbs": case "Soldier 76": case "Thanatos": case "Vane": case "Venom": case "Waylon Smithers":
			prideStyle.innerHTML += `
			#characterName${slotValue}.theme-pride {
				background: linear-gradient(to right, #078D70, #26CEAA, #98E8C1, #FFFFFF, #7BADE2, #5049CC, #622DC4);
				background-clip: text;
				color: transparent;
			}`
			break;
		// Lesbian
		case "Astra Yao": case "Aura Blackquill": case "Blake Belladonna": case "Cutwire 1": case "Cutwire 2": case "Eleanor Si": case "Evelyn Chevalier": case "Frallan": case "Garnet": case "Iris Wen": case "Judy Alvarez": case "Katalina Aryze": case "Marina Ida": case "Nikita Naprava": case "Nyx Xia": case "Pearl": case "Pearl Houzuki": case "Princess Bonnibel Bubblegum": case "Selene Yan": case "Societte": case "Suletta Mercury": case "Tracer": case "Tweyen": case "Ula Usterka": case "Undyne": case "Velma Dinkley": case "Victoria Qi": case "Vira Lillie": case "Yang Xiao Long": case "Yuel": case "Zofia Zmora":
			prideStyle.innerHTML += `
			#characterName${slotValue}.theme-pride {
				background: linear-gradient(to right, #D52D00, #FF9A56, #FFFFFF, #D362A4, #C9047A);
				background-clip: text;
				color: transparent;
			}`
			break;
		// Bisexual
		case "Alphys": case "Anji Mito": case "Eustace": case "Ibuki Mioda": case "Kerry Eurodyne": case "Marceline Abadeer": case "Miorine Rembran": case "Phoenix Wright": case "Princess Remedy": case "Seox": case "Zagreus":
			prideStyle.innerHTML += `
			#characterName${slotValue}.theme-pride {
				background: linear-gradient(to right, #D70170, #734F95, #0038A7);
				background-clip: text;
				color: transparent;
			}`
			break;
		// Pansexual
		case "":
			prideStyle.innerHTML += `
			#characterName${slotValue}.theme-pride {
				background: linear-gradient(to right, #FF218C, #FFD800, #21B1FF);
				background-clip: text;
				color: transparent;
			}`
			break;
		// Asexual
		case "Dusa": case "Sans": case "SpongeBob SquarePants":
			prideStyle.innerHTML += `
			#characterName${slotValue}.theme-pride {
				background: linear-gradient(to right, #000000, #959595, #FFFFFF, #660066);
				background-clip: text;
				color: transparent;
			}`
			break;
		// Transgender
		case "Badeline": case "Birdo": case "Bridget": case "Cagliostro": case "Ladiva": case "Mad Mew Mew": case "Madeline": case "Mai Natsume": case "Mettaton": case "Toyosatomimi no Miko": case "Vivian":
			prideStyle.innerHTML += `
			#characterName${slotValue}.theme-pride {
				background: linear-gradient(to right, #5BCEFA, #F5A9B8, #FFFFFF, #F5A9B8, #5BCEFA);
				background-clip: text;
				color: transparent;
			}`
			break;
		// Non-binary
		case "The Fool": case "Medicine Pocket": case "Napstablook": case "Ori": case "River Person": case "Testament":
			prideStyle.innerHTML += `
			#characterName${slotValue}.theme-pride {
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
		case "Flowery":
			randomEventChance = Math.floor(Math.random() * 10);
			if (randomEventChance === 0) {
				var floweryVoiceLines = [
					"snd_flowery_voiceclip_forget_it.wav",
					"snd_flowery_voiceclip_goodbye.wav",
				];
				randomEventChance = Math.floor(Math.random() * floweryVoiceLines.length);
				sfx = new Audio("../sfx/flowery/" + floweryVoiceLines[randomEventChance]);
				sfx.volume = 0.3;
				sfx.play();
				
				sfx.addEventListener("ended", onEndFunc);
				function onEndFunc() {
					if (document.getElementById("characterName1").innerHTML === "Flowery") {
						generate(1);
					} else if (document.getElementById("characterName2").innerHTML === "Flowery") {
						generate(2);
					} else {
						generate(3);
					}
					sfx.removeEventListener("ended", onEndFunc);
				}
			} else if (randomEventChance >= 1) {
				var floweryVoiceLines = [
					"snd_flowery_voiceclip_all_according_to_all_according_to_plant.wav",
					"snd_flowery_voiceclip_blingo_blizzard.wav",
					"snd_flowery_voiceclip_calling_for_help.wav",
					"snd_flowery_voiceclip_dont_you_like_serving_humans.wav",
					"snd_flowery_voiceclip_flowers_blooms_in_your_heart.wav",
					"snd_flowery_voiceclip_get_a_chance_1.wav",
					"snd_flowery_voiceclip_get_a_chance_2.wav",
					"snd_flowery_voiceclip_grown_like_a_turnip.wav",
					"snd_flowery_voiceclip_heh_it_s_my_jarona.wav",
					"snd_flowery_voiceclip_hereicomesanfrandisco_strong.wav",
					"snd_flowery_voiceclip_hereicomesanfrandisco_weak.wav",
					"snd_flowery_voiceclip_heyguysithinkifoundaglue.wav",
					"snd_flowery_voiceclip_heytherelittleguy.wav",
					"snd_flowery_voiceclip_huhillshowyou.wav",
					"snd_flowery_voiceclip_im_falling.wav",
					"snd_flowery_voiceclip_im_only_trying_to_help_you.wav",
					"snd_flowery_voiceclip_imsorryonceagainikeptaladyinwaiting.wav",
					"snd_flowery_voiceclip_its_so_human.wav",
					"snd_flowery_voiceclip_itsmeflowery.wav",
					"snd_flowery_voiceclip_leaf_it_to_me.wav",
					"snd_flowery_voiceclip_mostlys.wav",
					"snd_flowery_voiceclip_mysterious_wind.wav",
					"snd_flowery_voiceclip_no_way_its_your_children.wav",
					"snd_flowery_voiceclip_sorrytokeepaladyinwaiting.wav",
					"snd_flowery_voiceclip_sorrytokeepyouladies.wav",
					"snd_flowery_voiceclip_sorrytokeepyouwaiting1.wav",
					"snd_flowery_voiceclip_sorrytokeepyouwaiting2.wav",
					"snd_flowery_voiceclip_stingus.wav",
					"snd_flowery_voiceclip_suckle_it_up.wav",
					"snd_flowery_voiceclip_theyre_eating_my_flesh.wav",
					"snd_flowery_voiceclip_thisguysyourbestfriend.wav",
					"snd_flowery_voiceclip_try_my_flavor.wav",
					"snd_flowery_voiceclip_what_a_predictable_creature.wav",
					"snd_flowery_voiceclip_with_your_powers_combined.wav",
					"snd_flowery_voiceclip_yourdadsmybestfriend.wav",
				];
				randomEventChance = Math.floor(Math.random() * floweryVoiceLines.length);
				sfx = new Audio("../sfx/flowery/" + floweryVoiceLines[randomEventChance]);
				sfx.volume = 0.3;
				sfx.play();
			}
			break;
		case "Lolbit":
			randomEventChance = Math.floor(Math.random() * 2);
			if (randomEventChance === 0) {
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
				
				sfx.addEventListener("ended", onEndFunc);
				function onEndFunc() {
					modifyCharacterInfo("load");
					changeLocalOptions("rollToggle");
					if (audio.src.includes(".ogg")) {
						audio.play();
					}
					sfx.removeEventListener("ended", onEndFunc);
				}
			} else {
				console.log("EE Fail: " + eggType + " - " + randomEventChance);
			}
			break;
		case "Monika":
			randomEventChance = Math.floor(Math.random() * 4);
			if (randomEventChance === 0) {
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
				console.log("EE Fail: " + eggType + " - " + randomEventChance);
			}
			break;
		case "Sayori":
			randomEventChance = Math.floor(Math.random() * 10);
			if (randomEventChance === 0) {
				console.log("EE Pass: Sayori");
				changeLocalOptions("rollToggle");
				sfx.src = "../sfx/s_kill_glitch1.ogg";
				if (audio.src.includes(".ogg")) {
					audio.pause();
				}
				
				if (document.getElementById("characterName1").innerHTML === "Sayori") {
					document.getElementById("daImage1").src = "../images/characters/Doki_Doki_Literature_Club/s_kill.png";
				} else if (document.getElementById("characterName2").innerHTML === "Sayori") {
					document.getElementById("daImage2").src = "../images/characters/Doki_Doki_Literature_Club/s_kill.png";
				} else {
					document.getElementById("daImage3").src = "../images/characters/Doki_Doki_Literature_Club/s_kill.png";
				}
				
				setTimeout(() => {
					if (document.getElementById("characterName1").innerHTML === "Sayori") {
						document.getElementById("daImage1").src = "../images/characters/Doki_Doki_Literature_Club/s_kill2.png";
					} else if (document.getElementById("characterName2").innerHTML === "Sayori") {
						document.getElementById("daImage2").src = "../images/characters/Doki_Doki_Literature_Club/s_kill2.png";
					} else {
						document.getElementById("daImage3").src = "../images/characters/Doki_Doki_Literature_Club/s_kill2.png";
					}
					sfx.play();
				}, "1500");
				
				sfx.addEventListener("ended", onEndFunc);
				function onEndFunc() {
					changeLocalOptions("rollToggle");
					if (audio.src.includes(".ogg")) {
						audio.play();
					}
					
					if (document.getElementById("characterName1").innerHTML === "Sayori") {
						generate(1);
					} else if (document.getElementById("characterName2").innerHTML === "Sayori") {
						generate(2);
					} else {
						generate(3);
					}
					sfx.removeEventListener("ended", onEndFunc);
				}
			} else {
				console.log("EE Fail: " + eggType + " - " + randomEventChance);
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

function cuddleMode() {
	cuddleModeToggle = !cuddleModeToggle;
	if (cuddleModeToggle) {
		document.getElementById("titlebar").innerHTML = "CUDDLE OR PASS";
		document.getElementById("smashNum").innerHTML = "CUDDLE: " + smashAmount;
		document.getElementById("smButton").innerHTML = "CUDDLE";
		document.getElementById("options-button-cuddlemode").innerHTML = "On";
	} else {
		document.getElementById("titlebar").innerHTML = "SMASH OR PASS";
		document.getElementById("smashNum").innerHTML = "SMASH: " + smashAmount;
		document.getElementById("smButton").innerHTML = "SMASH";
		document.getElementById("options-button-cuddlemode").innerHTML = "Off";
	}
}

// Crack Ship Matchmaker

function setCharacterNumber() {
	const charnumSelect = document.getElementById("charnum-select");
	const charContainer = document.getElementsByClassName("character-container")[0];
	charContainer.innerHTML = "";
	
	updateDebugText();
	
	for (i = 1; i <= parseInt(charnumSelect.value.replace(/^\D+/g, "")); i++) {
		charContainer.innerHTML += `
			<div class="character-space">
				<div class="character-info">
					<br><button id="generateButton` + i + `" class="theme-element" onclick="generate(` + i + `)">Reroll character</button>
					<div class="debugmenu" style="display: none">
						<button onclick="generate(` + i + `, true, -100)">-100</button>
						<button onclick="generate(` + i + `, true, -10)">-10</button>
						<button onclick="generate(` + i + `, true, -1)">-1</button>
						<input type="text" id="identer-` + i + `" name="identer-` + i + `" minlength="1" maxlength="4" style="width: 32px; text-align: center">
						<button onclick="generate(` + i + `, true, 1)">+1</button>
						<button onclick="generate(` + i + `, true, 10)">+10</button>
						<button onclick="generate(` + i + `, true, 100)">+100</button>
					</div>
					<h1 class="character-name"><span id="characterName` + i + `" class="theme-element">Character ` + i + `</span></h1>
					<p id="series` + i + `" class="character-series"></p>
				</div>
				<img id="daImage` + i + `" class="character-image">
			</div>
		`;
	}
}