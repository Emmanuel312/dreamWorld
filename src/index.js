require('./database')
const express = require('express')
const app = express()
const expressGraphql = require('express-graphql')
const resolvers = require('./graphql/resolvers')
const schemas = require('./graphql/schemas')

app.use('/graphql', expressGraphql(
{   
    schema: schemas, 
    rootValue: resolvers,
    graphiql: true,   
    customFormatErrorFn: error =>
    ({
        messsage: error.message,
        path: error.path,
        locations: error.locations,
    })
}))

app.listen(3000)