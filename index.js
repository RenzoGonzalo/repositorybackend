require('dotenv').config(); // Cargar variables de entorno

const http = require('http'); // Corregido: importamos el módulo http

// Controlador de la solicitud
function requestController(req, res) {
    console.log('Bienvenidos al curso');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Servidor funcionando correctamente');
}

// Crear el servidor
const server = http.createServer(requestController);

// Usar el puerto desde las variables de entorno o el puerto 3000 como valor por defecto
const PORT = process.env.PORT || 3000; 

// Iniciar el servidor
server.listen(PORT, function() {
    console.log("Aplicación corriendo en el puerto: " + PORT);
});
