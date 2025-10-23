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

// =========================================================
// TECH SKILLS GAP PAGE INTERACTIVITY
// =========================================================
window.addEventListener('DOMContentLoaded', () => {
    console.log("Tech Skills Gap JS loaded");

    // ----- Tabs -----
    const tabs = document.querySelectorAll('.tab');
    const panels = {
        intro: document.getElementById('panel-intro'),
        problem: document.getElementById('panel-problem'),
        impact: document.getElementById('panel-impact'),
        solutions: document.getElementById('panel-solutions'),
        future: document.getElementById('panel-future'),
        resources: document.getElementById('panel-resources'),
    };

    function setActive(tabName) {
        tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
        const selected = [...tabs].find(t => t.dataset.tab === tabName) || tabs[0];
        if (selected) selected.setAttribute('aria-selected', 'true');
        Object.values(panels).forEach(p => p && (p.hidden = true));
        const activePanel = panels[tabName] || panels.intro;
        if (activePanel) activePanel.hidden = false;
    }

    tabs.forEach(t => {
        t.addEventListener('click', () => setActive(t.dataset.tab));
    });

    setActive('intro');

    // ----- Scroll to Tabs -----
    const scrollBtn = document.getElementById('scrollToTabs');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            document.querySelector('.tabs').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // ----- Meter -----
    const meter = document.getElementById('meter');
    const fill = document.getElementById('meterFill');
    if (meter && fill) {
        meter.addEventListener('input', e => {
            fill.style.width = e.target.value + '%';
        });
    }

    // ----- AI Badge Toggle -----
    const toggleBtn = document.getElementById('toggleBadge');
    const badgeText = document.getElementById('badgeText');
    if (toggleBtn && badgeText) {
        toggleBtn.addEventListener('click', () => {
            const isMixed = badgeText.textContent.includes('Mixed');
            badgeText.textContent = isMixed
                ? 'No-AI: Authored without AI assistance'
                : 'AI Honesty: Mixed — human-edited';
            toggleBtn.setAttribute('aria-pressed', String(isMixed));
        });
    }

    // ----- Back to Top -----
    const toTop = document.getElementById('toTop');
    if (toTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) toTop.classList.add('show');
            else toTop.classList.remove('show');
        });
        toTop.addEventListener('click', () =>
            window.scrollTo({ top: 0, behavior: 'smooth' })
        );
    }

    // ----- Animated SVG Lines -----
    (function animateLines() {
        const need = document.getElementById('needLine');
        const have = document.getElementById('haveLine');
        if (!need || !have) return;
        let t = 0;
        setInterval(() => {
            t += 0.06;
            const needPts = [
                [50, 150 - 2 * Math.sin(t)],
                [200, 120 - 4 * Math.sin(t * 0.9)],
                [350, 100 - 6 * Math.sin(t * 0.8)],
                [500, 80 - 8 * Math.sin(t * 0.7)],
                [650, 60 - 10 * Math.sin(t * 0.6)]
            ];
            const havePts = [
                [50, 150 + 1 * Math.sin(t * 0.8)],
                [200, 145 + 1 * Math.sin(t * 0.9)],
                [350, 145 + 1 * Math.sin(t)],
                [500, 150 + 1 * Math.sin(t * 1.1)],
                [650, 150 + 1 * Math.sin(t * 1.2)]
            ];
            need.setAttribute('points', needPts.map(p => p.join(',')).join(' '));
            have.setAttribute('points', havePts.map(p => p.join(',')).join(' '));
        }, 60);
    })();

});


