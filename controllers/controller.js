const {Readers, Papers, Authors , ReaderPapers} =  require ('../models')

class Controller{
    static home(req,res){
      const errMsg = req.query.err;
      res.render('home',{errMsg})
    }

  static login(req,res) {
    if(req.session.loginFailed) {
      const errMsg = req.session.loginFailedMsg;
      res.redirect(`/?err=${errMsg}`)
    } else {
      res.redirect(`/readers/${req.session.user.id}`) }
  }

  static user(req,res) {
    const userData  = req.session.user;
    console.log(userData);
    Readers.findAll({where:{
      id: +req.params.id
    }}).
      then ( data =>  {
        res.render('readers',{userData:userData,data:data});
      }).
      catch( err => res.send(err) );
  }

  static findAllreaders(req,res) {
    Readers.findAll().
      then( data => {
        res.render('readers',{
          data:data,
          userData:req.session.user})
      }).
      catch( err => res.send(err) )
  }

  static paperList(req,res) {
    const userData  = req.session.user;
    req.session.addpaper = 0;
    Papers.findAll().
      then( data => {
        res.render('papers',{userData:userData,data:data})
      }).
      catch( err => res.send(err) )
  }

  static getPaperlistReader(req,res) {
    console.log(req.session.user);
    ReaderPapers.findAll({include:  [
                                      { model: Papers,
                                        required : true
                                      },
                                      {
                                        model: Readers,
                                        where: {
                                          id: +req.params.id
                                        }
                                      }
                                     ]
    }).
      then( data => {
        res.render('paperlistreader',{
                              userData:req.session.user,
                              data:data
        })
      }).
      catch( err => res.send(err) )
  }

  static postPaperlistReader(req,res) {
    const values = req.body.status.split(',');
console.log(values)
    ReaderPapers.update(values[1],{where:{
      ReadersId: +req.params.id,
      PapersId: 1
    }}).
      then( () => {
        res.redirect(`/readers/${+req.params.id}/paperslist`);
      }).
      catch( err => res.send(err) )
  }
  static addReaderPaper(req,res) {
    const readerId = +req.params.readerid;
    const paperId = +req.params.paperid;
    const values = {
      PapersId : paperId,
      ReadersId: readerId,
      status: "plan to read",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ReaderPapers.create(values).
      then( () => {
        res.redirect(`/papers` )
      }).
      catch( err => res.send(err) )
  }
}

module.exports = Controller
