// lockscreen unlock
function unlock() {
    const lockscreenContainer = document.querySelector(".lockscreen-time-container");
    const unlockscreen = () => {
        lockscreenContainer.classList.add("unlockscreen");
    };
    lockscreenContainer.addEventListener("click", unlockscreen);
}
unlock();

// unlocking window
function unlockScreen() {
    const container = document.querySelector(".lockscreen-password-container");
    const passKey = document.getElementById("passKey");
    const unlockBtn = document.getElementById("unlockBtn");
    const question = document.getElementById("question");
    const tryAgainMsg = document.getElementById("tryAgainMsg");
    const randNum1 = Math.floor(Math.random() * 10);
    const randNum2 = Math.floor(Math.random() * 10);
    console.log(randNum1, randNum2);
    const result = randNum1 + randNum2;
    console.log(result)
    question.innerText = randNum1 + " + " +randNum2;

    unlockBtn.addEventListener("click", ()=> {
        if (parseInt(passKey.value) == result) {
            container.classList.add("unlockscreen");
        }
        else {
            tryAgainMsg.innerText = "Please try again";
        }
    });
}
unlockScreen();

// Windows Container Appear/Disappear
function windowsBtnAppear() {
    const windowsContainer = document.querySelector(".windows-container");
    const windowsBtn = document.querySelector(".windowsLogoBtn");
    // Event listener to toggle the visibility of the windows container on single click
    windowsBtn.addEventListener("click", () => {
        // Toggle visibility of windows container
        if (windowsContainer.classList.contains("show-windows-container")) {
            windowsContainer.classList.remove("show-windows-container");
        } else {
            windowsContainer.classList.add("show-windows-container");
        }
    });
    // Event listener to close the container if clicked outside of it
    document.addEventListener("click", (e) => {
        if (!windowsContainer.contains(e.target) && !windowsBtn.contains(e.target)) {
            windowsContainer.classList.remove("show-windows-container");
        }
    });
}
windowsBtnAppear();
// Call the function to enable the functionality

// theme change from dark to light & light to dark
function changeTheme() {
    const themeBtn = document.querySelector(".themeBtn");
    const lightImg = document.querySelector(".light img");
    const darkImg = document.querySelector(".dark img");
    themeBtn.addEventListener("click", ()=> {
        if(lightImg.style.display !== "none") {
            lightImg.style.display = "none";
            darkImg.style.display = "block";
        }
        else {
            lightImg.style.display = "block";
            darkImg.style.display = "none";
        }
    });
}
changeTheme();