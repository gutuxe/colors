const express = require('express');
const app = express();

const { config } = require('./src/config');

app.use(express.static(config.publicSchemeDirectory));

const { getScheme } = require('./src/scheme');

app.get('/', (req, res) => {
  res.send('Add /scheme to your URL');
})

app.get('/scheme', (req, res) => {
  res.send('Add a scheme to your URL (e.g. /scheme/complementary/ff0000)');
})

app.get('/scheme/:scheme', (req, res) => {
  res.send('Add a hex color to your URL (e.g. /scheme/complementary/ff0000)');
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