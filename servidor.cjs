const http = require('http');
const chalk = require('chalk');

const host = 'localhost';
const port = 8000; // Puedes cambiarlo a 8080 si lo prefieres

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const responseData = JSON.stringify({ nombre: 'TuNombre', mensaje: 'Hola desde el servidor' });
  res.end(responseData);
});

server.listen(port, host, () => {
  console.log(chalk.green(`Servidor escuchando en http://${host}:${port}`));
});