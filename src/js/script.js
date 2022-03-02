const getAkan = document.querySelector(".home-akane__btn");

const toggleDisplay = (e) => {
	const section = e.target.classList[0].split("-")[0];
    const toHide = document.querySelector(`.${section}`);
	const nextSection = toHide.nextElementSibling;
    console.log(nextSection)
	toHide.classList.replace("show", "hide");
	if (nextSection !== "null") {
		nextSection.classList.replace("hide", "show");
	} else {
		toHide.previousElementSibling.classList.replace("show", "hide");
	}
};
getAkan.addEventListener("click", toggleDisplay);
