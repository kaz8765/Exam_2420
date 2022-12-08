// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'server _' }//server x..fetch , axios, get, 
//need to change 2 things on this script, local host 5050 
//and end point listed below
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 5050,host: '120.0.0.1'  })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()