/**
 * Fungsi zzzzOrNum sesuai aturan:
 * 1. Jika habis dibagi 3 dan 5 -> "FizzBuzz"
 * 2. Jika habis dibagi 3 -> "Fizz"
 * 3. Jika habis dibagi 5 -> "Buzz"
 * 4. Jika tidak keduanya -> return angka aslinya
 * * @param {number} value - Angka bulat yang akan dicek
 * @returns {string|number}
 */
function zzzzOrNum(value) {
  if (value % 3 === 0 && value % 5 === 0) {
    return "FizzBuzz";
  } else if (value % 3 === 0) {
    return "Fizz";
  } else if (value % 5 === 0) {
    return "Buzz";
  } else {
    return value;
  }
}

/**
 * Fungsi fizzBuzz yang menerima array (larik)
 * dan memprosesnya menggunakan fungsi zzzzOrNum
 * * @param {number[]} sequence - Array berisi angka-angka bulat
 * @returns {(string|number)[]} - Array hasil transformasi
 */
function fizzBuzz(sequence) {
  const newSequence = sequence.map((e) => zzzzOrNum(e));
  return newSequence;
}

// Export supaya bisa dibaca oleh file test.js
module.exports = {
  fizzBuzz: fizzBuzz,
  zzzzOrNum: zzzzOrNum,
};