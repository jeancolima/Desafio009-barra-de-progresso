const stepOne = document.querySelector(".step-one");
const stepTwo = document.querySelector(".step-two");
const stepThree = document.querySelector(".step-three");
const progressBar = document.querySelector(".progress-bar");
const buttonNextSection = document.querySelector(".btn-next-section");

buttonNextSection.addEventListener("click", () => {
    if (progressBar.classList[1] == "current-step-one") {
        stepTwo.classList.add("checked-step-two");

        stepThree.style.backgroundColor = "var(--secondary-color)";
        stepThree.style.color = "var(--white)";

        progressBar.classList.remove("current-step-one");
        progressBar.classList.add("current-step-two");
    } else if (progressBar.classList[1] == "current-step-two") {
        stepOne.classList.add("all-checked");
        stepTwo.classList.add("all-checked");
        stepThree.style.backgroundColor = "var(--third-color)";

        buttonNextSection.classList.remove("btn-next-section");
        buttonNextSection.classList.add("btn-finish");
        buttonNextSection.innerHTML = "Finish";
    }

})