const remarkEncryptedBlock = require('remark-encrypted-block')

module.exports.setParserPlugins = (options) => {
  if (!options || !options.key) {
    throw Error('gatsby-remark-encrypted-block missing required "key" option');
  }
  return [[remarkEncryptedBlock, options.key]]
}
