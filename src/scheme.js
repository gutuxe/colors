const fs = require('fs');
const { config } = require('./config');

// Require Schemes
const basic = require('./schemes/basic/basic');

const scheme = {
  getScheme: async function(schemeName, schemeColor) {
    const loneColor = schemeColor.substring(0,6);

    if (!fs.existsSync(config.publicSchemeDirectory + schemeName + '/' + loneColor + '.css')) {
      if (schemeName === 'basic') {
        await basic.prepareNewColorScheme(schemeName, loneColor);
      } else {
        console.log('Scheme not found');
      }
    }

    return '/' + config.publicSchemeDirectory + schemeName + '/' + loneColor + '.css';
  }
}

exports.getScheme = scheme.getScheme;