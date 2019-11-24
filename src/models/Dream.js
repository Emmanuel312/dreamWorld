const { DataTypes,Model } = require('sequelize')
const sequelizePaginate = require('sequelize-paginate')

class Dream extends Model
{
    static init(sequelize)
    {
        super.init(
        {
            title: DataTypes.STRING,
            body: DataTypes.STRING,
            public: DataTypes.BOOLEAN,
        },{  sequelize })
    }


    static associate(models)
    {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
        this.belongsToMany(models.Category, { foreignKey: 'dream_id', as: 'categories', through: 'dreams_categories' })
    }

}

sequelizePaginate.paginate(Dream)

module.exports = Dream
