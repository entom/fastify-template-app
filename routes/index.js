async function routes(fastify, options) {

  fastify.get('/', async (request, reply) => {
    return {hello: 'world'}
  })

  fastify.get('/status', async (request, reply) => {
    return {status: 'ok'}
  })

}

module.exports = routes
