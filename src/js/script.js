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

const getAkan = document.querySelector(".home-akane__btn");
const akanForm = document.querySelector(".akan-form");
const overlay = document.querySelector(".akan-overlay");

const toggleDisplay = (e) => {
	const section = e.target.classList[0].split("-")[0];
	const toHide = document.querySelector(`.${section}`);
	const nextSection = toHide.nextElementSibling;
	toHide.classList.replace("show", "hide");
	if (nextSection !== "null") {
		nextSection.classList.replace("hide", "show");
	} else {
		toHide.previousElementSibling.classList.replace("show", "hide");
	}
};

const validateDate = (submit) => {
	submit.preventDefault();
	const gender = document.querySelector("input[type=radio]:checked");
	if (gender === null) return alert("You must select your gender");

	const userDate = new FormData(akanForm).get("dateOfBirth");
	const convertedDate = new Date(userDate);
	const day = convertedDate.getDay();
	if (day < 0 || day > 7) return alert("Wrong input of day");

	const month = convertedDate.getMonth();
	if (month < 0 || month > 11) return alert("Wrong input of month");
	return userFeedback(akanNames[gender.value][days[day]], days[day]);
};

const userFeedback = (akanName, day) => {
	overlay.classList.replace("hide", "show");
	document.querySelector(".name").innerText = akanName;
	document.querySelector(".day").innerText = day;
	return;
};

const removeOverlay = () => {
	overlay.classList.replace("show", "hide");
	document.querySelector(".akan").classList.replace("show", "hide");
	document.querySelector(".home").classList.replace("hide", "show");
	return akanForm.reset();
};
akanForm.addEventListener("submit", validateDate);
getAkan.addEventListener("click", toggleDisplay);
overlay.addEventListener("click", removeOverlay);
