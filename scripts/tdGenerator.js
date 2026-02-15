var decisions = {
	generic: [
		"Down a plastic bottle of murky water",
		"Be chained outside my place of residence for 24 hours",
		"",
	],
	goodVibes: [
		"",
	],
}

const decisionTitle = {
	left: document.getElementById("decision-title-l"),
	right: document.getElementById("decision-title-r")
}

var randNum = -1;

// Decision category variables

var category = {
	generic: true,
};

function generate(generateType) {
	var fullDecisionsList = [];
	
	// Add decisions from enabled categories 
	
	if (category.generic) {
		decisions.generic.forEach((item) => {
			fullDecisionsList.push(item);
		});
	}
	
	if (generateType == 0 || generateType == 1) {
		randNum = Math.floor(Math.random() * (fullDecisionsList.length));
		decisionTitle.left.innerHTML = fullDecisionsList[randNum];
		if (generateType == 1) {
			reroll: while (true) {
				randNum = Math.floor(Math.random() * (fullDecisionsList.length));
				if (fullDecisionsList[randNum] == decisionTitle.right.innerHTML) {
					continue reroll;
				} else {
					decisionTitle.left.innerHTML = fullDecisionsList[randNum];
					break reroll;
				}
			}
		}
	}
	if (generateType == 0 || generateType == 2) {
		reroll: while (true) {
			randNum = Math.floor(Math.random() * (fullDecisionsList.length));
			if (fullDecisionsList[randNum] == decisionTitle.left.innerHTML) {
				continue reroll;
			} else {
				decisionTitle.right.innerHTML = fullDecisionsList[randNum];
				break reroll;
			}
		}
	}
}