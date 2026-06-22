const express = require('express');
const app = express();

app.use(express.json());

// Aquí declaramos nuestro Array vacío. Será la "caja" en memoria para guardar los reportes.
let reportes = [];

// RUTA GET: Sirve para consultar la lista de reportes
app.get('/reportes', (req, res) => {
  res.json(reportes);
});

// RUTA POST: Sirve para agregar un reporte nuevo a la lista
app.post('/reportes', (req, res) => {

  const reporte = {
    id: reportes.length + 1, // Le asigna un número único automáticamente
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  // Guardamos el nuevo reporte dentro del Array usando .push()
  reportes.push(reporte);

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });

});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});