const editorElement = document.getElementById("editor-kecil")

const charCountElement = document.getElementById("hf")
const hurufBesarElement = document.getElementById("hb")
const hurufKecilElement = document.getElementById("hk")

const tombolBesar = document.getElementById("huruf-besar")
const tombolKecil = document.getElementById("huruf-kecil")

editorElement.addEventListener("input", () => {

const text = editorElement.value

charCountElement.textContent = text.length

hurufBesarElement.textContent = (text.match(/[A-Z]/g) || []).length

hurufKecilElement.textContent = (text.match(/[a-z]/g) || []).length

})

tombolBesar.addEventListener("click", () => {

editorElement.value = editorElement.value.toUpperCase()

})

tombolKecil.addEventListener("click", () => {

editorElement.value = editorElement.value.toLowerCase()

})