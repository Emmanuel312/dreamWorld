require('./database')
const express = require('express')
const app = express()
const expressGraphql = require('express-graphql')
// const requireDir = require('require-dir')
// const schemas = requireDir('./graphql/schemas')
// const resolvers = requireDir('./graphql/resolvers')
const schema = require('./graphql/schemas/userSchema')
const resolver = require('./graphql/resolvers/userResolver')



app.use('/graphql', expressGraphql({ schema, rootValue: resolver, graphiql: true }))


app.listen(3000)