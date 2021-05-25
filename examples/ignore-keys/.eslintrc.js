const path = require('path');

module.exports = {
  root: true, // since this example folder is embedded into the project. just ignore this.
  extends: [
    'plugin:@rafaelgomesxyz/i18n-json/recommended'
  ],
  settings: {
    /*
      None of the key paths listed below
      will be checked for valid i18n syntax
      nor used in the identical-keys rule comparison.
      (if the key path points to an object, the object is ignored)
    */
    '@rafaelgomesxyz/i18n-json/ignore-keys': [
      'translationMetadata', 
      '*.inProgressTranslationKey' // No key path ending in `inProgressTranslationKey` will be checked.
    ]
  },
  rules: {
    // option for this rule the absolute path to the comparision file the plugin should require. 
    '@rafaelgomesxyz/i18n-json/identical-keys': [2, {
      // each file's key structure compared with this file.
      filePath: path.resolve('./translations/en-US/index.json')
    }] 
  }
}
