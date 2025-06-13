document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("revealBtn");
    const reveal = document.getElementById("revealMessage");

    btn.addEventListener("click", () => {
        reveal.classList.remove("hidden");
        btn.style.display = "none";
    });
});
function toggleMusic() {
    const audio = document.getElementById("bg-music");
    audio.muted = !audio.muted;
}
