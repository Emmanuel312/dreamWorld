const Dream = require('../../models/Dream')
const CustomError = require('../errorHandler')

module.exports = 
{
    async dream({ id })
    {
        try
        {
            const dream = await Dream.findByPk(id)
            if(!dream) throw new CustomError('Dream not Found!!!')

            return dream
        }
        catch(err)
        {
            throw new CustomError(err)
        }
    },

    async dreams({ page = 1 , limit = 10 })
    {
        try
        {
        
            const options = 
            {
                order: [['created_at','ASC']],
                page,
                paginate: limit
            }
            const dreams = await Dream.paginate(options)
            console.log(dreams)
            return dreams
        }

        catch(err)
        {
            throw new CustomError(err)
        }
    },

    createDream({ title, body, public, user_id })
    {
        
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