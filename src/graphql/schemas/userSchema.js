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

   

`

const query = 
`
    user(id: ID!) : User
    users: [User],
    userDreams(id: ID!) : UserDreams
`

const mutation = 
`
    createUser(name: String!, email: String!, password: String!, category: String) : User
`

module.exports = { schemaType, query, mutation } 
