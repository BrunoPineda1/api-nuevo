const express = require('express');
const app = express();

// Define una ruta que responda con "Hola Mundo"
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

// Configura el puerto para que Vercel lo maneje automáticamente
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
