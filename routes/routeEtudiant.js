const etudiantController = require('../controller/etudiantController')

const router = require('express').Router()

router.post('/add', etudiantController.addEtudiant)
router.get('/show', etudiantController.getAllEtudiants)
router.get('/getAlletudiantInscription', etudiantController.getEtudiantInscription)

router.get('/:id', etudiantController.getSingleEtudiants)

module.exports = router