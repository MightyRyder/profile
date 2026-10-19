const button = document.getElementById("button");
const stats = document.getElementById("stats");
let counter = 0;

button.addEventListener("click", () => {
    counter += 1;
    if (counter > 0) {
        button.textContent = "click me (" + counter + ")";
    }
    if (counter > 50) {
        button.style.top = (counter - 50) * 5 + "px";
    }
    if (counter > 100) {
        stats.textContent = "ok im done no more button";
        button.style.display = "none";
    } else if (counter > 85) {
        stats.textContent = "why do you keep clicking";
    } else if (counter > 75) {
        stats.textContent = "there's no special reward ";
    } else if (counter > 65) {
        stats.textContent = "look at it go";
    } else if (counter > 55) {
        stats.textContent = "oh shoot it's running away stop clicking it";
    }
});