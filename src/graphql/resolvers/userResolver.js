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

    async register({ name, email, password, category = null })
    {
        try
        {
                    
            if(!!(await User.findOne({ where: { email:email } }))) throw new CustomError('Email already exists!!!')

            const user = await User.create({ name, email, password, category })

            return { user, token: user.generateToken() }
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
    },

    async login({ email, password })
    {
        try
        {
            const user = await User.findOne({ where: { email } })

            if(!user) throw new CustomError('User not found!!!')

            if(!(await user.comparePassword(password))) throw new CustomError('Incorrect password !!!')

            return { user, token: user.generateToken() }
        }
        catch(err)
        {
            throw new CustomError(err)
        }
    }
}