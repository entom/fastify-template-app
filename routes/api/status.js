const opts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          status: {type: 'string'}
        }
      }
    }
  }
}

async function routes(fastify, options) {
  fastify.get('/status', opts, async (request, reply) => {
    return {status: 'ok'}
  })
}

module.exports = routes
