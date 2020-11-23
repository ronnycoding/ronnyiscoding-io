const withPlugins = require("next-compose-plugins");
const withImages = require('next-images');
require('dotenv').config()

module.exports = withPlugins(
  [
    [withImages],
  ],
  {
    images: {
      domains: [
        'media.graphcms.com'
      ]
    }
  }
)