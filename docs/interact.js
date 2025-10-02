// interact.js
// Author: Emily Kalie
// DIGIT 400 JavaScript assignment part 1

// Notes on the changes made to my portfolio page:
// - Page load alert
// - Button to change background color
// - Button to change message text
// - Button to hide text
// - Button to show message again


// Run init when page loads
window.addEventListener('DOMContentLoaded', init);

function init() {
    alert("The page loaded successfully!");
    

    // Button 1: Change background color
    document.getElementById("changeBackground")
        .addEventListener("click", changeBackground);

    // Button 2: Change paragraph message
    document.getElementById("changeMessage")
        .addEventListener("click", changeMessage);
        
    // Button 3: Hide the message
    document.getElementById("hideMessage")
    .addEventListener("click", hideMessage);

    // Button 4: Show the message again
    document.getElementById("showMessage")
    .addEventListener("click", showMessage);

  

    // Rotate images when clicked
    // Rotation code adapted from w3schools CSS transform examples

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
    document.getElementById("message").style.display = "none";
}

// Function: shows the message again
function showMessage() {
    document.getElementById("message").style.display = "block";
}


function changeMessage() {
    var msg = document.getElementById("message");
    msg.innerHTML = "You clicked the button! Happy Halloween Month!";
}

function toggleTitleColor() {
    var title = document.getElementById("title");
    if (title.style.color === "red") {
        title.style.color = "black";
    } else {
        title.style.color = "red";
    }
}
