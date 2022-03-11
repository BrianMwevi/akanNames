const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
const akanNames = {
	male: ["Kwadwo", "Kwasi", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
	female: ["Adwoa", "Akosua", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
};

const akanForm = document.querySelector("form");
const alertButton = document.querySelector(".alert-close");
const overlay = document.querySelector(".alert-overlay");
const alertOverlay = alertButton.parentNode.parentNode;

// Display Form Errors
const alertUser = (message) => {
	document.querySelector(".alert-text").innerText = message;
	alertOverlay.classList.replace("hide", "show");
	return document.addEventListener("keydown", (e) =>
		e.key == "Escape" ? closeAlert() : false
	);
};
const closeAlert = () => alertOverlay.classList.replace("show", "hide");

// Validate Form
const validateForm = (submit) => {
	submit.preventDefault();
	const date = new Date(document.querySelector("input[type=date]").value);
	if (new Date() - date < 0)
		return alertUser("Future Date Error. Not born, yet!🤰");
	const gender = document.querySelector("input[name=gender]:checked");
	if (gender === null) return alertUser("Please Select Your Gender");
	akanForm.reset();
	const day = date.getDay();
	return userFeedback(getAkanName(gender.value, day), days[day]);
};
const getAkanName = (gender, day) => akanNames[gender][day];

const userFeedback = (akanName, day) => {
	document.querySelector(".akan-name").innerText = akanName;
	return (document.querySelector(".birthday").innerText = day);
};

akanForm.addEventListener("submit", validateForm);
overlay.addEventListener("click", closeAlert);
alertButton.addEventListener("click", closeAlert);
