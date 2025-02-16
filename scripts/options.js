var options = {
	theme: "default",
	music: false,
};

function optionsWindow() {
	var windowEl = document.getElementById("options-window")
	if (windowEl.style.display == "block") {
		windowEl.style.display = "none";
	} else {
		windowEl.style.display = "block";
	}
}

function toggleOptions(optionName, addValue) {
	switch (optionName) {
		case "theme":
			// var themeButton = document.getElementById("options-button-theme");
			var themeSelect = document.getElementById("theme-select");
			
			switch (addValue) {
				case "default":
					options.theme = "default";
					removeOtherThemes();
					break;
				case "classic":
					options.theme = "classic";
					removeOtherThemes();
					document.querySelectorAll('.theme-element').forEach(el=>el.classList.add('theme-classic'));
					break;
				case "lightMode":
					options.theme = "lightMode";
					removeOtherThemes();
					document.querySelectorAll('.theme-element').forEach(el=>el.classList.add('theme-lightmode'));
					break;
				case "darkMode":
					options.theme = "darkMode";
					removeOtherThemes();
					document.querySelectorAll('.theme-element').forEach(el=>el.classList.add('theme-darkmode'));
					break;
				case "kiss":
					options.theme = "kiss";
					removeOtherThemes();
					document.querySelectorAll('.theme-element').forEach(el=>el.classList.add('theme-kiss'));
					break;
				case "marry":
					options.theme = "marry";
					removeOtherThemes();
					document.querySelectorAll('.theme-element').forEach(el=>el.classList.add('theme-marry'));
					break;
				case "kill":
					options.theme = "kill";
					removeOtherThemes();
					document.querySelectorAll('.theme-element').forEach(el=>el.classList.add('theme-kill'));
					break;
				case "smash":
					options.theme = "smash";
					removeOtherThemes();
					document.querySelectorAll('.theme-element').forEach(el=>el.classList.add('theme-smash'));
					break;
				case "pass":
					options.theme = "pass";
					removeOtherThemes();
					document.querySelectorAll('.theme-element').forEach(el=>el.classList.add('theme-pass'));
					break;
			}
			
			function removeOtherThemes() {
				document.querySelectorAll('.theme-element').forEach(el=>el.classList.remove('theme-classic'));
				document.querySelectorAll('.theme-element').forEach(el=>el.classList.remove('theme-lightmode'));
				document.querySelectorAll('.theme-element').forEach(el=>el.classList.remove('theme-darkmode'));
				document.querySelectorAll('.theme-element').forEach(el=>el.classList.remove('theme-kiss'));
				document.querySelectorAll('.theme-element').forEach(el=>el.classList.remove('theme-marry'));
				document.querySelectorAll('.theme-element').forEach(el=>el.classList.remove('theme-kill'));
				document.querySelectorAll('.theme-element').forEach(el=>el.classList.remove('theme-smash'));
				document.querySelectorAll('.theme-element').forEach(el=>el.classList.remove('theme-pass'));
			}
			break;
		case "music":
			if (options.music) {
				audio.pause();
				audio.src = "";
				options.music = false;
				document.getElementById("options-button-music").innerHTML = "Off";
				audioBox.style.display = "none";
			} else {
				musicRunner();
				options.music = true;
				document.getElementById("options-button-music").innerHTML = "On";
				audioBox.style.display = "block";
			}
			break;
		case "musicplayer":
			if (audioBox.style.display == "block") {
				audioBox.style.display = "none";
			} else if (audio.src != "") {
				audioBox.style.display = "block";
			}
			break;
	}
}

setTimeout(function() {
	document.getElementById("theme-select").selectedIndex = 0;
}, 1);

var curTrack = 0;
var audioBox;
var audio;

setTimeout(function() {
	audioBox = document.getElementById("musicplayer");
	audio = document.getElementById("musicplayer-audio");
}, 1);

var trackNum = 0;
var tracksPlayed = [
	"Kiss, Marry, or Kill 1",
	"Kiss, Marry, or Kill 2",
	"Kiss, Marry, or Kill 3",
	"Kiss, Marry, or Kill 4",
	"Kiss, Marry, or Kill 6",
	"Kiss, Marry, or Kill 12",
];
var totalSongs = tracksPlayed.length;

function musicRunner() {
	if (tracksPlayed.length == totalSongs) {
		var tempLastSong = tracksPlayed[tracksPlayed.length - 1];
		tracksPlayed = [];
	}
	
	unplayed: while (true) {
		trackNum = Math.floor(Math.random() * (totalSongs) + 1);
		if (tracksPlayed.includes(trackNum) || trackNum == tempLastSong) {
			continue unplayed;
		} else {
			break unplayed;
		}
	}
	
	tracksPlayed.push(trackNum);
	
	switch (trackNum) {
		case 1:
			audio.src = "../music/Kiss, Marry, Or Kill 1.ogg";
			audio.play();
			document.getElementById("musicplayer-trackname").innerHTML = "Kiss, Marry, or Kill 1";
			break;
		case 2:
			audio.src = "../music/Kiss, Marry, Or Kill 2.ogg";
			audio.play();
			document.getElementById("musicplayer-trackname").innerHTML = "Kiss, Marry, or Kill 2";
			break;
		case 3:
			audio.src = "../music/Kiss, Marry, Or Kill 3.ogg";
			audio.play();
			document.getElementById("musicplayer-trackname").innerHTML = "Kiss, Marry, or Kill 3";
			break;
		case 4:
			audio.src = "../music/Kiss, Marry, Or Kill 4.ogg";
			audio.play();
			document.getElementById("musicplayer-trackname").innerHTML = "Kiss, Marry, or Kill 4";
			break;
		case 5:
			audio.src = "../music/Kiss, Marry, Or Kill 6.ogg";
			audio.play();
			document.getElementById("musicplayer-trackname").innerHTML = "Kiss, Marry, or Kill 6";
			break;
		case 6:
			audio.src = "../music/Kiss, Marry, Or Kill 12.ogg";
			audio.play();
			document.getElementById("musicplayer-trackname").innerHTML = "Kiss, Marry, or Kill 12";
			break;
	}
}