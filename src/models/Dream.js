const { DataTypes,Model } = require('sequelize')


class Dream extends Model
{
    static init(sequelize)
    {
        super.init(
        {
            title: DataTypes.STRING
        },{  sequelize })
    }


    static associate(models)
    {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
    }

}


module.exports = Dream
