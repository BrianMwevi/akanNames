const getAkan = document.querySelector(".home-akane__btn");

const toggleDisplay = e => {
    const section = e.target.classList[0].split("-")[0];
    const toHide = document.querySelector(`.${section}`);
    toHide.classList.replace("show", "hide");
    console.log(toHide.nextElementSibling);
    
}
getAkan.addEventListener("click", toggleDisplay);