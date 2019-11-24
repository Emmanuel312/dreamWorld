const User = require('../../models/User')

module.exports = 
{
    async user({ id })
    {
        const user = await User.findByPk(id)
        if(!user) return user

        return user
    },

    users()
    {
        return User.findAll()
    },

    createUser(params)
    {
        const { name, email, password } = params
        
        const user = 
        {
            name,
            email,
            password,
            category: !!params.category? params.category : null
        }

        return User.create(user)

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