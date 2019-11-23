const { buildSchema } = require('graphql')


// Schemas possuem 3 tipos -> Query, Mutations e Subscription
const UserSchema = buildSchema(`
    type User
    {
        id: ID
        name: String!
        email: String!
        password: String!
        category: String
    }

    type Query
    {
        user(id: ID!) : User
        users: [User]
    }

    type Mutation
    {
        createUser(name: String!, email: String!, password: String!, category: String) : User
    }
`)



module.exports = UserSchema
