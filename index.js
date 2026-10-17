const button = document.getElementById("button");
const spinText = document.getElementById("spin");
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
    angle += angleSpeed;
    spinText.style.rotate = (angle % 360) + "deg";
    spinText.textContent = "woah you just clicked the button. i'm now at angle "+angle % 360;
}

animate();