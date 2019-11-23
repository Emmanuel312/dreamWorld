'use strict'

module.exports =
{
    up: (queryInterface, Sequelize) =>
    {
       
        return queryInterface.createTable('dreams_categories',
        { 
            id:
            {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            
            dream_id:
            {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'dreams', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },

            category_id:
            {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'categories', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
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
        
        return queryInterface.dropTable('dreams_categories')
        
    }
}
