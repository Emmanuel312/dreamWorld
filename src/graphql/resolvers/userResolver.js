const User = require('../../models/User')

module.exports = 
{
    user({ id })
    {
        return User.findByPk(id)
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

    }
}