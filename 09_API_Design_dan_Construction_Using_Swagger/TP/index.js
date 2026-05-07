const express = require('express');
const { specs, swaggerUi } = require('./swagger.js');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

const menuData = {
  bakmi: {
    "bakmi ayam spesial": 25000,
    "bakmi rica-rica": 28000,
    "bakmi komplit (bakso pangsit)": 35000
  },
  rames: {
    "nasi rames biasa": 15000,
    "nasi rames rendang": 25000,
    "nasi rames telur balado": 18000
  }
};

app.get('/menu', (req, res) => {
  res.json({ kategori_tersedia: Object.keys(menuData) });
});

app.get('/menu/:category', (req, res) => {
  const category = req.params.category;
  const menu = menuData[category];
  if (menu) {
    res.json(menu);
  } else {
    res.status(404).json({ error: "Menu tidak ditemukan" });
  }
});

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}/docs`);
});