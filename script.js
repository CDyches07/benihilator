const ben = document.querySelector("button");
const counter = document.getElementById("counter");
let clicks = 0;

ben.addEventListener("click", () => {
    clicks++;
    counter.textContent = clicks;
});