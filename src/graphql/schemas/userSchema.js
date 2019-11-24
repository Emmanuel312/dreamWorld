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

    type UserDreams
    {
        user: User!,
        dreams: [Dream]
    }

    type UserAndToken
    {
        user: User!
        token: String!
    }
    

`

const query = 
`
    user(id: ID!) : User
    users: [User],
    userDreams(id: ID!) : UserDreams
`

const mutation = 
`
    register(name: String!, email: String!, password: String!, category: String) : UserAndToken
    login(email: String!, password: String!): UserAndToken
`

module.exports = { schemaType, query, mutation } 
