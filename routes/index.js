const express = require ('express')
const router = express.Router()
const Controller = require ('../controllers/controller')
const userChecking = require('../helpers/userChecking.js');

router.get('/',Controller.home)
router.post('/', userChecking,  Controller.login)

router.get('/readers/:id', Controller.user)

router.get('/readers/:id/logout', (req,res) => {
  req.session.destroy();
  res.redirect('/');
})

router.get('/readers', Controller.findAllreaders)
router.get('/papers', Controller.paperList)
router.get('/readers/:id/papersList', Controller.getPaperlistReader)
router.post('/readers/:id/papersList', Controller.postPaperlistReader)
router.get("/readers/:readerid/addpaper/:paperid", Controller.addReaderPaper)
// router.post('/readers/:id/paperList', Controller.postPaperlistReader)
//
module.exports = router
