const fs = require('fs');
const { config } = require('../../config');
const { hexToHSL } = require('../../utils');

const basic = {
  prepareNewColorScheme: async function(schemeName, schemeColor) {
    try {
      const data = await fs.promises.readFile(config.schemeDirectory + schemeName + '/' + schemeName + '.css', { encoding: 'utf8' });

      const hsl = hexToHSL('#' + schemeColor);
      const mapObject = {
        BASE_COLOR_NAME: schemeColor,
        BASE_COLOR_HEX: '#' + schemeColor,
        BASE_COLOR_H: hsl[0],
        BASE_COLOR_S: hsl[1],
        BASE_COLOR_L: hsl[2]
      }

      await fs.promises.writeFile(
        config.publicSchemeDirectory + schemeName + '/' + schemeColor + '.css', 
        data.replace(/BASE_COLOR_NAME|BASE_COLOR_HEX|BASE_COLOR_H|BASE_COLOR_S|BASE_COLOR_L/g, function(matched) { 
          return mapObject[matched]; 
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
}

exports.prepareNewColorScheme = basic.prepareNewColorScheme;