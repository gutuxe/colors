const express = require('express');
const app = express();

const { config } = require('./src/config');

app.use(express.static(config.publicSchemeDirectory));

const { getScheme } = require('./src/scheme');

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/scheme', (req, res) => {
  res.send('Define your scheme!');
})

app.get('/scheme/:scheme', (req, res) => {
  res.send('Define your color!');
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