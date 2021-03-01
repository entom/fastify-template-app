const opts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {type: 'string'}
        }
      }
    }
  }
}

async function routes(fastify, options) {
  fastify.get('/', opts, async (request, reply) => {
    reply.view('/templates/index.ejs')
  })
}

module.exports = routes
