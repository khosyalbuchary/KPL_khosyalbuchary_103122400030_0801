const str = "Bar bar bar";
function hitung(text, mode) {
    let total = 0;

    for (const c of text) {
        if (mode === "semua") {
            total++;
        }
        else if (mode === "huruf") {
            if (c !== " ") {
                total++;
            }
        }
        else {
            return "Mode tidak valid! Gunakan 'semua' atau 'huruf'";
        }
    }

    return total;
}
console.log("Hitung semua karakter:");
console.log(hitung(str, "semua")); 

console.log("\nHitung huruf saja:");
console.log(hitung(str, "huruf")); 

hitung(str, "huruf");