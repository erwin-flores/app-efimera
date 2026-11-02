const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`<!doctype html>
<html lang="es">
<head><meta charset="utf-8"><title>Ambientes efímeros</title></head>
<body style="font-family:Arial,sans-serif;max-width:640px;margin:48px auto">
  <h1>Ambientes efímeros</h1>
  <p>Aplicación de práctica de la Unidad 2, desplegada desde GitHub.</p>
  <p>Prueba la ruta <a href="/sumar?a=2&b=3">/sumar?a=2&amp;b=3</a>.</p>
</body>
</html>`);
});

app.get("/sumar", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: "Envía a y b como números" });
  }
  res.json({ a, b, resultado: a + b });
});

module.exports = app;
