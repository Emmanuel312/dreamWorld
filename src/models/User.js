const { DataTypes,Model } = require('sequelize')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/auth')

class User extends Model
{
    static init(sequelize)
    {
        super.init(
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            category: DataTypes.STRING
        },
        { 
            sequelize,
            hooks: 
            {
                beforeCreate: hashPassword
            }
        })
    }

    static associate(models)
    {
        this.hasMany(models.Dream, { foreignKey: 'user_id', as: 'dreams' })
    }

}

// Hooks
const hashPassword = async (user) =>
{
    user.password = await bcrypt.hash(user.password,10)
}

// Custom Methods
User.prototype.comparePassword = function(password)
{
    return bcrypt.compare(password,this.password)
}

User.prototype.generateToken = function()
{
    return jwt.sign({ id: this.id }, secret, { expiresIn: '1d' })
}

module.exports = User
