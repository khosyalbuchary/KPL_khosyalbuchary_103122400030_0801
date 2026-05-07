export function hitungHuruf(teks) {
    // Regex [a-zA-Z] hanya mengambil alfabet
    const match = teks.match(/[a-zA-Z]/g);
    return match ? match.length : 0;
}

export function hitungKata(teks) {
    const kata = teks.trim().split(/\s+/);
    return teks.trim() === "" ? 0 : kata.length;
}