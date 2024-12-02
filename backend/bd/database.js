const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('universidad','root','root111217',{
    host:'localhost',
    dialect:'mysql'
})

module.exports=sequelize;