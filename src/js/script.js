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

const akanPage = document.querySelector(".home-akane__btn");
const akanForm = document.querySelector(".akan-form");
const overlay = document.querySelector(".overlay-content");

const toggleDisplay = (e) => {
	const home = e.target.parentNode.parentNode;
	const akan = home.nextElementSibling.classList.replace("hide", "show");
	return home.classList.replace("show", "hide");
};

const getAkanName = (submit) => {
	submit.preventDefault();
	const gender = document.querySelector("input[name=gender]:checked");
	if (gender === null) return alert("You must select your gender");
	const birthDate = new Date(document.getElementById("date").value);
	const day = days[birthDate.getDay()];
	return userFeedback(akanNames[gender.value][day], day);
};

const userFeedback = (akanName, day) => {
	document.querySelector(".name").innerText = akanName;
	document.querySelector(".day").innerText = day;
	return overlay.classList.replace("hide", "show");
};

const removeOverlay = () => {
	// overlay.classList.replace("show", "hide");
	// document.querySelector(".akan").classList.replace("show", "hide");
	document.querySelector(".home").classList.replace("hide", "show");
	return akanForm.reset();
};
akanForm.addEventListener("submit", getAkanName);
akanPage.addEventListener("click", toggleDisplay);
overlay.addEventListener("click", removeOverlay);
