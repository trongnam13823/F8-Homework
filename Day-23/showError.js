export default function showError(screen, btn) {
    screen.classList.add("error");
    btn.disabled = true;

    const handleAnimationEnd = () => {
        screen.classList.remove("error");
        btn.disabled = false;
        screen.removeEventListener("animationend", handleAnimationEnd);
    };

    screen.addEventListener("animationend", handleAnimationEnd);
}