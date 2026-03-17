const buttonLightElement = document.getElementById("tombol-terang");
const buttonDarkElement = document.getElementById("tombol-gelap");

buttonLightElement.addEventListener("click", () => {
    document.documentElement.classList.remove("mode-gelap");
});

buttonDarkElement.addEventListener("click", () => {
    document.documentElement.classList.add("mode-gelap");
});