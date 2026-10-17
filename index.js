const button = document.getElementById("button");
const spinText = document.getElementById("spin");
let angle = 0;

button.addEventListener("click", () => {
    requestAnimationFrame(animate);
});

function animate() {
    angle += 1;
    spinText.style.rotate = (angle % 360) + "deg";
    spinText.textContent = "woah you just clicked the button. i'm now at angle "+angle % 360;
    requestAnimationFrame(animate);
}