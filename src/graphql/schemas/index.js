const { buildSchema } = require('graphql')
const requireDir = require('require-dir')
const schemasObj = requireDir('../schemas')
const schemasArray = Object.values(schemasObj)

const types = schemasArray.map(schema => schema.schemaType)
const queries = schemasArray.map(schema => schema.query)
const mutations = schemasArray.map(schema => schema.mutation)

const Types = types.join(' ')

// Declaracao dos resolvers de consulta
const Queries = `
    type Query
    {
        ${queries.join(' ')}
    }
`
// Declaracao dos resolvers de manipulacao
const Mutations = `
    type Mutation
    {
        ${mutations.join(' ')}
    }
`
const schemas = `${Types} ${Queries} ${Mutations}`



module.exports = buildSchema(schemas)
