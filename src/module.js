import { resolve } from 'path'

const defaults = {
  serverUrl: process.env.THUMBOR_SERVER_URL || 'http://localhost:8888'
}

export default function NuxtThumborModule (moduleOptions) {
  const options = {
    ...defaults,
    ...(this.options.thumbor || {}),
    ...(moduleOptions || {})
  }

  this.options.publicRuntimeConfig = this.options.publicRuntimeConfig || {}
  this.options.publicRuntimeConfig.thumbor = this.options.publicRuntimeConfig.thumbor || {}
  this.options.publicRuntimeConfig.thumbor.serverUrl = this.options.publicRuntimeConfig.thumbor.serverUrl || options.serverUrl

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'thumbor.js'
  })
}

module.exports.meta = require('../package.json')
