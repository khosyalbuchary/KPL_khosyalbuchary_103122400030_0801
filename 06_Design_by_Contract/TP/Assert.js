const assert = require('assert');

function divide(a, b) {
    assert(typeof a === 'number' && typeof b === 'number', 'Nilai harus bilangan bulat');
    assert(b !== 0, 'Tidak bisa pembagian dengan nol');

    return a / b;
}

try {
    console.log(divide(10, 2)); 
    divide(10, 0);             
} catch (error) {
    console.error("Error:", error.message);
}