'use strict'

const fastify = require('fastify')
const helmet = require('fastify-helmet');

function build(opts = {}) {
  const app = fastify(opts)

  app.register(require('point-of-view'), {
    engine: {
      ejs: require('ejs')
    }
  })

  app.register(helmet, {
    contentSecurityPolicy: false
  })


  app.register(require('./routes/index'))
  app.register(require('./routes/api/status'), {prefix: '/api'})

  return app
}

module.exports = build
