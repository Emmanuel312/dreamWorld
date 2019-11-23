// Schemas possuem 3 tipos -> Query, Mutations e Subscription

const schemaType = 
`
    type User
    {
        id: ID
        name: String!
        email: String!
        password: String!
        category: String
    }
`
// Declaracao dos resolvers de consulta
const query = 
`
    user(id: ID!) : User
    users: [User]
`

// Declaracao dos resolvers de manipulacao
const mutation = 
`
    createUser(name: String!, email: String!, password: String!, category: String) : User
`

module.exports = { schemaType, query, mutation } 
