const db = require('../sequelize/connector')

const Inscription = db.inscription
const True = true
const False = false

// create
const addInscription = async (req, res)=>{
    let info = {
        annee: req.body.annee,
        statut: req.body.statut,
        promotion: req.body.promotion,
        etudiant_id: req.body.etudiant_id,
        filiere_id: req.body.filiere_id,
    }

    const inscription = await Inscription.create(info)
    res.status(200).send(inscription)
}

// getall

module.exports = {
    addInscription
}