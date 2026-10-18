const button = document.getElementById("button");
const spinText = document.getElementById("spin");
const statsText = document.getElementById("stats");
let angle = 0;
let angleSpeed = 0;

button.addEventListener("click", () => {
    angleSpeed += 1;
});

function animate() {
    spin();
    requestAnimationFrame(animate);
}

function spin() {
    if (angleSpeed > 0) {
        angle += angleSpeed;
        button.style.rotate = (angle % 360) + "deg";
        spinText.textContent = "Woah, you just clicked the button! The button is now at angle "+angle % 360;
        statsText.textContent = "My first website 🥲🥲 Angle speed: " + angleSpeed;
    }
}

animate();