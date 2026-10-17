const button = document.getElementById("button");
const paragraph = document.getElementById("para");

button.addEventListener("click", () => {
    paragraph.textContent = "woah you just clicked the button";
});