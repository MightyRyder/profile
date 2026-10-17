const button = document.getElementById("button");
const paragraph = document.getElementById("para");
let angle = 0;

button.addEventListener("click", () => {
    requestAnimationFrame(animate);
});

function animate() {
    angle += 1;
    paragraph.style.rotate = (angle % 360) + "deg";
    paragraph.textContent = "woah you just clicked the button. i'm now at angle "+angle % 360;
    requestAnimationFrame(animate);
}