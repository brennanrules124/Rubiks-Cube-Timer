function openNav() {
	if (!isSolving) {
		document.getElementById("settingsMenu").style.width = "100%";
		OnMainPage = false;
	}
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
	document.getElementById("settingsMenu").style.width = "0%";
	OnMainPage = true;
}

function openInfo() {
	if (!isSolving) {
		document.getElementById("infoMenu").style.width = "100%";
		OnMainPage = false;
	}
}

function closeInfo() {
	document.getElementById("infoMenu").style.width = "0%";
	OnMainPage = true;
}

function OpenCustomization() {
	//Closes info box simontaneously
	document.getElementById("settingsMenu").style.width = "0%";
	OnMainPage = false;

	document.getElementById("customizationMenu").style.width = "100%";
	OnMainPage = false;
}

function CloseCustomization() {
	document.getElementById("customizationMenu").style.width = "0%";
	OnMainPage = true;
}

function OpenManual() {
	if (!isSolving) {
		document.getElementById("manuallyEnterTimeMenu").style.width = "100%";
		OnMainPage = false;
	}
}

function CloseManual() {
	document.getElementById("manuallyEnterTimeMenu").style.width = "0%";
	OnMainPage = true;
}