import calc from "./calculator.js";
import showError from "./showError.js";

const screen = document.getElementById("screen");
const btnEqual = document.getElementById("btnEqual");

function updateScroll() {
    screen.scrollLeft = screen.scrollWidth;
}

function insertText(e) {
    screen.value += e.target.textContent;
    updateScroll();
}

function clearScreen() {
    screen.value = '';
    updateScroll();
}

function deleteLast() {
    screen.value = screen.value.slice(0, -1);
    updateScroll();
}

function calcResult() {
    const result = calc(screen.value);

    if (!isFinite(result)) {
        showError(screen, btnEqual);
    } else {
        screen.value = Number(result.toFixed(6));
        screen.scrollLeft = 0;
    }
}

document.querySelectorAll(".btn").forEach((btn) => {
    if (btn.classList.contains("btnEqual")) {
        btn.addEventListener("click", calcResult);
    } else if (btn.classList.contains("btnClear")) {
        btn.addEventListener("click", clearScreen);
    } else if (btn.classList.contains("btnDeleteLast")) {
        btn.addEventListener("click", deleteLast);
    } else {
        btn.addEventListener("click", insertText);
    }
})