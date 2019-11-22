const { DataTypes,Model } = require('sequelize')


class User extends Model
{
    static init(sequelize)
    {
        super.init(
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING
        },{  sequelize })
    }

    static associate(models)
    {
        this.hasMany(models.Dream, { foreignKey: 'user_id', as: 'dreams' })
    }

}


module.exports = User
