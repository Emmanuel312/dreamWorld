'use strict'

module.exports =
{
    up: (queryInterface, Sequelize) =>
    {
       
        return queryInterface.addColumn('dreams','body',
        {
            type: Sequelize.STRING,
        })
        
    },

    down: (queryInterface, Sequelize) =>
    {
        
        return queryInterface.removeColumn('dreams','body')
        
    }
}
