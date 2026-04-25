require('dotenv').config();
const axios = require('axios');

async function konversiMataUang(jumlahIDR) {
    try {
        const url = process.env.BASE_API;
        const response = await axios.get(url);
        const rates = response.data.idr;
        const kursCNH = rates.cnh;
        const kursEUR = rates.eur;

        const hasilCNH = jumlahIDR * kursCNH;
        const hasilEUR = jumlahIDR * kursEUR;
        const formatTanggal = new Intl.DateTimeFormat('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(new Date());
        const formatIDR = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(jumlahIDR).replace(/,00$/, '');
        const formatCNH = new Intl.NumberFormat('zh-CN', {
            style: 'currency',
            currency: 'CNH'
        }).format(hasilCNH);
        const formatEUR = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(hasilEUR);
        console.log(`Kurs ${formatIDR} pada ${formatTanggal} adalah ${formatCNH} dan ${formatEUR}`);

    } catch (error) {
        console.error("Terjadi kesalahan:", error.message);
    }
}
const main = async () => {
    await konversiMataUang(25000);
    await konversiMataUang(50000);
    await konversiMataUang(100000);
};

main();