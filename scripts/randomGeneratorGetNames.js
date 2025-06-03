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
		charName = "Зима"
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
			}
			`
			break;
		// Lesbian
		case "Astra Yao": case "Aura Blackquill": case "Blake Belladonna": case "Cutwire 1": case "Cutwire 2": case "Evelyn Chevalier": case "Frallan": case "Garnet": case "Judy Alvarez": case "Katalina Aryze": case "Marceline Abadeer": case "Marina Ida": case "Nikita Naprava": case "Pearl": case "Pearl Houzuki": case "Princess Bonnibel Bubblegum": case "Societte": case "Suletta Mercury": case "Tracer": case "Tweyen": case "Ula Usterka": case "Undyne": case "Velma Dinkley": case "Vira Lillie": case "Yang Xiao Long": case "Yuel": case "Zofia Zmora":
			prideStyle.innerHTML += `
			#characterName` + slotValue + `.theme-pride {
				background: linear-gradient(to right, #D52D00, #FF9A56, #FFFFFF, #D362A4, #C9047A);
				background-clip: text;
				color: transparent;
			}
			`
			break;
		// Bisexual
		case "Alphys": case "Anji Mito": case "Eustace": case "Ibuki Mioda": case "Kerry Eurodyne": case "Miorine Rembran": case "Phoenix Wright": case "Princess Remedy": case "Seox": case "Zagreus":
			prideStyle.innerHTML += `
			#characterName` + slotValue + `.theme-pride {
				background: linear-gradient(to right, #D70170, #734F95, #0038A7);
				background-clip: text;
				color: transparent;
			}
			`
			break;
		// Pansexual
		case "":
			prideStyle.innerHTML += `
			#characterName` + slotValue + `.theme-pride {
				background: linear-gradient(to right, #FF218C, #FFD800, #21B1FF);
				background-clip: text;
				color: transparent;
			}
			`
			break;
		// Asexual
		case "Dusa": case "Sans": case "SpongeBob SquarePants":
			prideStyle.innerHTML += `
			#characterName` + slotValue + `.theme-pride {
				background: linear-gradient(to right, #000000, #959595, #FFFFFF, #660066);
				background-clip: text;
				color: transparent;
			}
			`
			break;
		// Transgender
		case "Badeline": case "Bridget": case "Cagliostro": case "Ladiva": case "Mad Mew Mew": case "Madeline": case "Mai Natsume": case "Mettaton": case "Vivian":
			prideStyle.innerHTML += `
			#characterName` + slotValue + `.theme-pride {
				background: linear-gradient(to right, #5BCEFA, #F5A9B8, #FFFFFF, #F5A9B8, #5BCEFA);
				background-clip: text;
				color: transparent;
			}
			`
			break;
		// Non-binary
		case "Napstablook": case "River Person": case "Testament":
			prideStyle.innerHTML += `
			#characterName` + slotValue + `.theme-pride {
				background: linear-gradient(to right, #FFF433, #FFFFFF, #9B59D0, #2D2D2D);
				background-clip: text;
				color: transparent;
			}
			`
			break;
	}
}