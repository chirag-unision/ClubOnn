const Sequelize= require('sequelize');

const sequelize= new Sequelize('clubonndb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(()=> {
    console.log('Connected')
})
.catch(err => {
    console.error('Unable to connect to the database:', err)
})

module.exports= sequelize;