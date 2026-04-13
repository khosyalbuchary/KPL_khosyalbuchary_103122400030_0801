const { zzzzOrNum, fizzBuzz } = require('./index');

console.log("Testing zzzzOrNum...");
console.log(zzzzOrNum(3) === "Fizz" ? "✅ Pass" : "❌ Fail");
console.log(zzzzOrNum(5) === "Buzz" ? "✅ Pass" : "❌ Fail");
console.log(zzzzOrNum(15) === "FizzBuzz" ? "✅ Pass" : "❌ Fail");
console.log(zzzzOrNum(2) === 2 ? "✅ Pass" : "❌ Fail");
console.log("\nTesting fizzBuzz array...");
const input = [1, 3, 5, 15];
const output = fizzBuzz(input);
const expected = [1, "Fizz", "Buzz", "FizzBuzz"];

if (JSON.stringify(output) === JSON.stringify(expected)) {
    console.log("✅ Semua tes berhasil!");
} else {
    console.log("❌ Ada yang salah di logika array kamu.");
}