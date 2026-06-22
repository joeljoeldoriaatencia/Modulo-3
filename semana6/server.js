const express = require('express');
const app = express();

// Esta línea activa al "traductor" de paquetes JSON que vimos en la teoría
app.use(express.json());

// Aquí creamos una ruta de tipo POST llamada /registro
app.post('/registro', (req, res) => {

  // Sacamos los datos que el usuario guardó en el "body" de la petición
  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  // Le respondemos al usuario confirmando que recibimos sus datos
  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });

});

app.post('/incidencia', (req, res) => {

  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });

});

// Le decimos a nuestra computadora que abra el puerto 3000 para escuchar peticiones
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});