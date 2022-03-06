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
	male: {
		Sunday: "Kwasi",
		Monday: "Kwadwo",
		Tuesday: "Kwabena",
		Wednesday: "Kwaku",
		Thursday: "Yaw",
		Friday: "Kofi",
		Saturday: "Kwame",
	},
	female: {
		Sunday: "Akosua",
		Monday: "Adwoa",
		Tuesday: "Abenaa",
		Wednesday: "Akua",
		Thursday: "Yaa",
		Friday: "Afua",
		Saturday: "Ama",
	},
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
	const birthDate = new Date(document.querySelector("input[type=date]").value);
	if (new Date() - birthDate < 0)
		return alertUser("Future Date Error. Not born, yet!🤰");
	const gender = document.querySelector("input[name=gender]:checked");
	if (gender === null) return alertUser("Please Select Your Gender");
	const day = days[birthDate.getDay()];
	akanForm.reset();
	return userFeedback(getAkanName(gender.value, day), day);
};

const getAkanName = (gender, day) => akanNames[gender][day];

const userFeedback = (akanName, day) => {
	document.querySelector(".akan-name").innerText = akanName;
	return (document.querySelector(".birthday").innerText = day);
};

akanForm.addEventListener("submit", validateForm);
overlay.addEventListener("click", closeAlert);
alertButton.addEventListener("click", closeAlert);
