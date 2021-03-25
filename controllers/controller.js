const {Paper, Author} =  require ('../models')

class Controller{
    static login(req,res){
        .then(data => {
            res.render('home')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = Controller