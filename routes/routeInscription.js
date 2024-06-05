const inscriptionController = require('../controller/inscriptionController')
const filiereController = require('../controller/filiereController')

const router = require('express').Router()

router.post('/add', inscriptionController.addInscription)
router.post('/addfiliere', filiereController.addFiliere)

module.exports = router