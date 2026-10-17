const button = document.getElementById("button");
const paragraph = document.getElementById("container");

button.addEventListener("click", () => {
    paragraph.textContent = "woah you just clicked the button";
});