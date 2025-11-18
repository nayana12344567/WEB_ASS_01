document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();

    const btn = document.getElementById("learnMore");
    if (btn) {
        btn.addEventListener("click", () => {
            document.querySelector(".about").scrollIntoView({ behavior: "smooth" });
        });
    }
});
