const express = require('express');
const { specs, swaggerUi } = require('./swagger.js');
const app = express();
const PORT = 5000; 

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

const generateTarget = (name) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash % 100) + 1;
};

// ENDPOINT TUGAS MANDIRI
app.post('/', (req, res) => {
  const { nama, tebakan } = req.body;

  if (!nama || tebakan === undefined) {
    return res.status(400).json({ error: "Isi nama dan tebakan dulu!" });
  }

  const target = generateTarget(nama);
  let jawaban = "";

  if (tebakan === target) {
    jawaban = `Benar sekali! Tebakannya adalah ${target}.`;
  } else if (tebakan > target) {
    jawaban = "Tebakanmu terlalu tinggi!";
  } else {
    jawaban = "Tebakanmu terlalu rendah!";
  }

  res.json({ jawaban });
});

app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`GAME TEBAK ANGKA JALAN!`);
  console.log(`Buka: http://localhost:${PORT}/docs`);
  console.log(`=========================================`);
});