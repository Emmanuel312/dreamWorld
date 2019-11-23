'use strict'

module.exports =
{
    up: (queryInterface, Sequelize) =>
    {
       
        return queryInterface.createTable('categories',
        { 
            id:
            {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
                
            name: 
            {
                type: Sequelize.STRING,
                allowNull: false
            },

            dreams_amount:
            {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },

            created_at:
			{
				type: Sequelize.DATE,
				allowNull: false,
            },
           
			updated_at:
			{
				type: Sequelize.DATE,
				allowNull: false,
			}
        })
        
    },

    down: (queryInterface, Sequelize) =>
    {
        
        return queryInterface.dropTable('categories')
        
    }
}
