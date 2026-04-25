const waktuSekarang = new Date();

const options = {
  weekday: 'long', 
  day: 'numeric',  
  month: 'long',   
  year: 'numeric'  
};

const formatter = new Intl.DateTimeFormat('id-ID', options);
console.log(formatter.format(waktuSekarang));