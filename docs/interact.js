// interact.js
// Author: Emily Kalie
// DIGIT 400 JavaScript assignment part 1

// =========================================================
// Portfolio Page Interactions (General)
// =========================================================

// Run init when page loads
window.addEventListener('DOMContentLoaded', init);

function init() {
    alert("The page loaded successfully!");

    // Button 1: Change background color
    const bgBtn = document.getElementById("changeBackground");
    if (bgBtn) bgBtn.addEventListener("click", changeBackground);

    // Button 2: Change paragraph message
    const msgBtn = document.getElementById("changeMessage");
    if (msgBtn) msgBtn.addEventListener("click", changeMessage);

    // Button 3: Hide the message
    const hideBtn = document.getElementById("hideMessage");
    if (hideBtn) hideBtn.addEventListener("click", hideMessage);

    // Button 4: Show the message again
    const showBtn = document.getElementById("showMessage");
    if (showBtn) showBtn.addEventListener("click", showMessage);

    // Rotate images when clicked (safe for all pages)
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        let angle = 0;
        img.addEventListener("click", () => {
            angle += 90;
            img.style.transform = `rotate(${angle}deg)`;
        });
    });
}

// Function: changes the background color of the entire page
function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
}

// Function: hides the message when button is clicked
function hideMessage() {
    const msg = document.getElementById("message");
    if (msg) msg.style.display = "none";
}

// Function: shows the message again
function showMessage() {
    const msg = document.getElementById("message");
    if (msg) msg.style.display = "block";
}

// Function: changes message text
function changeMessage() {
    const msg = document.getElementById("message");
    if (msg) msg.innerHTML = "You clicked the button! Happy Halloween Month!";
}

// Function: toggles title color
function toggleTitleColor() {
    const title = document.getElementById("title");
    if (title) {
        title.style.color = title.style.color === "red" ? "black" : "red";
    }
}

// =========================================================
// SVG Section (for orbiting circle demo)
// =========================================================

const bgTrigger = document.getElementById("changeBackground");
if (bgTrigger) {
    bgTrigger.addEventListener("click", function () {
        const orbitCircle = document.querySelector(".orbit circle:last-of-type");
        if (orbitCircle) {
            const svgColors = ["#00b4d8", "#90e0ef", "#ff6b6b", "#fca311", "#9b5de5"];
            const randomSVGColor =
                svgColors[Math.floor(Math.random() * svgColors.length)];
            orbitCircle.setAttribute("fill", randomSVGColor);

            // Restart orbit animation for visual effect
            const clone = orbitCircle.cloneNode(true);
            orbitCircle.parentNode.replaceChild(clone, orbitCircle);
        }
    });
}

const hideMsgBtn = document.getElementById("hideMessage");
if (hideMsgBtn) {
    hideMsgBtn.addEventListener("click", function () {
        const orbitAnim = document.querySelector(".orbit animateTransform");
        if (orbitAnim) orbitAnim.pauseAnimations();
    });
}

const showMsgBtn = document.getElementById("showMessage");
if (showMsgBtn) {
    showMsgBtn.addEventListener("click", function () {
        const orbitAnim = document.querySelector(".orbit animateTransform");
        if (orbitAnim) orbitAnim.unpauseAnimations();
    });
}

// ----- TECH SKILLS GAP PAGE FUNCTIONALITY -----
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const panels = document.querySelectorAll(".panel");

    if (tabs.length > 0 && panels.length > 0) {
        tabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                const target = tab.getAttribute("data-tab");

                tabs.forEach((t) => t.setAttribute("aria-selected", "false"));
                panels.forEach((panel) => panel.setAttribute("hidden", true));

                tab.setAttribute("aria-selected", "true");
                const targetPanel = document.querySelector(`#panel-${target}`);
                if (targetPanel) targetPanel.removeAttribute("hidden");
            });
        });
    }

    // Scroll button
    const scrollBtn = document.getElementById("scrollToTabs");
    if (scrollBtn) {
        scrollBtn.addEventListener("click", () => {
            document.querySelector(".tabs").scrollIntoView({ behavior: "smooth" });
        });
    }

    // Back to top
    const toTop = document.getElementById("toTop");
    if (toTop) {
        window.addEventListener("scroll", () => {
            toTop.classList.toggle("show", window.scrollY > 300);
        });
        toTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});





