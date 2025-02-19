// lockscreen unlock
function unlock() {
    const lockscreenContainer = document.querySelector(".lockscreen-time-container");
    const unlockscreen = () => {
        lockscreenContainer.classList.add("unlockscreen");
    };
    lockscreenContainer.addEventListener("click", unlockscreen);
}
unlock();

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