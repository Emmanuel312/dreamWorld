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

    createDream({ title, public, user_id })
    {
        const dream = 
        {
            title,
            public,
            user_id
        }

        return Dream.create(dream)

    }
}