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

// Windows Appear
function windowsBtnAppear() {
    const windowsContainer = document.querySelector(".windows-container");
    const windowsBtn = document.querySelector(".windowsLogoBtn");
    // Event listener to toggle the visibility of the windows container on single click
    windowsBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent the document click listener from firing immediately
        windowsContainer.classList.toggle("show-windows-container");
    });
    // Event listener to close the container if clicked outside of it
    document.addEventListener("click", (e) => {
        if (!windowsContainer.contains(e.target) && !windowsBtn.contains(e.target)) {
            windowsContainer.classList.remove("show-windows-container");
        }
    });
}
windowsBtnAppear();  // Automatically invoke the function once the script is loaded

// power button click function
function powerBtnClick() {
    const powerOptions = document.querySelector(".power-off-options");
    const powerBtn = document.querySelector(".power-off-btn");
    powerBtn.addEventListener("click", () => {
        if (powerOptions.style.display == 'none') {
            powerOptions.style.display = 'block';
        }
        else {
            powerOptions.style.display = 'none';
        }
    });
    document.addEventListener("click", (e) => {
        if (!powerOptions.contains(e.target) && !powerBtn.contains(e.target)) {
            powerOptions.style.display = 'none';
        }
    });
}
powerBtnClick();

// theme change from dark to light & light to dark
function changeTheme() {
    const themeBtn = document.querySelector(".themeBtn");
    const themeContainer = document.querySelector(".main-full-window-container");
    const themeIcon = document.querySelector(".themeIcon");
    const taskbarContainer = document.querySelector(".taskbar-container");
    themeBtn.addEventListener("click", () => {
        const currentBackgroundImage = getComputedStyle(themeContainer).backgroundImage;
        if (currentBackgroundImage.includes("windows-11-dark-mode.jpeg")) {
            themeContainer.style.backgroundImage = 'url("../assests/windows-11-light-mode.jpeg")';
            taskbarContainer.style.backgroundColor = '#FFFFFFA8';
            themeIcon.src = '../assests/dark-theme-logo.png';
        } else {
            themeContainer.style.backgroundImage = 'url("../assests/windows-11-dark-mode.jpeg")';
            taskbarContainer.style.backgroundColor = '#0e1024ea';
            themeIcon.src = '../assests/light-theme-logo.png';
        }
    });
}
changeTheme();

// my file container script
document.addEventListener("DOMContentLoaded", function() {
    const sideItems = document.querySelectorAll('.side-item');
    const sections = document.querySelectorAll('.section');
    // Hide all sections by default
    sections.forEach(section => section.style.display = 'none');
    // Display the default section (about-me) when the page loads
    document.getElementById('about-me-section').style.display = 'block';
    // Event listener for side items
    sideItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all side items
            sideItems.forEach(i => i.classList.remove('active'));
            // Add active class to the clicked item
            item.classList.add('active');
            // Hide all sections
            sections.forEach(section => section.style.display = 'none');
            // Show the clicked section
            const sectionId = item.id; // Get the clicked item's id
            const targetSection = document.getElementById(sectionId + '-section'); // Match the section id
            targetSection.style.display = 'block'; // Display the corresponding section
        });
    });
});