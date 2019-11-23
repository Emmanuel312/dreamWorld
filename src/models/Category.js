const { DataTypes,Model } = require('sequelize')


class Category extends Model
{
    static init(sequelize)
    {
        super.init(
        {
            name: DataTypes.STRING,
            dreams_amount: DataTypes.INTEGER
        },{  sequelize })
    }


    static associate(models)
    {
        this.belongsToMany(models.Dream, { foreignKey: 'category_id', as: 'categories', through: 'dreams_categories' })
    }

}


module.exports = Category
