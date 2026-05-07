const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Menu Makanan',
      version: '1.0.0',
      description: 'Sebuah API sederhana tentang menu makanan yang kami sediakan',
    },
    paths: {
      '/menu': {
        get: {
          summary: 'Menampilkan daftar semua nama kategori menu yang ada',
          responses: {
            200: { description: 'Daftar kategori berhasil diambil' }
          }
        }
      },
      '/menu/{category}': {
        get: {
          summary: 'Menu-menu makanan yang tersedia',
          parameters: [
            {
              name: 'category',
              in: 'path',
              required: true,
              description: 'Nama kategori menu (contoh: bakmi atau rames)',
              schema: {
                type: 'string'
              }
            }
          ],
          responses: {
            200: { description: 'Menu berhasil ditampilkan' },
            404: { description: 'Menu tidak ditemukan' }
          }
        }
      }
    }
  },
  apis: [], 
};

const specs = swaggerJsdoc(options);
module.exports = { specs, swaggerUi };