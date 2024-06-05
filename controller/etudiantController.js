const db = require('../sequelize/connector')

const Etudiant = db.etudiant
const Inscription = db.inscription
const Filiere = db.filiere
const True = true
const False = false

// create
const addEtudiant = async (req, res)=>{
    let info = {
        matricule: req.body.matricule,
        identite: req.body.identite,
        sexe: req.body.sexe,
        lieunaissance: req.body.lieunaissance,
        datenaissance: req.body.datenaissance,
        province: req.body.province,
        annee: req.body.annee,
        section: req.body.section,
        pourcent: req.body.pourcent,
        adresse: req.body.adresse,
        photo: req.body.photo
    }

    const etudiant = await Etudiant.create(info)
    if(res.status(200)){
        res.send(True)
        console.log(etudiant)
    }else{
        res.send(False)
    }
}

// getall
const getAllEtudiants = async (req, res)=> {
    let etudiants = await Etudiant.findAll({})
    res.status(200).send(etudiants)
}

// get single
const getSingleEtudiants = async (req, res)=> {
    let id = req.params.id
    let etudiants = await Etudiant.findOne({
        where: { matricule:id }
    })
    if(etudiants!=null){
        res.send(etudiants)
    }else{
        res.send(False)
    }
}

const getEtudiantInscription = async (req, res)=>{
    const data = await Etudiant.findAll({
        include: [{
            model: Inscription,
            as: 'inscription',
            include: [{
                model: Filiere,
                as: 'filiere'
            }]
        }]
    })
    res.status(200).send(data)
}

module.exports = {
    addEtudiant,
    getAllEtudiants,
    getSingleEtudiants,
    getEtudiantInscription,
}