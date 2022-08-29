const express = require('express');
const app = express();
const path = require('path');

const { config } = require('./src/config');

app.use(express.static(config.publicSchemeDirectory));

const { getScheme } = require('./src/scheme');

app.get('/', (req, res) => {
  res.redirect('/scheme');
})

app.get('/scheme', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/views/scheme.html'));
})

app.get('/scheme/:scheme', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/views/color.html'));
})

app.get('/scheme/:scheme/:color', async (req, res) => {
  const requestedScheme = req.params.scheme;
  const requestedColor = req.params.color.toUpperCase();

  const schemePath = await getScheme(requestedScheme, requestedColor);

  res.sendFile(__dirname + schemePath);
})

app.listen(config.port, () => {
  console.log(`Disturbe listening on port ${config.port}`)
})