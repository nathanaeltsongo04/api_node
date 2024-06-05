module.exports = (sequelize, DataTypes)=>{
    const Inscription = sequelize.define("inscription",{
        annee: {
            type: DataTypes.STRING,
            allowNull: false
        },
        promotion: {
            type: DataTypes.STRING,
        },
        statut: {
            type: DataTypes.BOOLEAN
        },
    })

    return Inscription
}