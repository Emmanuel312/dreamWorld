const Dream = require('../../models/Dream')

module.exports = 
{
    dream({ id })
    {
        return Dream.findByPk(id)
    },

    dreams()
    {
        return Dream.findAll()
    },

    createDream({ title, body, public, user_id })
    {
        console.log(body)
        const dream = 
        {
            title,
            body,
            public,
            user_id
        }

        return Dream.create(dream)

    }
}