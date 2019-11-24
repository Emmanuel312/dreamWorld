// Schemas possuem 3 tipos -> Query, Mutations e Subscription
const schemaType = 
`
    type Dream
    {
        id: ID
        title: String!
        body: String
        public: Boolean!
        user_id: ID!
    }

    type DreamsPaginate
    {
        docs: [Dream]
        pages: Int
        total: Int
    }
`

const query = 
`
    dream(id: ID!) : Dream
    dreams(page: Int,limit: Int): DreamsPaginate
`

const mutation = 
`
    createDream(title: String!, body: String!, public: Boolean!, user_id: ID) : Dream
`

module.exports = { schemaType, query, mutation} 
