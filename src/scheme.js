const fs = require('fs');
const { config } = require('./config');

// Require Schemes
const template = {
  complementary: require('./schemes/complementary/complementary'),
  analogous: require('./schemes/analogous/analogous'),
  triadic: require('./schemes/triadic/triadic'),
  shades: require('./schemes/shades/shades')
}

const scheme = {
  getScheme: async function(schemeName, schemeColor) {
    const loneColor = schemeColor.substring(0,6);

    if (!fs.existsSync(config.publicSchemeDirectory + schemeName + '/' + loneColor + '.css')) {
      if (template[schemeName]) {
        await template[schemeName].prepareNewColorScheme(schemeName, loneColor);
      } else {
        throw new Error('Scheme not found: ' + schemeName);
      }
    }

    return '/' + config.publicSchemeDirectory + schemeName + '/' + loneColor + '.css';
  }
}

exports.getScheme = scheme.getScheme;