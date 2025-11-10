// Cargar el módulo HTTP
const http = require('http');

// Crear el servidor
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('¡Hola desde Node.js!');
});

// Escuchar en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
  
});