module.exports = (sequelize, DataTypes)=>{
    const Etudiant = sequelize.define("etudiant",{
        matricule: {
            type: DataTypes.STRING,
            allowNull: false
        },
        identite: {
            type: DataTypes.STRING
        },
        sexe: {
            type: DataTypes.STRING
        },
        lieunaissance: {
            type: DataTypes.STRING
        },
        datenaissance: {
            type: DataTypes.STRING
        },
        province: {
            type: DataTypes.STRING
        },
        annee: {
            type: DataTypes.STRING
        },
        section: {
            type: DataTypes.STRING
        },
        pourcent: {
            type: DataTypes.STRING
        },
        adresse: {
            type: DataTypes.TEXT
        },
        photo: {
            type: DataTypes.TEXT
        },
    })

    return Etudiant
}