const dbConfig = require('../config/db.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB, 
    dbConfig.USER,
    dbConfig.PASSWORD,{
        dialect: dbConfig.dialect,
        host: './dev.sqlite'
    }
)

sequelize.authenticate()
.then(()=>{
    console.log('connected...')
})
.catch(err =>{
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.etudiant = require('../model/etudiant.js')(sequelize, DataTypes)
db.inscription = require('../model/inscription.js')(sequelize, DataTypes)
db.filiere = require('../model/filiere.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(()=>{
    console.log('yes re-sync done...')
})

db.etudiant.hasMany(db.inscription, {
    foreignKey: 'etudiant_id',
    as: 'inscription'
})
db.inscription.belongsTo(db.etudiant, {
    foreignKey: 'etudiant_id',
    as: 'etudiant'
})
db.filiere.hasMany(db.inscription, {
    foreignKey: 'filiere_id',
    as: 'inscrit'
})
db.inscription.belongsTo(db.filiere, {
    foreignKey: 'filiere_id',
    as: 'filiere'
})

module.exports = db