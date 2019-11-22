const Sequelize = require('sequelize')
const sequelizeConfig = require('../config/database')
const requireDir = require('require-dir')
const modelsObj = requireDir('../models')
const Models = Object.values(modelsObj)

const connection = new Sequelize(sequelizeConfig)

// conexao do model ao sequelize
Models.forEach(model =>
{
    model.init(connection)
})

Models.forEach(model =>
{ 
    if(!!model.associate) 
        model.associate(connection.models)
})


module.exports =  connection