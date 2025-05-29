function writeName(arrayResult) {
	var charName = arrayResult.split("/")[1].replace(/_/g, " ").replace(/''/g, "\"").replace(/(.webp)|(.png)|(.jpg)|(.jpeg)/g, "").trim();
	var charSeries = arrayResult.split("/")[0].replace(/_/g, " ").replace(/''/g, "\"").trim();
	
	// Corrections
	
	if (charName == "K K") {
		charName = "K_K"
	}
	if (charName == "Starwalker") {
		charName = "the original	<span style='color:yellow; padding-left: 30px'>Starwalker</span>"
	}
	if (charName == "Rude1") {
		charName = "Rude#1"
	}
	
	if (charSeries == "Honkai Star Rail") {
		charSeries = "Honkai: Star Rail"
	}
	if (charSeries == "Minecraft Story Mode") {
		charSeries = "Minecraft: Story Mode"
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