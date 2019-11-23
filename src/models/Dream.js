const { DataTypes,Model } = require('sequelize')


class Dream extends Model
{
    static init(sequelize)
    {
        super.init(
        {
            title: DataTypes.STRING,
            public: DataTypes.BOOLEAN,
        },{  sequelize })
    }


    static associate(models)
    {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
        this.belongsToMany(models.Category, { foreignKey: 'dream_id', as: 'categories', through: 'dreams_categories' })
    }

}


module.exports = Dream
