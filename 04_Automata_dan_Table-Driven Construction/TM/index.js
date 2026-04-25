const btnLight = document.getElementById("tombol-terang");
const btnDark = document.getElementById("tombol-gelap");
const btnSepia = document.getElementById("tombol-sepia");

btnLight.addEventListener("click", () => {
    document.body.classList.remove("dark-mode", "sepia-mode");
    document.body.classList.add("light-mode");
});

btnDark.addEventListener("click", () => {
    document.body.classList.remove("light-mode", "sepia-mode");
    document.body.classList.add("dark-mode");
});

btnSepia.addEventListener("click", () => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add("sepia-mode");
});

textarea.addEventListener("input", () => {
    const text = textarea.value;

    let total = text.length;
    let upper = (text.match(/[A-Z]/g) || []).length;
    let lower = (text.match(/[a-z]/g) || []).length;

    info.textContent = `Huruf: ${total}, huruf besar: ${upper} huruf kecil: ${lower}`;
});

btnBesar.addEventListener("click", () => {
    textarea.value = textarea.value.toUpperCase();
});

btnKecil.addEventListener("click", () => {
    textarea.value = textarea.value.toLowerCase();
});

btnLight.addEventListener("click", () => {
    document.documentElement.classList.remove("dark-mode", "sepia-mode");
    document.documentElement.classList.add("light-mode");
});

btnDark.addEventListener("click", () => {
    document.documentElement.classList.remove("light-mode", "sepia-mode");
    document.documentElement.classList.add("dark-mode");
});

btnSepia.addEventListener("click", () => {
    document.documentElement.classList.remove("light-mode", "dark-mode");
    document.documentElement.classList.add("sepia-mode");
});