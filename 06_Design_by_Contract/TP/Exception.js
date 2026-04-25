function divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Nilai harus bilangan bulat");
    }

    if (b === 0) {
        throw new Error("Tidak bisa pembagian dengan nol");
    }

    return a / b;
}

try {
    console.log(divide(10, 2));
    divide(10, 0);              
} catch (error) {
    console.error("Error:", error.message);
}