const db = require('../sequelize/connector')

const Filiere = db.filiere
const True = true
const False = false

// create
const addFiliere = async (req, res)=>{
    let info = {
        designation: req.body.designation,
        section: req.body.section,
        statut: req.body.statut ? req.body.statut : true,
    }

    const filiere = await Filiere.create(info)
    res.status(200).send(filiere)
}

// getall

module.exports = {
    addFiliere
}