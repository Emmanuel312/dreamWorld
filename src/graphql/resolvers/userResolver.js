const User = require('../../models/User')
const CustomError = require('../errorHandler')

module.exports = 
{
    async user({ id })
    {
        try
        {
            const user = await User.findByPk(id)
            if(!user) throw new CustomError('User not Found!!!')

            return user
        }
        catch(err)
        {
            throw new CustomError(err)
        }
        
    },

    users()
    {

        return User.findAll()
    },

    async createUser({ name, email, password, category = null })
    {
        try
        {
                    
            if(!!(await User.findOne({ where: { email:email } }))) throw new CustomError('User already exists!!!')

            const user = 
            {
                name,
                email,
                password,
                category
            }

            return User.create(user)
        }
        catch(err)
        {
            throw new CustomError(err)
        }

    },
    async userDreams({ id })
    {
        const userDreams = (await User.findByPk(id, { include: { association: 'dreams' } })).get({ plain: true })

        

        const user =
        {
            id: userDreams.id,
            name: userDreams.name,
            email: userDreams.email,
            password: userDreams.password,
            category: userDreams.password,
        }

        return { user, dreams: userDreams.dreams  }
    }
}