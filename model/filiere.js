module.exports = (sequelize, DataTypes)=>{
    const Filiere = sequelize.define("filiere",{
        designation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        section: {
            type: DataTypes.STRING,
            allowNull: false
        },
        statut: {
            type: DataTypes.BOOLEAN
        },
    })

    return Filiere
}