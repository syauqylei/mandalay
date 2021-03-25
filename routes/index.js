const express = require ('express')
const router = express.Router()
const Controller = require ('../controllers/controller')



router.get('/', Controller.login)
router.get('/readers', Controller.findAllreaders)
router.get('/readers/:id', Controller.finAllReadersId)
router.get('/readers/:id/addPaper', Controller.addPapers)
router.post('/readers/:id/addPaper', Controller.postPaper)

module.exports = router