const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Tugas Mandiri - Game Tebak Angka',
      version: '1.0.0',
      description: 'API Tebak Angka berdasarkan Nama (Aturan: Angka tetap per nama, Case Sensitive, 1-100)',
    },
    paths: {
      '/': {
        post: {
          summary: 'Kirim tebakan angka kamu di sini',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    nama: { type: 'string', example: 'Hamid' },
                    tebakan: { type: 'integer', example: 24 }
                  }
                }
              }
            }
          },
          responses: {
            200: { description: 'Hasil Jawaban' }
          }
        }
      }
    }
  },
  apis: [], 
};

const specs = swaggerJsdoc(options);
module.exports = { specs, swaggerUi };